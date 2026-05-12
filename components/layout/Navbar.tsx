"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { meta } from "@/data/portfolio";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.slice(1));
    const observers = sectionIds.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b-2 border-foreground transition-all duration-150 ${
        scrolled ? "backdrop-blur-md bg-background/90" : "bg-background"
      }`}
    >
      <nav
        className="max-w-5xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 font-mono font-black text-lg uppercase tracking-widest"
          aria-label="Rohan Singh Rawat — home"
        >
          <span className="bg-primary border-2 border-foreground w-9 h-9 flex items-center justify-center text-sm font-black shadow-[2px_2px_0px_#0A0A0A]">
            RSR
          </span>
          <span className="hidden sm:inline">{meta.name.split(" ")[0]}</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1" role="list">
          {navLinks.map((link) => {
            const id = link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`px-3 py-1.5 font-mono text-sm font-bold uppercase tracking-wide border-2 transition-all duration-100 ${
                    activeSection === id
                      ? "bg-primary border-foreground"
                      : "border-transparent hover:border-foreground hover:bg-muted"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Hire Me CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center border-2 border-foreground bg-foreground text-background px-4 py-1.5 font-mono font-bold text-sm uppercase tracking-wide shadow-[3px_3px_0px_#FFE500] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#FFE500] transition-all duration-150"
        >
          Hire Me
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden border-2 border-foreground p-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile overlay */}
      {menuOpen && (
        <div className="fixed inset-0 top-16 bg-background border-t-2 border-foreground z-40 flex flex-col p-8 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-mono font-black text-3xl uppercase tracking-wide border-b-2 border-foreground pb-4 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 inline-flex items-center justify-center border-2 border-foreground bg-primary px-6 py-3 font-mono font-bold text-base uppercase tracking-wide shadow-[4px_4px_0px_#0A0A0A]"
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  );
}
