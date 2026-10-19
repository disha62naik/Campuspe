"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "@/components/ui/Logo";
import "./navbar.css";

const LINKS = [
  { label: "Colleges", href: "#colleges" },
  { label: "Employers", href: "#employers" },
  { label: "Jobs", href: "#upload" },
  { label: "Blogs", href: "#" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="nav">
      <div className="nav__inner">
        <a href="#home" className="nav__logo" aria-label="CampusPe home">
          <Logo />
        </a>

        <nav className="nav__links" aria-label="Primary">
          {LINKS.map((l) => (
            <a key={l.label} href={l.href}>{l.label}</a>
          ))}
        </nav>

        <div className="nav__actions">
          <a href="#" className="nav__signin">Sign In</a>
          <a href="#" className="nav__signup">Sign Up</a>
        </div>

        <button
          className="nav__toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <div className={`nav__drawer ${open ? "is-open" : ""}`}>
        {LINKS.map((l) => (
          <a key={l.label} href={l.href} onClick={close}>{l.label}</a>
        ))}
        <div className="nav__drawer-actions">
          <a href="#" className="nav__signin" onClick={close}>Sign In</a>
          <a href="#" className="nav__signup" onClick={close}>Sign Up</a>
        </div>
      </div>
    </header>
  );
}
