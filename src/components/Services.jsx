import useReveal from "../hooks/useReveal";
import { Building2, Home, Sparkles } from "lucide-react";

const SERVICES = [
  { icon: Building2, label: "Industrial Construction", tag: "Core Specialty", desc: "Factory floors, warehouses, multi-storey industrial plants — engineered for Peenya's demanding environment. Structural integrity, fire compliance, and industrial-grade finishes.", features: ["Factory & Warehouse Build", "Structural Steel Works", "Fire Safety Compliance", "Industrial Flooring"], color: "#1a1a2e" },
  { icon: Home, label: "Residential & Commercial", tag: "Full Build", desc: "From single-family villas to apartment complexes and commercial offices — we manage the full lifecycle from permits to possession.", features: ["New Home Construction", "Apartment Complexes", "Office & Retail Build-outs", "Permit Management"], color: "#16213e" },
  { icon: Sparkles, label: "Interior Design & POP Works", tag: "Premium Finish", desc: "Where engineering meets artistry. Bespoke interiors, false ceilings, POP mouldings, and decorative plaster works that define luxury living.", features: ["False Ceiling Design", "POP Decorative Works", "Modular Kitchens", "Complete Interior Turnkey"], color: "#0f3460" },
];

export default function Services() {
  const [ref, visible] = useReveal();
  return (
    <section id="services" style={{ padding: "110px 5vw", background: "#fff" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{ color: "#f39c12", fontSize: 12, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", marginBottom: 12, fontFamily: "Barlow, sans-serif" }}>What We Build</div>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 900, color: "#1a1a2e", lineHeight: 1.2 }}>
            A-Z Construction Services
          </h2>
          <p style={{ color: "#888", fontSize: 17, maxWidth: 520, margin: "16px auto 0", fontFamily: "Barlow, sans-serif", lineHeight: 1.7 }}>One partner. Every phase. Industrial to residential, shell to showroom.</p>
        </div>
        <div ref={ref} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 28, opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(50px)", transition: "all 0.9s ease" }}>
          {SERVICES.map(({ icon: Icon, label, tag, desc, features, color }, i) => (
            <div key={i} style={{ background: color, borderRadius: 16, padding: "42px 36px", position: "relative", overflow: "hidden", cursor: "pointer", transition: "transform 0.3s, box-shadow 0.3s", boxShadow: "0 4px 24px rgba(0,0,0,0.12)" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-8px)"; e.currentTarget.style.boxShadow = "0 20px 50px rgba(0,0,0,0.22)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.12)"; }}>
              <div style={{ position: "absolute", top: 0, right: 0, width: 100, height: 100, background: "rgba(243,156,18,0.06)", borderRadius: "0 16px 0 100px" }} />
              <div style={{ display: "inline-flex", background: "rgba(243,156,18,0.15)", border: "1px solid rgba(243,156,18,0.25)", borderRadius: 6, padding: "5px 12px", marginBottom: 24 }}>
                <span style={{ color: "#f39c12", fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", fontFamily: "Barlow, sans-serif" }}>{tag}</span>
              </div>
              <div style={{ background: "rgba(243,156,18,0.12)", width: 56, height: 56, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                <Icon size={26} color="#f39c12" />
              </div>
              <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 800, color: "#fff", marginBottom: 14, lineHeight: 1.3 }}>{label}</h3>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 14.5, lineHeight: 1.75, marginBottom: 24, fontFamily: "Barlow, sans-serif" }}>{desc}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {features.map((f, j) => (
                  <div key={j} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 5, height: 5, background: "#f39c12", borderRadius: "50%", flexShrink: 0 }} />
                    <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 13.5, fontFamily: "Barlow, sans-serif" }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
