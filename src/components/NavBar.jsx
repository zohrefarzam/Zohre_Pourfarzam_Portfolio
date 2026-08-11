import { useState, useEffect } from "react";

import { navLinks } from "../constants";
import { asset } from "../utils/asset";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`navbar ${scrolled ? "scrolled" : "not-scrolled"} ${menuOpen ? "menu-open" : ""}`}
    >
      <div className="inner">
        <a href="#hero" className="logo" onClick={closeMenu}>
          <img src={asset("images/fav.png")} alt="" />
          <span className="logo-text">Zohre Pourfarzam</span>
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-actions">
          <a href="#contact" className="contact-btn group" onClick={closeMenu}>
            <div className="inner">
              <span>Contact me</span>
            </div>
          </a>

          <button
            type="button"
            className={`menu-toggle ${menuOpen ? "open" : ""}`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <nav className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <ul>
          {navLinks.map(({ link, name }) => (
            <li key={name}>
              <a href={link} onClick={closeMenu}>
                {name}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="mobile-contact" onClick={closeMenu}>
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
