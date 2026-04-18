import { useState } from "react";
import useReveal from "../hooks/useReveal";

const PROJECTS = [
  { cat: "Industrial", title: "Peenya Precision Manufacturing Plant", sqft: "28,000 sq ft", year: "2023", bg: "linear-gradient(135deg, #1a1a2e, #2d3561)" },
  { cat: "Residential", title: "Luxury Villa — Rajajinagar", sqft: "4,200 sq ft", year: "2023", bg: "linear-gradient(135deg, #2c3e50, #34495e)" },
  { cat: "Interiors", title: "Premium Office Interior — Yeshwanthpur", sqft: "6,500 sq ft", year: "2024", bg: "linear-gradient(135deg, #1a472a, #2d6a4f)" },
  { cat: "Industrial", title: "Cold Storage Facility — Peenya II Stage", sqft: "14,000 sq ft", year: "2022", bg: "linear-gradient(135deg, #3d0000, #800000)" },
  { cat: "Residential", title: "G+3 Apartment Block — Tumkur Road", sqft: "9,800 sq ft", year: "2024", bg: "linear-gradient(135deg, #2c2c54, #474787)" },
  { cat: "Interiors", title: "POP Medallion Showroom — M.G. Road", sqft: "3,100 sq ft", year: "2023", bg: "linear-gradient(135deg, #0d0d0d, #1a1a2e)" },
];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [ref, visible] = useReveal();
  const cats = ["All", "Industrial", "Residential", "Interiors"];
  const shown = filter === "All" ? PROJECTS : PROJECTS.filter(p => p.cat === filter);
  return (
    <section id="projects" style={{ padding: "110px 5vw", background: "#f8f7f4" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <div style={{ color: "#f39c12", fontSize: 12, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", marginBottom: 12, fontFamily: "Barlow, sans-serif" }}>Our Work</div>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 900, color: "#1a1a2e" }}>Featured Projects</h2>
        </div>
        {/* Filter pills */}
        <div style={{ display: "flex", justifyContent: "center", gap: 10, marginBottom: 48, flexWrap: "wrap" }}>
          {cats.map(c => (
            <button key={c} onClick={() => setFilter(c)} style={{ padding: "10px 24px", borderRadius: 100, border: filter === c ? "none" : "1.5px solid rgba(26,26,46,0.15)", background: filter === c ? "linear-gradient(135deg, #f39c12, #e67e22)" : "transparent", color: filter === c ? "#fff" : "#555", fontWeight: 600, fontSize: 13.5, cursor: "pointer", fontFamily: "Barlow, sans-serif", letterSpacing: 0.5, transition: "all 0.2s" }}>{c}</button>
          ))}
        </div>
        <div ref={ref} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 24, opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(40px)", transition: "all 0.8s ease" }}>
          {shown.map((p, i) => (
            <div key={i} style={{ borderRadius: 14, overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.08)", transition: "transform 0.3s, box-shadow 0.3s", cursor: "pointer" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,0.14)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)"; }}>
              {/* Image placeholder with gradient */}
              <div style={{ height: 200, background: p.bg, position: "relative", display: "flex", alignItems: "flex-end", padding: 0 }}>
                <div style={{ position: "absolute", inset: 0, backgroundImage: `repeating-linear-gradient(45deg, rgba(255,255,255,0.01) 0px, rgba(255,255,255,0.01) 1px, transparent 1px, transparent 20px), repeating-linear-gradient(-45deg, rgba(255,255,255,0.01) 0px, rgba(255,255,255,0.01) 1px, transparent 1px, transparent 20px)` }} />
                <div style={{ position: "absolute", top: 16, left: 16, background: "rgba(243,156,18,0.9)", borderRadius: 5, padding: "4px 12px" }}>
                  <span style={{ color: "#fff", fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", fontFamily: "Barlow, sans-serif" }}>{p.cat}</span>
                </div>
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 80, background: "linear-gradient(transparent, rgba(0,0,0,0.5))" }} />
              </div>
              <div style={{ background: "#fff", padding: "22px 24px" }}>
                <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 800, fontSize: 17, color: "#1a1a2e", marginBottom: 10, lineHeight: 1.4 }}>{p.title}</h3>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ color: "#888", fontSize: 13, fontFamily: "Barlow, sans-serif" }}>{p.sqft}</span>
                  <span style={{ color: "#f39c12", fontWeight: 700, fontSize: 13, fontFamily: "Barlow, sans-serif" }}>{p.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}