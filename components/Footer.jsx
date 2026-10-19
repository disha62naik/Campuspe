import { Mail, Phone } from "lucide-react";
import Logo from "@/components/ui/Logo";
import { LinkedInIcon, InstagramIcon, TwitterIcon, FacebookIcon, WhatsAppIcon, YouTubeIcon } from "@/components/ui/Icons";
import "./footer.css";

const CTAS = [
  { label: "Explore Colleges", href: "#colleges" },
  { label: "Find Opportunities", href: "#upload" },
  { label: "List Your College", href: "#colleges" },
  { label: "Post a Job", href: "#employers" },
];

const COLUMNS = [
  { mod: "students", title: "For Students", links: ["Explore Colleges", "Find Opportunities", "Internships", "Full-time Jobs", "Part-time & Gig", "Application Tracker"] },
  { mod: "colleges", title: "For Colleges", links: ["List Your College", "Admissions", "Fee Collection", "Placements"] },
  { mod: "employers", title: "For Employers", links: ["Post a Job", "Find Talent", "Campus Hiring"] },
  { mod: "company", title: "Company", links: ["About Us", "Contact Us", "Blogs", "Careers"] },
];

const LEGAL = ["Privacy Policy", "Terms & Conditions", "Refund & Cancellation Policy", "Cookie Policy", "Grievance Redressal", "Job & Internship Disclaimer"];

const SOCIALS = [
  { label: "LinkedIn", icon: LinkedInIcon },
  { label: "Instagram", icon: InstagramIcon },
  { label: "Twitter", icon: TwitterIcon },
  { label: "Facebook", icon: FacebookIcon },
  { label: "WhatsApp", icon: WhatsAppIcon },
  { label: "YouTube", icon: YouTubeIcon },
];

export default function Footer() {
  return (

    <footer className="ft section">
      <div className="ft__glow section__glow" aria-hidden="true" />
      <div className="container">
        {/* CTA band */}
        <div className="ft-cta">
          <div className="ft-cta__copy">
            <h2>Ready for what’s next?</h2>
            <p>Discover colleges, find opportunities, list your institution, or start hiring with CampusPe.</p>
          </div>
          <div className="ft-cta__btns">
            {CTAS.map((c) => (
              <a key={c.label} href={c.href} className="ft-cta__btn">
                {c.label} <span aria-hidden="true">→</span>
              </a>
            ))}
          </div>
        </div>

        {/* link columns (6 columns: brand + 4 link groups + legal) */}
        <div className="ft__cols">
          <div className="ft__brand">
            <a href="#home" aria-label="CampusPe home"><Logo variant="footer" /></a>
            <p>From choosing a college to finding your next opportunity.</p>
            <p>CampusPe connects students, colleges and employers in one place.</p>
          </div>

          {COLUMNS.map((col) => (
            <nav key={col.title} className={`ft__col ft__col--${col.mod}`} aria-label={col.title}>
              <h3>{col.title}</h3>
              <ul>{col.links.map((l) => <li key={l}><a href="#">{l}</a></li>)}</ul>
            </nav>
          ))}


          <nav className="ft__col ft__col--legal" aria-label="Legal and policies">
            <h3>Legal &amp; Policies</h3>
            <ul>{LEGAL.map((l) => <li key={l}><a href="#">{l}</a></li>)}</ul>
            <a href="#" className="ft__all">View all policies <span aria-hidden="true">→</span></a>
            <p className="ft__note">Separate user, institution and employer terms can live inside the full Policies page.</p>
          </nav>
        </div>

        {/* contact row */}
        <div className="ft__contact">
          <a href="mailto:contactus@campuspe.com"><span><Mail size={13} /></span>contactus@campuspe.com</a>
          <a href="tel:+916362606464"><span><Phone size={13} /></span>+91 6362606464</a>
          <p><i /> Students · Colleges · Employers</p>
        </div>

        {/* bottom row */}
        <div className="ft__bottom">
          <p>2026 CampusPe Technologies Pvt. Ltd. <a href="#">Privacy</a> <a href="#">Terms</a> <a href="#">Grievance</a></p>
          <ul className="ft__social">
            {SOCIALS.map(({ label, icon: Icon }) => (
              <li key={label}><a href="#" aria-label={label}><Icon width={22} height={22} /></a></li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}