"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { HREF } from "../lib/routes";

const NAV = [
  ["home", "Home"],
  ["roboticsai", "Robotics & AI Lab"],
  ["coding", "Coding Lab"],
  ["arvrlab", "AR/VR Lab"],
  ["camps", "Camps"],
  ["about", "About"],
  ["blog", "Blog"],
  ["contact", "Contact"],
  ["faq", "FAQ"],
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close the mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
  }, [open]);

  const isActive = (id) => pathname === HREF[id];

  return (
    <header id="hdr" className={scrolled ? "scrolled" : ""}>
      <div className="wrap nav">
        <Link href="/" className="logo">
          <img src="/images/img-01-d7446ff4.png" alt="Esdar Technologies" />
        </Link>
        <nav className="nav-links" id="navlinks">
          {NAV.map(([id, label]) => (
            <Link
              key={id}
              href={HREF[id]}
              className={"link" + (isActive(id) ? " active" : "")}
            >
              {label}
            </Link>
          ))}
          <span style={{ marginLeft: 10 }}>
            <Link className="btn" id="navcta" href={HREF.contact}>
              Book a Meeting
            </Link>
          </span>
        </nav>
        <button className="burger" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div
        className="mobile-menu"
        id="mobmenu"
        style={{ display: open ? "block" : "none" }}
      >
        <button className="menu-close" onClick={() => setOpen(false)} aria-label="Close menu">
          &times;
        </button>
        <div className="wrap">
          {NAV.map(([id, label]) => (
            <Link key={id} href={HREF[id]} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
          <div style={{ marginTop: 14 }}>
            <Link className="btn menu-cta" href={HREF.contact} onClick={() => setOpen(false)}>
              Book a Meeting
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
