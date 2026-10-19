import { ArrowUpRight, PhoneCall } from "lucide-react";
import ImageSlot from "@/components/ui/ImageSlot";
import { ASSETS } from "@/lib/assets";
import "./download.css";

function StoreBadge({ href, icon, small, big, iconLabel }) {
  return (
    <a href={href} className="store" aria-label={`${small} ${big}`}>
      <ImageSlot src={icon} alt="" label={iconLabel} className="store__icon" />
      <span><small>{small}</small><b>{big}</b></span>
    </a>
  );
}

export default function DownloadApp() {
  return (
    <section className="dl section" id="download">
      <div className="dl__panel">
        <div className="dl__glow section__glow" aria-hidden="true" />
        <div className="container dl__grid">
          <div className="dl__copy">
            <h2>Download App Now</h2>
            <p>
              Elevate your academic journey with Campuspe, the all-in-one digital ecosystem designed to bridge the
              gap between education and industry. Whether you’re a student seeking your next big internship, a
              college looking to empower your cohort, or a company scouting for top-tier talent, Campuspe
              streamlines the connection.Your career doesn’t start at graduation—it starts here.
            </p>
            <div className="dl__stores">
              <StoreBadge href="#" icon={ASSETS.playIcon} small="GET IT ON" big="Google Play" iconLabel="" />
              <StoreBadge href="#" icon={ASSETS.appleIcon} small="Download on the" big="App Store" iconLabel="" />
            </div>
          </div>
          <ImageSlot src={ASSETS.downloadPhones} alt="CampusPe app on two phones" label="Two tilted phones image (676 × 332)" className="dl__phones" />
        </div>
      </div>

      <div className="container">
        <div className="support">
          <h2>Still have questions?</h2>
          <p>Our support team is here to help you succeed. Get in touch anytime.</p>
          <div className="support__btns">
            <a href="#" className="support__btn support__btn--solid">
              Contact Support <span><ArrowUpRight size={18} /></span>
            </a>
            <a href="#" className="support__btn support__btn--outline">
              Schedule a Call <span><PhoneCall size={17} /></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
