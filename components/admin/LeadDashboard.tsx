"use client";

import { useEffect, useState } from "react";
import { LogOut, RefreshCw } from "lucide-react";

type Lead = {
  _id: string;
  name: string;
  email: string;
  company: string;
  service: string;
  project: string;
  budget: string;
  timeline: string;
  status: "new" | "in-progress" | "completed";
  owner: string;
  note: string;
  createdAt: string;
};

const emptyCredentials = { username: "", password: "" };

export function LeadDashboard() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [credentials, setCredentials] = useState(emptyCredentials);
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [savedLeadId, setSavedLeadId] = useState("");
  const [filter, setFilter] = useState("all");

  const loadLeads = async () => {
    try {
      const response = await fetch("/api/admin/leads", { cache: "no-store" });
      if (response.status === 401) {
        setAuthenticated(false);
        return;
      }
      const result = await response.json() as { leads?: Lead[]; error?: string };
      if (!response.ok) throw new Error(result.error ?? "The lead inbox is unavailable.");
      setLeads(result.leads ?? []);
      setAuthenticated(true);
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "The lead inbox is unavailable.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    void fetch("/api/admin/leads", { cache: "no-store", signal: controller.signal })
      .then(async (response) => {
        if (response.status === 401) return null;
        const result = await response.json() as { leads?: Lead[]; error?: string };
        if (!response.ok) throw new Error(result.error ?? "The lead inbox is unavailable.");
        return result.leads ?? [];
      })
      .then((result) => {
        if (controller.signal.aborted) return;
        if (result === null) {
          setAuthenticated(false);
          return;
        }
        setLeads(result);
        setAuthenticated(true);
      })
      .catch((cause: unknown) => {
        if (!controller.signal.aborted) {
          setError(cause instanceof Error ? cause.message : "The lead inbox is unavailable.");
        }
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false);
      });

    return () => controller.abort();
  }, []);

  const signIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    try {
      const response = await fetch("/api/admin/session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });
      const result = await response.json() as { error?: string };
      if (!response.ok) throw new Error(result.error ?? "Could not sign in.");
      setCredentials(emptyCredentials);
      setLoading(true);
      await loadLeads();
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Could not sign in.");
      setLoading(false);
    }
  };

  const updateLead = async (lead: Lead, form: HTMLFormElement) => {
    try {
      const fields = new FormData(form);
      const response = await fetch("/api/admin/leads", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: lead._id,
          status: fields.get("status"),
          owner: fields.get("owner"),
          note: fields.get("note"),
        }),
      });
      const result = await response.json() as { lead?: Lead; error?: string };
      if (!response.ok || !result.lead) {
        setError(result.error ?? "This enquiry could not be updated.");
        return;
      }
      setLeads((current) => current.map((item) => item._id === lead._id ? result.lead! : item));
      setSavedLeadId(lead._id);
      setError("");
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "This enquiry could not be updated.");
    }
  };

  const signOut = async () => {
    try {
      const response = await fetch("/api/admin/session", { method: "DELETE" });
      if (!response.ok) throw new Error("Could not sign out. Please try again.");
      setAuthenticated(false);
      setLeads([]);
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Could not sign out.");
    }
  };

  if (loading && !authenticated) return <p className="admin-loading" role="status">Checking your session…</p>;

  if (!authenticated) {
    return (
      <form className="admin-login card-surface" onSubmit={signIn}>
        <h2>Sign in to the lead inbox</h2>
        <p>Use the administrator credentials configured for this deployment.</p>
        <label htmlFor="admin-username">Username</label>
        <input id="admin-username" autoComplete="username" value={credentials.username} onChange={(event) => setCredentials({ ...credentials, username: event.target.value })} required />
        <label htmlFor="admin-password">Password</label>
        <input id="admin-password" type="password" autoComplete="current-password" value={credentials.password} onChange={(event) => setCredentials({ ...credentials, password: event.target.value })} required />
        {error && <p className="form-error" role="alert">{error}</p>}
        <button className="button button-primary" type="submit" disabled={loading}>{loading ? "Signing in…" : "Sign in"}</button>
      </form>
    );
  }

  const visibleLeads = filter === "all" ? leads : leads.filter((lead) => lead.status === filter);

  return (
    <div className="admin-dashboard">
      <div className="admin-toolbar card-surface">
        <div><h2>Project enquiries</h2><p>{leads.length} recent {leads.length === 1 ? "enquiry" : "enquiries"}</p></div>
        <div className="admin-actions">
          <label className="visually-hidden" htmlFor="lead-filter">Filter enquiries by status</label>
          <select id="lead-filter" value={filter} onChange={(event) => setFilter(event.target.value)}>
            <option value="all">All statuses</option>
            <option value="new">New</option>
            <option value="in-progress">In progress</option>
            <option value="completed">Completed</option>
          </select>
          <button className="icon-button" type="button" onClick={() => { setLoading(true); setError(""); void loadLeads(); }} aria-label="Refresh enquiries"><RefreshCw size={17} /></button>
          <button className="button button-outline" type="button" onClick={() => void signOut()}><LogOut size={15} /> Sign out</button>
        </div>
      </div>
      {error && <p className="form-error" role="alert">{error}</p>}
      {loading ? <p className="admin-loading" role="status">Loading enquiries…</p> : visibleLeads.length === 0 ? (
        <div className="empty-state card-surface"><h3>No enquiries to show</h3><p>New project briefs will appear here after they are submitted.</p></div>
      ) : (
        <div className="lead-list">
          {visibleLeads.map((lead) => (
            <article className="lead-card card-surface" key={lead._id}>
              <div className="lead-card-heading">
                <div><span className="lead-service">{lead.service}</span><h3>{lead.name}{lead.company && <span> · {lead.company}</span>}</h3></div>
                <time dateTime={lead.createdAt}>{new Date(lead.createdAt).toLocaleDateString()}</time>
              </div>
              <a className="lead-email" href={`mailto:${encodeURIComponent(lead.email)}`}>{lead.email}</a>
              <p className="lead-project">{lead.project}</p>
              {(lead.budget || lead.timeline) && <p className="lead-meta">{[lead.budget, lead.timeline].filter(Boolean).join(" · ")}</p>}
              <form className="lead-update row g-3" id={`lead-update-${lead._id}`} onSubmit={(event) => {
                event.preventDefault();
                void updateLead(lead, event.currentTarget);
              }}>
                <div className="col-12 col-md-4"><label>Status<select name="status" defaultValue={lead.status}><option value="new">New</option><option value="in-progress">In progress</option><option value="completed">Completed</option></select></label></div>
                <div className="col-12 col-md-4"><label>Owner<input name="owner" defaultValue={lead.owner} maxLength={100} /></label></div>
                <div className="col-12 col-md-4"><label>Internal note<input name="note" defaultValue={lead.note} maxLength={3000} /></label></div>
                <div className="col-12"><button className="button button-outline" type="submit">Save updates</button>{savedLeadId === lead._id && <span className="saved-note" role="status">Saved</span>}</div>
              </form>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
