'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import useTheme from '@/app/hooks/UseTheme';

export default function Header() {
  const { theme, toggleTheme, toggleLabel } = useTheme();
  const [navOpen, setNavOpen] = useState(false);
  const alertShownRef = useRef(false);

  // Greeting alert on first client render (avoid StrictMode double-run in dev)
  useEffect(() => {
    if (alertShownRef.current) return;
    alertShownRef.current = true;
    const hour = new Date().getHours();
    const greeting = hour < 12 ? 'Good Morning' : hour < 18 ? 'Good Afternoon' : 'Good Evening';
    alert(`${greeting}, welcome to my personal profile!`);
  }, []);

  const handleAnchorClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href') || '';
    const id = href.startsWith('#') ? href.slice(1) : href;
    const el = document.getElementById(id);
    setNavOpen(false);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, []);

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

      <ul className={`nav-links ${navOpen ? 'nav-active' : ''}`} id="navLinks">
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
          <a href="#name" onClick={handleAnchorClick}>Home</a>
        </li>
        <li>
          <a href="#contactForm" onClick={handleAnchorClick}>Contact</a>
        </li>
      </ul>

      <button className="darklight" id="darklight" onClick={toggleTheme}>
        {toggleLabel}
      </button>
    </nav>
  );
}