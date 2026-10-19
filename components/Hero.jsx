import {
  Landmark, GraduationCap, Briefcase, Check, Bell, ArrowRight,
  Users, Building2, ShieldCheck, Bot, Zap,
} from "lucide-react";
import ImageSlot from "@/components/ui/ImageSlot";
import { WhatsAppIcon, SparkleIcon } from "@/components/ui/Icons";
import { ASSETS } from "@/lib/assets";
import "./hero.css";

const CARDS = [
  {
    id: "college", icon: Landmark, badge: "Coming Soon", title: "College",
    desc: "Explore colleges, courses,fees, placements & more",
    points: ["Search by course, location, fees", "Connect directly with colleges", "Improve student placements"],
    cta: "Join Waitlist", ctaIcon: Bell, href: "#colleges",
    illus: ASSETS.collegeIllus, illusLabel: "College illustration",
  },
  {
    id: "job", icon: GraduationCap, badge: "Available Now", title: "I’m Looking for a Job",
    desc: "Upload your resume. We’ll find jobs that fit you.",
    points: ["Jobs from 1000+ sources", "AI powered matching", "WhatsApp & email alerts"],
    cta: "Explore Jobs", ctaIcon: ArrowRight, href: "#upload", tone: "red",
    illus: ASSETS.jobIllus, illusLabel: "Resume illustration",
  },
  {
    id: "hire", icon: Briefcase, badge: "Coming Soon", title: "I’m Hiring",
    desc: "Connect with colleges and find candidates — from students to graduates.",
    points: ["Connect directly with colleges", "Find the right candidates", "Simplify your hiring"],
    cta: "Join Waitlist", ctaIcon: Bell, href: "#employers",
    illus: ASSETS.hireIllus, illusLabel: "Hiring illustration",
  },
];

const STATS = [
  { icon: Users, value: "800+", label: "Students", tone: "violet" },
  { icon: Building2, value: "130+", label: "colleges", tone: "blue" },
  { icon: Briefcase, value: "100+", label: "jobs & internships", tone: "green" },
  { icon: ShieldCheck, value: "100%", label: "Safe & Trusted", tone: "orange" },
];

export default function Hero() {
  const loop = [...ASSETS.partners, ...ASSETS.partners];

  return (
    <section className="hero section" id="home">
      <div className="hero__glow section__glow" aria-hidden="true" />

      <div className="hero__stage">
        {/* floating cards (desktop only) */}
        <aside className="hero-float hero-float--wa" aria-hidden="true">
          <p className="hero-float__title hero-float__title--orange"><WhatsAppIcon width={15} height={15} style={{ color: "#25d366" }} /> WhatsApp Alert</p>
          <p className="hero-float__strong">Get notified on whatsapp</p>
          <p className="hero-float__sub">You’ll get all important updates on your whatsapp</p>
        </aside>

        <aside className="hero-float hero-float--resume" aria-hidden="true">
          <p className="hero-float__title hero-float__title--violet"><Zap size={14} fill="currentColor" /> Resume Builder</p>
          <p className="hero-float__strong">Build Your Resume</p>
          <p className="hero-float__sub">Our resume builder gives you dynamic options to build better &amp; faster resume that got you hired</p>
        </aside>

        <div className="hero-chip hero-chip--left" aria-hidden="true">
          <span className="hero-chip__avatars"><i>AK</i><i>PR</i><i>SN</i></span>
          <span>
            <b><s className="hero-chip__live" /> 🔥 142 students matched today</b>
            <small>Just now • IIT, BITS, VIT</small>
          </span>
        </div>

        <div className="hero-chip hero-chip--right" aria-hidden="true">
          <span className="hero-chip__icon"><Briefcase size={14} /></span>
          <span>
            <b><em>Radiant Info</em> shortlisted 8 interns</b>
            <small className="is-green"><s className="hero-chip__live" /> Verified recruiter • 2 days ago</small>
          </span>
        </div>

        {/* headline */}
        <div className="hero__head">
          <span className="hero__pill"><Bot size={16} /> AI-Powered Campus Assistant</span>
          <h1 className="hero__title">Connect <span>10X Faster.</span></h1>
          <p className="hero__sub">One platform connecting students, colleges &amp; employers — faster.</p>
          <p className="hero__ask">
            <SparkleIcon className="hero__spark" width={18} height={18} />
            What are you looking for?
            <SparkleIcon className="hero__spark" width={18} height={18} />
          </p>
        </div>

        {/* 3 cards */}
        <div className="hero__cards">
          {CARDS.map((c) => {
            const Icon = c.icon;
            const CtaIcon = c.ctaIcon;
            return (
              <article key={c.id} className={`hero-card ${c.tone ? `hero-card--${c.tone}` : ""}`}>
                <ImageSlot src={c.illus} alt={c.illusLabel} label={c.illusLabel} className="hero-card__illus" />
                <div className="hero-card__top">
                  <span className="hero-card__icon"><Icon size={22} /></span>
                  <span className="hero-card__badge">{c.badge}</span>
                </div>
                <h2 className="hero-card__title">{c.title}</h2>
                <p className="hero-card__desc">{c.desc}</p>
                <ul className="hero-card__list">
                  {c.points.map((p) => (
                    <li key={p}><span className="hero-card__tick"><Check size={9} strokeWidth={3.5} /></span>{p}</li>
                  ))}
                </ul>
                <a href={c.href} className="hero-card__btn">{c.cta} <CtaIcon size={15} /></a>
              </article>
            );
          })}
        </div>

        {/* stats */}
        <ul className="hero-stats">
          {STATS.map((s, i) => {
            const Icon = s.icon;
            return (
              <li key={s.label} className="hero-stat">
                <span className={`hero-stat__icon hero-stat__icon--${s.tone}`}><Icon size={24} strokeWidth={1.6} /></span>
                <span><b>{s.value}</b><small>{s.label}</small></span>
                {i < STATS.length - 1 && <i className="hero-stat__sep" aria-hidden="true" />}
              </li>
            );
          })}
        </ul>

        <p className="hero__trusted">Trusted by partners across India</p>
      </div>

      {/* marquee spans full viewport width */}
      <div className="hero-marquee" aria-label="Our partners">
        <div className="hero-marquee__track">
          {loop.map((p, i) => (
            <div className="hero-marquee__item" key={`${p.name}-${i}`} aria-hidden={i >= ASSETS.partners.length}>
              <ImageSlot src={p.src} alt={p.name} label={p.name} style={{ width: p.width, height: 72 }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
