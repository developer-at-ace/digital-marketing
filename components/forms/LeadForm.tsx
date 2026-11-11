"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { leadSchema, type LeadFormValues, type LeadInput } from "@/lib/validation";
import { services } from "@/data/site";

export function LeadForm() {
  const [step, setStep] = useState(0);
  const [submissionError, setSubmissionError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm<LeadFormValues, undefined, LeadInput>({ resolver: zodResolver(leadSchema) });

  const submit = async (values: LeadInput) => {
    setSubmissionError("");
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const result = await response.json() as { error?: string };
      if (!response.ok) {
        setSubmissionError(result.error ?? "We couldn’t send your enquiry. Please try again.");
        return;
      }
      setSubmitted(true);
    } catch {
      setSubmissionError("We couldn’t reach the server. Please try again.");
    }
  };

  const nextStep = async () => {
    const valid = await trigger(
      step === 0 ? ["name", "email"] : ["service", "project"],
    );
    if (valid) setStep((current) => current + 1);
  };
  if (submitted) {
    return (
      <div className="form-success" role="status">
        <span className="success-check" aria-hidden="true">✓</span>
        <h3>Your project brief is on its way.</h3>
        <p>Thanks for sharing the details. Your enquiry has been received.</p>
      </div>
    );
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit(submit)} noValidate>
      <div className="form-stepper" role="group" aria-label={`Step ${step + 1} of 3`}>
        {["Your details", "Project scope", "Planning"].map((label, index) => (
          <div className={`form-step${step === index ? " is-active" : ""}${step > index ? " is-complete" : ""}`} key={label} aria-current={step === index ? "step" : undefined}>
            <span>{step > index ? "✓" : `0${index + 1}`}</span><small>{label}</small>
          </div>
        ))}
      </div>
      <div className="form-step-title"><h3>{["A little about you", "Tell us about the work", "A few final details"][step]}</h3><span>Step {step + 1} of 3</span></div>
      <div className="row g-3">
        {step === 0 && <>
        <div className="col-12 col-md-6">
          <label htmlFor="lead-name">Your name <span aria-hidden="true">*</span></label>
          <input id="lead-name" autoComplete="name" {...register("name")} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "lead-name-error" : undefined} />
          {errors.name && <span className="field-error" id="lead-name-error">{errors.name.message}</span>}
        </div>
        <div className="col-12 col-md-6">
          <label htmlFor="lead-email">Work email <span aria-hidden="true">*</span></label>
          <input id="lead-email" type="email" autoComplete="email" {...register("email")} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "lead-email-error" : undefined} />
          {errors.email && <span className="field-error" id="lead-email-error">{errors.email.message}</span>}
        </div>
        <div className="col-12 col-md-6">
          <label htmlFor="lead-company">Organisation</label>
          <input id="lead-company" autoComplete="organization" {...register("company")} />
        </div>
        </>}
        {step === 1 && <>
        <div className="col-12 col-md-6">
          <label htmlFor="lead-service">What do you need help with? <span aria-hidden="true">*</span></label>
          <select id="lead-service" defaultValue="" {...register("service")} aria-invalid={Boolean(errors.service)} aria-describedby={errors.service ? "lead-service-error" : undefined}>
            <option value="" disabled>Select a service</option>
            {services.map((service) => <option value={service.title} key={service.slug}>{service.title}</option>)}
            <option value="Not sure yet">Not sure yet</option>
          </select>
          {errors.service && <span className="field-error" id="lead-service-error">{errors.service.message}</span>}
        </div>
        <div className="col-12">
          <label htmlFor="lead-project">Tell us about your project <span aria-hidden="true">*</span></label>
          <textarea id="lead-project" rows={5} placeholder="What are you trying to achieve, and what would be helpful to discuss?" {...register("project")} aria-invalid={Boolean(errors.project)} aria-describedby={errors.project ? "lead-project-error" : undefined} />
          {errors.project && <span className="field-error" id="lead-project-error">{errors.project.message}</span>}
        </div>
        </>}
        {step === 2 && <>
        <div className="col-12 col-md-6">
          <label htmlFor="lead-budget">Indicative budget</label>
          <select id="lead-budget" defaultValue="" {...register("budget")}>
            <option value="">Prefer not to say</option>
            <option value="Under $10,000">Under $10,000</option>
            <option value="$10,000–$50,000">$10,000–$50,000</option>
            <option value="$50,000–$100,000">$50,000–$100,000</option>
            <option value="$100,000+">$100,000+</option>
            <option value="To be determined">To be determined</option>
          </select>
        </div>
        <div className="col-12 col-md-6">
          <label htmlFor="lead-timeline">Preferred timeline</label>
          <select id="lead-timeline" defaultValue="" {...register("timeline")}>
            <option value="">Not decided</option>
            <option value="As soon as practical">As soon as practical</option>
            <option value="Within 1–3 months">Within 1–3 months</option>
            <option value="Within 3–6 months">Within 3–6 months</option>
            <option value="Exploring options">Exploring options</option>
          </select>
        </div>
        <div className="col-12">
          <label className="consent-label" htmlFor="lead-consent">
            <input id="lead-consent" type="checkbox" {...register("consent")} aria-invalid={Boolean(errors.consent)} aria-describedby={errors.consent ? "lead-consent-error" : undefined} />
            <span>I agree that SuamGlobalDigital may use these details to respond to my enquiry.</span>
          </label>
          <p className="consent-more"><Link href="/privacy-policy">Read the privacy policy.</Link></p>
          {errors.consent && <span className="field-error" id="lead-consent-error">{errors.consent.message}</span>}
        </div>
        </>}
        <div className="col-12">
          {submissionError && <p className="form-error" role="alert">{submissionError}</p>}
          <div className="form-navigation">
            {step > 0 && <button className="button button-outline" type="button" onClick={() => setStep((current) => current - 1)}><ArrowLeft size={15} /> Back</button>}
            {step < 2 ? (
              <button className="button button-primary" type="button" onClick={() => void nextStep()}>Continue <ArrowRight size={15} /></button>
            ) : (
              <button className="button button-primary submit-button" type="submit" disabled={isSubmitting}>{isSubmitting ? "Sending your brief…" : "Send project brief"}</button>
            )}
          </div>
          {step === 2 && <p className="form-note">Your information is used only to respond to this enquiry.</p>}
        </div>
      </div>
    </form>
  );
}
