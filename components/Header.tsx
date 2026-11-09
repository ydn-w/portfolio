"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/profile";

const NAV = [
  { id: "about", label: "About" },
  { id: "works", label: "Works" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const onScroll = () => {
      const line = window.innerHeight * 0.35;
      let current = NAV[0].id;
      for (const { id } of NAV) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      // ページ最下部に到達したら最後の項目をアクティブに
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
        current = NAV[NAV.length - 1].id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#top" className="header__logo">
          {site.name}
        </a>
        <nav aria-label="メインナビゲーション">
          <ul className="header__nav">
            {NAV.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={active === id ? "is-active" : undefined}
                  aria-current={active === id ? "true" : undefined}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
