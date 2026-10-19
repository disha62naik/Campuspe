import { ArrowRight, BadgeCheck, MessageSquare, Building2, Scale } from "lucide-react";
import "./audience.css";

const CARDS = [
  { n: "01", label: "Verified Profile", title: "Build your college profile",
    text: "Showcase your college, courses, fees, campus, placements and achievements in one structured profile that students and recruiters can discover.",
    tags: [
      { cls: "pill--green", icon: BadgeCheck, text: "NAAC A++ Ready" },
      { cls: "pill--cyan", text: "98% Match" },
    ] },
  { n: "02", label: "Direct Enroll", title: "Students discover and connect",
    text: "Students searching for colleges can discover your profile, explore your courses and fees, and connect directly with your admission team.",
    tags: [
      { cls: "pill--indigo", icon: MessageSquare, text: "Direct Enquiries" },
      { cls: "pill--grey", dot: true, text: "WHATSAPP / CHAT" },
    ], note: "Avg. response: <15 min" },
  { n: "03", label: "Campus Recruiting", title: "Recruiters discover your College",
    text: "Companies hiring fresh talent can discover your college, explore your talent and connect with your placement team.",
    tags: [
      { cls: "pill--purple", icon: Building2, text: "500+ Hiring Partners" },
      { cls: "pill--indigo", icon: Scale, text: "Connect Directly" },
    ] },
  { n: "04", label: "Live HUD", title: "Track placements in real time",
    text: "Track students, interviews, offers and placements from one centralized dashboard.",
    tags: [
      { cls: "pill--red", dot: true, text: "LIVE PLACEMENTS" },
      { cls: "pill--solid", text: "Students · Interviews · Offers" },
    ] },
];

export default function Colleges() {
  return (
    <section className="aud section" id="colleges">
      <div className="aud__glow section__glow" aria-hidden="true" />
      <div className="container aud__grid">
        <div>
          <span className="eyebrow"><i className="eyebrow__dot" /> 02 • For Colleges</span>
          <h2 className="h-display aud__title">Get Discovered<br />by <em>Students and Recruiters.</em></h2>
          <p className="aud__lead">
            Put your college in front of students searching for the right course and recruiters looking for the
            right talent. CampusPe helps you build your presence, attract enquiries and connect with opportunities.
          </p>
          <a href="#" className="btn btn--primary aud__cta">List Your College <ArrowRight size={16} /></a>
        </div>

        <ol className="aud-list">
          {CARDS.map((c) => (
            <li key={c.n} className="aud-card">
              <div className="aud-card__main">
                <div className="aud-card__kicker"><span className="aud-card__n">{c.n}</span><span className="aud-card__label">{c.label}</span></div>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
              <div className="aud-card__tags">
                {c.tags.map((t) => {
                  const Icon = t.icon;
                  return (
                    <span key={t.text} className={`pill ${t.cls}`}>
                      {t.dot && <i />}{Icon && <Icon size={13} />}{t.text}
                    </span>
                  );
                })}
                {c.note && <span className="aud-card__note">{c.note}</span>}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
