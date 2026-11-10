import type { CSSProperties } from "react";
import {
  Activity,
  Check,
  Code2,
  GitBranch,
  Rocket,
  TestTubeDiagonal,
} from "lucide-react";

const stages = [
  { title: "Commit", detail: "Push a change", icon: GitBranch },
  { title: "Build", detail: "Compile the app", icon: Code2 },
  { title: "Test", detail: "Check every change", icon: TestTubeDiagonal },
  { title: "Review", detail: "Approve the release", icon: Check },
  { title: "Deploy", detail: "Ship to production", icon: Rocket },
  { title: "Monitor", detail: "Watch and improve", icon: Activity },
];

const stageStates = [
  "CHANGE PUSHED",
  "BUILD ARTIFACT",
  "CHECKS PASS",
  "READY TO SHIP",
  "RELEASE LIVE",
  "HEALTH CHECK",
];

export function CiCdWorkflow() {
  return (
    <section className="cicd-section" aria-labelledby="cicd-heading">
      <div className="cicd-heading">
        <div>
          <span className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> FROM CODE TO CUSTOMERS</span>
          <h2 id="cicd-heading">Every change has a clear path to production.</h2>
        </div>
        <p>CI/CD connects code, automated checks, and deployment in one repeatable workflow. Follow a change as it moves through each stage.</p>
      </div>

      <div className="cicd-window">
        <div className="cicd-window-bar">
          <span className="window-lights" aria-hidden="true"><i /><i /><i /></span>
          <span className="pipeline-live"><i /> AUTOMATED WORKFLOW</span>
        </div>

        <div className="pipeline-scroll" tabIndex={0} aria-label="Scroll horizontally to follow all CI/CD pipeline steps">
          <ol className="cicd-track" aria-label="Continuous integration and deployment workflow">
            {stages.map(({ title, detail, icon: Icon }, index) => (
              <li className="cicd-stage" key={title} style={{ "--stage-index": index } as CSSProperties}>
                <span className="cicd-step-number">0{index + 1}</span>
                <span className="cicd-stage-icon"><Icon size={20} strokeWidth={1.8} /></span>
                <strong>{title}</strong>
                <span className="cicd-stage-detail">{detail}</span>
                <span className="cicd-stage-state">{stageStates[index]}</span>
              </li>
            ))}
          </ol>
        </div>

       
      </div>

      <p className="cicd-mobile-hint"><span aria-hidden="true">↔</span> Scroll to follow the workflow from commit to monitoring.</p>
    </section>
  );
}
