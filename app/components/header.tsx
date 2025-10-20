"use client";

import Link from "next/link";
import { useState } from "react";
import useTheme from "@/app/hooks/UseTheme";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const { theme, toggleTheme, toggleLabel } = useTheme();

  return (
    <nav className="navbar">
      <div className="nav-name">Vincent Ong</div>

      <button
        className="nav-toggle"
        id="navToggle"
        aria-label="Open navigation"
        onClick={() => setNavOpen((v) => !v)}
      >
        &#9776;
      </button>

      <ul className={`nav-links ${navOpen ? "nav-active" : ""}`} id="navLinks">
        <li>
          <button
            className="nav-close"
            id="navClose"
            aria-label="Close navigation"
            onClick={() => setNavOpen(false)}
          >
            &times;
          </button>
        </li>

        <li>
          <Link href="/" className="nav-link" onClick={() => setNavOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="nav-link"
            onClick={() => setNavOpen(false)}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="nav-link"
            onClick={() => setNavOpen(false)}
          >
            Contact
          </Link>
        </li>
      </ul>

      <button
        className="darklight"
        id="darklight"
        onClick={toggleTheme}
        aria-pressed={theme === "light"}
        aria-label="Toggle color theme"
      >
        {toggleLabel}
      </button>
    </nav>
  );
}
