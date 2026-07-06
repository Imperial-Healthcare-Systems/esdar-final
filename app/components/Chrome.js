"use client";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { HREF } from "../lib/routes";

export default function Chrome() {
  const router = useRouter();
  const pathname = usePathname();

  // Expose the global handlers the injected page markup calls via inline onclick.
  useEffect(() => {
    window.go = (page) => router.push(HREF[page] || "/");

    window.toggleFaq = (btn) => {
      const item = btn.parentElement;
      const ans = item.querySelector(".faq-a");
      if (item.classList.contains("open")) {
        item.classList.remove("open");
        ans.style.maxHeight = null;
      } else {
        item.classList.add("open");
        ans.style.maxHeight = ans.scrollHeight + "px";
      }
    };

    window.submitForm = () => {
      const n = document.getElementById("f-name")?.value;
      const e = document.getElementById("f-email")?.value;
      if (!n || !e) {
        alert("Please add your name and email so we can reach you.");
        return;
      }
      const box = document.getElementById("formbox");
      if (box)
        box.innerHTML =
          '<div style="text-align:center;padding:30px 10px;"><div style="width:60px;height:60px;border-radius:50%;background:var(--grad-soft);display:flex;align-items:center;justify-content:center;margin:0 auto 18px;"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0037F2" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg></div><h3 style="font-family:var(--serif);font-weight:600;font-size:26px;margin-bottom:10px;">Thank you</h3><p style="font-weight:300;color:var(--grey);">We\'ve received your message and will be in touch shortly.</p></div>';
    };

    window.lightbox = (src) => {
      const img = document.getElementById("lb-img");
      if (img) img.src = src;
      document.getElementById("lightbox")?.classList.add("open");
    };
    window.closeLightbox = () => {
      document.getElementById("lightbox")?.classList.remove("open");
    };

    const lb = document.getElementById("lightbox");
    const onLbClick = () => window.closeLightbox();
    lb?.addEventListener("click", onLbClick);
    return () => lb?.removeEventListener("click", onLbClick);
  }, [router]);

  // Reveal-on-scroll, re-run on every route change.
  useEffect(() => {
    const runReveal = () => {
      const els = document.querySelectorAll(".reveal");
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver(
          (entries) => {
            entries.forEach((en) => {
              if (en.isIntersecting) {
                en.target.classList.add("in");
                io.unobserve(en.target);
              }
            });
          },
          { threshold: 0.05, rootMargin: "0px 0px -5% 0px" }
        );
        els.forEach((el) => {
          const r = el.getBoundingClientRect();
          if (r.top < (window.innerHeight || 900) * 0.95) el.classList.add("in");
          else io.observe(el);
        });
      } else {
        els.forEach((el) => el.classList.add("in"));
      }
      setTimeout(() => {
        document.querySelectorAll(".reveal:not(.in)").forEach((el) => el.classList.add("in"));
      }, 600);
    };

    runReveal();
    window.addEventListener("scroll", runReveal);
    window.addEventListener("resize", runReveal);
    return () => {
      window.removeEventListener("scroll", runReveal);
      window.removeEventListener("resize", runReveal);
    };
  }, [pathname]);

  return null;
}
