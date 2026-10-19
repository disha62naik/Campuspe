import { ArrowRight, Zap, EyeOff, MessageCircle } from "lucide-react";
import "./audience.css";

const CARDS = [
  { n: "01", title: "Post a role in minutes",
    text: "Define your skills, location and hiring requirements. Reach relevant candidates across the CampusPe network.",
    tags: [{ cls: "pill--mint", icon: Zap, text: "5 Min Deployment" }, { cls: "pill--grey", text: "500+ Campus Network", plain: true }] },
  { n: "02", title: "Receive a matched shortlist",
    text: "Get candidates matched to your role by skills, experience, location and hiring requirements.",
    tags: [{ cls: "pill--purple", icon: EyeOff, text: "Zero CV Clutter" }, { cls: "pill--grey", text: "Tier 1–Tier 3 Parity", plain: true }] },
  { n: "03", title: "Connect with candidates directly",
    text: "Message, schedule interviews, and move candidates through your pipeline — all in one place.",
    tags: [{ cls: "pill--indigo", icon: MessageCircle, text: "In-App Scheduling" }, { cls: "pill--grey", text: "1-Click Video / Chat", plain: true }] },
  { n: "04", title: "Reduce your time-to-hire",
    text: "Find matched candidates, connect with them and move from shortlist to offer in one streamlined workflow.",
    tags: [{ cls: "pill--solid", text: "<2 DAYS" }, { cls: "pill--mint", text: "57% Faster Hiring" }] },
];

export default function Employers() {
  return (
    <section className="aud section" id="employers">
      <div className="aud__glow section__glow" aria-hidden="true" />
      <div className="container aud__grid">
        <div>
          <span className="eyebrow"><i className="eyebrow__dot" /> 03 • For Employers</span>
          <h2 className="h-display aud__title">Stop running campus drives. <em>Start hiring the right people.</em></h2>
          <p className="aud__lead">
            Post a role in minutes and reach relevant candidates without the time, travel and coordination of
            traditional hiring. CampusPe helps you discover, match and connect with talent from colleges and beyond.
          </p>
          <a href="#" className="btn btn--primary aud__cta">Post a Job <ArrowRight size={16} /></a>
        </div>

        <ol className="aud-list">
          {CARDS.map((c) => (
            <li key={c.n} className="aud-card aud-card--emp">
              <div className="aud-card__lead-row">
                <span className="aud-card__num">{c.n}</span>
                <div className="aud-card__main">
                  <div className="aud-card__titlerow">
                    <h3>{c.title}</h3>
                    <span className="aud-card__setup">Instant Setup</span>
                  </div>
                  <p>{c.text}</p>
                </div>
              </div>
              <div className="aud-card__tags">
                {c.tags.map((t) => {
                  const Icon = t.icon;
                  return (
                    <span key={t.text} className={`pill ${t.cls}`}>
                      {Icon && <Icon size={13} />}{t.text}
                    </span>
                  );
                })}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
