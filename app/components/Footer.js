"use client";
import Link from "next/link";
import { HREF } from "../lib/routes";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="wrap foot-grid">
        <div>
          <img
            src="/images/img-13-6582066e.png"
            alt="Esdar Technologies"
            style={{ height: 34, width: "auto" }}
          />
          <p className="foot-blurb">
            We spark innovation. Esdar is an innovation-driven education initiative delivering
            practical robotics &amp; AI learning to schools — labs, camps, kits, instructors and
            curriculum.
          </p>
        </div>
        <div>
          <div className="foot-h">Explore</div>
          <Link className="fl" href={HREF.home}>Home</Link>
          <Link className="fl" href={HREF.schools}>For Schools</Link>
          <Link className="fl" href={HREF.labsetup}>Lab Setup</Link>
          <Link className="fl" href={HREF.camps}>Camps</Link>
        </div>
        <div>
          <div className="foot-h">Programs</div>
          <Link className="fl" href={HREF.kits}>Kits</Link>
          <Link className="fl" href={HREF.projects}>Projects</Link>
          <Link className="fl" href={HREF.about}>About</Link>
        </div>
        <div>
          <div className="foot-h">Company</div>
          <Link className="fl" href={HREF.blog}>Blog</Link>
          <Link className="fl" href={HREF.contact}>Contact</Link>
          <Link className="fl" href={HREF.faq}>FAQ</Link>
        </div>
        <div>
          <div className="foot-h">Contact</div>
          <div className="foot-blurb" style={{ marginTop: 0, color: "rgba(255,255,255,.72)" }}>
            <div>
              <a href="mailto:connect@esdar.in" style={{ color: "var(--cyan)", textDecoration: "none" }}>
                connect@esdar.in
              </a>
            </div>
            <div>
              <a href="tel:+919509064073" style={{ color: "inherit", textDecoration: "none" }}>
                +91 95090 64073
              </a>
            </div>
            <div style={{ marginTop: 8, lineHeight: 1.55 }}>
              Masjid Chowk, Nokha &mdash; 334803<br />Bikaner, Rajasthan
            </div>
          </div>
        </div>
      </div>
      <div className="wrap foot-bottom">
        <span>© {year} Esdar Technologies. All rights reserved.</span>
        <span>Privacy Policy · Terms &amp; Conditions</span>
      </div>
    </footer>
  );
}
