import React, { useState } from 'react';

const links = [
  ['About', '#about'],
  ['Expertise', '#skills'],
  ['Certifications', '#certifications'],
  ['Contact', '#contact'],
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <nav className="nav-inner" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Shahid Ahmed home">
          <span className="brand-mark">SA</span>
          <span>
            Shahid Ahmed
            <small>Networking Professional</small>
          </span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '×' : '☰'}
        </button>

        <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={closeMenu}>{label}</a>
          ))}
        </div>

        <a className="nav-cta" href="#contact">Let's Connect <span aria-hidden="true">↗</span></a>
      </nav>
    </header>
  );
}
