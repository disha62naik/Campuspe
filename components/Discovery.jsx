"use client";
import { useState } from "react";
import { Zap, ArrowRight, BookOpen, MapPin, Globe, Briefcase } from "lucide-react";
import ImageSlot from "@/components/ui/ImageSlot";
import { ASSETS } from "@/lib/assets";
import "./discovery.css";

const STEPS = [
  { n: "01", title: "Set your preferences", tag: "Smart Profile", tone: "indigo", active: true,
    text: "Tell us what you’re looking for, from colleges and courses to jobs, internships and gigs." },
  { n: "02", title: "Discover relevant opportunities", tag: "AI Ranked", tone: "grey",
    text: "Explore colleges and career opportunities matched to your profile, interests and goals" },
  { n: "03", title: "Get notified when something fits", tag: "Instant Alerts", tone: "green",
    text: "Get notified when a relevant college or new opportunity is found, so you can act early." },
];

const FILTERS = ["All", "Colleges", "Jobs", "Internships", "Freelance", "Part-time"];

const META_ICON = { book: BookOpen, pin: MapPin, remote: Globe, work: Briefcase };

const ITEMS = [
  { id: 1, type: "Colleges", featured: true, logo: "iim", title: "IIM Bangalore",
    tag: { label: "Top College", tone: "purple" },
    meta: [{ icon: "book", text: "MBA" }, { icon: "pin", text: "Bengaluru" }, { text: "₹ 3L+", strong: true }],
    desc: "India’s premier management institute with global exposer...", cta: "View Details" },
  { id: 2, type: "Internships", featured: true, logo: "google", title: "Product Intern",
    tag: { label: "Internship", tone: "blue" },
    meta: [{ icon: "pin", text: "Bengaluru" }, { icon: "work", text: "Hybrid" }, { text: "₹ 35K/mo", strong: true }],
    desc: "Work on real products, learn from top engineers and build...", cta: "Apply Now" },
  { id: 3, type: "Freelance", featured: true, logo: "notion", title: "Marketing Gig",
    tag: { label: "Freelance", tone: "green" },
    meta: [{ icon: "remote", text: "Remote" }, { icon: "work", text: "Freelance" }, { text: "₹ 10K - ₹ 25K", strong: true }],
    desc: "Create content and help with social media campaigns for...", cta: "View Details" },
  { id: 4, type: "Jobs", title: "Software Engineer",
    tag: { label: "Full-time", tone: "blue" },
    meta: [{ icon: "pin", text: "Bengaluru" }, { icon: "work", text: "On-site" }, { text: "₹ 6L - ₹ 10L", strong: true }],
    desc: "Build and ship features with a fast-growing product team...", cta: "Apply Now" },
  { id: 5, type: "Part-time", title: "Campus Ambassador",
    tag: { label: "Part-time", tone: "green" },
    meta: [{ icon: "remote", text: "Remote" }, { icon: "work", text: "Part-time" }, { text: "₹ 5K - ₹ 8K", strong: true }],
    desc: "Represent your college and help students discover...", cta: "View Details" },
];

export default function Discovery() {
  const [filter, setFilter] = useState("All");
  const visible = filter === "All" ? ITEMS.filter((i) => i.featured) : ITEMS.filter((i) => i.type === filter);

  return (
    <section className="disc section" id="discover">
      <div className="disc__glow section__glow" aria-hidden="true" />
      <div className="container disc__grid">
        {/* ---------- left ---------- */}
        <div className="disc__left">
          <span className="eyebrow"><i className="eyebrow__dot" /> 01 • Opportunity Discovery</span>
          <h2 className="h-display disc__title">Stop searching.<br /><em>Start getting matched.</em></h2>
          <p className="disc__lead">
            Tell CampusPe your skills, preferences and goals. We continuously monitor company career pages and job
            sources, find opportunities that match you,<br className="br-lg" /> and notify you when they appear.
          </p>

          <ol className="disc-steps">
            {STEPS.map((s) => (
              <li key={s.n} className={`disc-step ${s.active ? "is-active" : ""}`}>
                <span className="disc-step__n">{s.n}</span>
                <div className="disc-step__body">
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
                <span className={`tag tag--${s.tone}`}>{s.tag}</span>
              </li>
            ))}
          </ol>

          <a href="#upload" className="btn btn--primary disc__cta">Explore opportunities <ArrowRight size={16} /></a>
        </div>

        {/* ---------- right ---------- */}
        <div className="disc__right">
          <div className="feed">
            <header className="feed__head">
              <span className="feed__bolt"><Zap size={20} fill="currentColor" /></span>
              <div className="feed__heading">
                <h3>CampusPe Opportunity Feed</h3>
                <p>Colleges &amp; opportunities matched to you</p>
              </div>
              <span className="feed__live"><i /> 12 new matches today</span>
            </header>

            <div className="feed__chips" role="tablist" aria-label="Filter opportunities">
              {FILTERS.map((f) => (
                <button key={f} role="tab" aria-selected={filter === f}
                  className={`chip ${filter === f ? "is-active" : ""}`} onClick={() => setFilter(f)}>
                  {f}
                </button>
              ))}
            </div>

            <ul className="feed__list">
              {visible.map((it) => (
                <li key={it.id} className="feed-item">
                  {it.logo ? (
                    <ImageSlot src={ASSETS.companyLogos[it.logo]} alt={`${it.title} logo`} label="logo" className="feed-item__logo" />
                  ) : (
                    <span className="feed-item__logo feed-item__logo--text">{it.title.charAt(0)}</span>
                  )}
                  <div className="feed-item__main">
                    <div className="feed-item__row">
                      <h4>{it.title}</h4>
                      <span className={`tag tag--${it.tag.tone}`}>{it.tag.label}</span>
                    </div>
                    <p className="feed-item__meta">
                      {it.meta.map((m, i) => {
                        const Icon = m.icon ? META_ICON[m.icon] : null;
                        return (
                          <span key={i} className={m.strong ? "is-strong" : ""}>
                            {Icon && <Icon size={13} />}{m.text}
                          </span>
                        );
                      })}
                    </p>
                    <p className="feed-item__desc">{it.desc}</p>
                  </div>
                  <a href="#upload" className="feed-item__btn">{it.cta}</a>
                </li>
              ))}
            </ul>

            <footer className="feed__foot">
              <a href="#upload">View all matched opportunities <ArrowRight size={15} /></a>
              <span>Curated for you • Updated daily</span>
            </footer>
          </div>

          <p className="disc__note">
            <svg width="34" height="26" viewBox="0 0 34 26" fill="none" aria-hidden="true">
              <path d="M32 24C20 24 8 20 4 6" stroke="#6d4bd8" strokeWidth="1.6" strokeLinecap="round" />
              <path d="M2 11L4 5l6 2" stroke="#6d4bd8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>A mix of colleges, jobs,<br />internships and gigs — all in one place.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
