import type { CSSProperties } from "react";
import Link from "next/link";
import {
  Activity,
  ArrowUpRight,
  Box,
  CloudUpload,
  GitBranch,
  ShieldCheck,
} from "lucide-react";

const deploymentStages = [
  { title: "Commit", detail: "Code is pushed", label: "SOURCE", icon: GitBranch },
  { title: "Build", detail: "App is packaged", label: "BUILD", icon: Box },
  { title: "Stage", detail: "Checks run safely", label: "PREVIEW", icon: ShieldCheck },
  { title: "Deploy", detail: "Release goes live", label: "PRODUCTION", icon: CloudUpload },
  { title: "Monitor", detail: "Health is observed", label: "HEALTH CHECK", icon: Activity },
];

export function DeploymentShowcase() {
  return (
    <section className="deployment-section section-space" aria-labelledby="deployment-heading">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-12 col-lg-5">
            <div className="deployment-copy">
              <span className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> DEPLOYMENT, MADE VISIBLE</span>
              <h2 id="deployment-heading">From a reviewed change to a release your team can observe.</h2>
              <p>A deployment pipeline packages changes, checks them, stages a release, and watches the production service. This illustration shows a typical path—your actual approval rules and infrastructure may differ.</p>
              <ul>
                <li><ShieldCheck size={17} /> Build and check changes before release</li>
                <li><CloudUpload size={17} /> Promote a reviewed build to production</li>
                <li><Activity size={17} /> Monitor service health after deployment</li>
              </ul>
              <Link className="button button-primary" href="/services/cloud-devops">Explore Cloud & DevOps <ArrowUpRight size={15} /></Link>
            </div>
          </div>
          <div className="col-12 col-lg-7">
            <div className="deployment-window">
              <div className="deployment-window-bar">
                <span className="deploy-window-brand"><span className="deploy-window-mark"><span /></span> RELEASE PIPELINE</span>
                <span className="deploy-example"><i /> ILLUSTRATIVE FLOW</span>
              </div>
              <div className="deployment-console">
                <div className="deployment-console-copy">
                  <span>CODE CHANGE <span aria-hidden="true">→</span> PRODUCTION</span>
                  <span>EXAMPLE DEPLOYMENT</span>
                </div>
                <div className="deployment-scroll" tabIndex={0} aria-label="Scroll horizontally through the deployment stages">
                  <ol className="deployment-track" aria-label="Illustrative release path from a code commit to production health checks">
                    {deploymentStages.map(({ title, detail, label, icon: Icon }, index) => (
                      <li
                        className="deployment-stage"
                        key={title}
                        style={{ "--deployment-index": index } as CSSProperties}
                      >
                        <span className="deployment-stage-label">{label}</span>
                        <span className="deployment-stage-icon"><Icon size={20} strokeWidth={1.8} /></span>
                        <strong>{title}</strong>
                        <span className="deployment-stage-detail">{detail}</span>
                      </li>
                    ))}
                  </ol>
                </div>
                <div className="deployment-console-footer">
                  <span><span className="deploy-check"><ShieldCheck size={13} /></span> Checks and approvals happen before production.</span>
                  <span>EXAMPLE ONLY · NO LIVE STATUS</span>
                </div>
              </div>
              <p className="deployment-scroll-hint"><span aria-hidden="true">↔</span> Scroll to follow the deployment stages.</p>
              <p className="deployment-caption">A useful release includes validation before deployment and monitoring after it.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
