import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  const links = ["Home", "Services", "Projects", "About", "Contact"];
  return (
    <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, transition: "all 0.4s", background: scrolled ? "rgba(10,10,30,0.97)" : "transparent", backdropFilter: scrolled ? "blur(12px)" : "none", borderBottom: scrolled ? "1px solid rgba(243,156,18,0.18)" : "none", padding: "0 5vw" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 42, height: 42, background: "linear-gradient(135deg, #f39c12, #e67e22)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 900, fontSize: 20, color: "#fff", letterSpacing: -1, flexShrink: 0 }}>SV</div>
          <div>
            <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 800, fontSize: 15, color: "#fff", lineHeight: 1.1, letterSpacing: 0.3 }}>SHRI VINAYAKA</div>
            <div style={{ fontSize: 9.5, color: "#f39c12", letterSpacing: 2.5, textTransform: "uppercase", fontWeight: 600 }}>Construction & Interiors</div>
          </div>
        </div>
        {/* Desktop Nav */}
        <nav style={{ display: "flex", gap: 32, alignItems: "center" }} className="desktop-nav">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} style={{ color: "rgba(255,255,255,0.8)", textDecoration: "none", fontSize: 13.5, fontWeight: 500, letterSpacing: 1.2, textTransform: "uppercase", transition: "color 0.2s", fontFamily: "Barlow, sans-serif" }}
              onMouseEnter={e => e.target.style.color = "#f39c12"} onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.8)"}>{l}</a>
          ))}
          <a href="#contact" style={{ background: "linear-gradient(135deg, #f39c12, #e67e22)", color: "#fff", padding: "10px 22px", borderRadius: 6, fontSize: 13, fontWeight: 700, textDecoration: "none", letterSpacing: 0.8, textTransform: "uppercase" }}>Get Quote</a>
        </nav>
        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} style={{ background: "none", border: "none", color: "#fff", cursor: "pointer", display: "none" }} className="mobile-toggle">
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
      {/* Mobile menu */}
      {open && (
        <div style={{ background: "rgba(10,10,30,0.98)", padding: "20px 5vw 28px", borderTop: "1px solid rgba(243,156,18,0.2)" }}>
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} style={{ display: "block", color: "#fff", textDecoration: "none", padding: "13px 0", fontSize: 16, borderBottom: "1px solid rgba(255,255,255,0.07)", fontFamily: "Barlow, sans-serif", fontWeight: 500 }}>{l}</a>
          ))}
          <a href="#contact" style={{ display: "block", marginTop: 18, background: "linear-gradient(135deg, #f39c12, #e67e22)", color: "#fff", padding: "13px 22px", borderRadius: 6, textAlign: "center", textDecoration: "none", fontWeight: 700 }}>Get Free Quote</a>
        </div>
      )}
    </header>
  );
}
