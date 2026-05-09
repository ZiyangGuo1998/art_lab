"use client";

import { useEffect } from "react";

export function ScrollEffects() {
  useEffect(() => {
    const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>(".nav-link, .brand-link"));
    const sections = Array.from(document.querySelectorAll<HTMLElement>("header[id], section[id]"));
    const cleanups: Array<() => void> = [];

    navLinks.forEach((link) => {
      const handleClick = (event: MouseEvent) => {
        const hash = link.getAttribute("href");
        if (!hash?.startsWith("#")) return;

        const target = document.querySelector<HTMLElement>(hash);
        const nav = document.querySelector<HTMLElement>(".site-nav");
        if (!target || !nav) return;

        event.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - nav.offsetHeight - 14;
        window.scrollTo({ top, behavior: "smooth" });
        history.pushState(null, "", hash);
      };

      link.addEventListener("click", handleClick);
      cleanups.push(() => link.removeEventListener("click", handleClick));
    });

    const reveals = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.12 },
    );

    reveals.forEach((item) => revealObserver.observe(item));
    cleanups.push(() => revealObserver.disconnect());

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          document.querySelectorAll<HTMLAnchorElement>(".nav-link").forEach((link) => {
            link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
          });
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 },
    );

    sections.forEach((section) => sectionObserver.observe(section));
    cleanups.push(() => sectionObserver.disconnect());

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return null;
}
