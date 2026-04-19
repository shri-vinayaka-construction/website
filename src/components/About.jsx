import useReveal from "../hooks/useReveal";
import { CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";

export function AnimCounter({ target, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [ref, visible] = useReveal();
  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start = Math.min(start + step, target);
      setCount(start);
      if (start >= target) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [visible, target, duration]);
  return <span ref={ref}>{count}{suffix}</span>;
}




export default function About() {
  const [ref, visible] = useReveal();
  return (
    <section id="about" style={{ padding: "110px 5vw", background: "#f8f7f4", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, right: 0, width: "40%", height: "100%", background: "linear-gradient(135deg, rgba(243,156,18,0.04), transparent)", pointerEvents: "none" }} />
      <div ref={ref} style={{ maxWidth: 1280, margin: "0 auto", display: "grid", width: "100%", overflow: "hidden", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center", opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(40px)", transition: "all 0.8s ease" }}>
        {/* Left visual */}
        <div style={{ position: "relative" }}>
          <div style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)", borderRadius: 16, padding: "48px 40px", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, right: 0, width: 120, height: 120, background: "rgba(243,156,18,0.08)", borderRadius: "0 16px 0 120px" }} />
            <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 64, fontWeight: 900, color: "rgba(243,156,18,0.12)", position: "absolute", top: 20, right: 30, lineHeight: 1 }}>SV</div>
            <div style={{ color: "#f39c12", fontSize: 12, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", marginBottom: 24, fontFamily: "Barlow, sans-serif" }}>Our Foundation</div>
            {["Residential & Commercial Expertise", "POP & Premium Interiors", "ISO-Quality Construction Standards", "On-Site Project Management", "Transparent Cost Estimation"].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "13px 0", borderBottom: i < 4 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
                <CheckCircle size={16} color="#f39c12" style={{ flexShrink: 0 }} />
                <span style={{ color: "rgba(255,255,255,0.8)", fontSize: 15, fontFamily: "Barlow, sans-serif" }}>{item}</span>
              </div>
            ))}
          </div>
          {/* Floating badge */}
          <div style={{ position: "absolute", bottom: -20, left: -20, background: "linear-gradient(135deg, #f39c12, #e67e22)", borderRadius: 12, padding: "20px 24px", boxShadow: "0 12px 40px rgba(243,156,18,0.4)" }}>
            <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 32, fontWeight: 900, color: "#fff", lineHeight: 1 }}>15+</div>
            <div style={{ color: "rgba(255,255,255,0.85)", fontSize: 12, letterSpacing: 1.5, textTransform: "uppercase", fontFamily: "Barlow, sans-serif" }}>Years of Trust</div>
          </div>
        </div>

        {/* Right text */}
        <div>
          <div style={{ color: "#f39c12", fontSize: 12, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", marginBottom: 16, fontFamily: "Barlow, sans-serif" }}>Who We Are</div>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 900, color: "#1a1a2e", lineHeight: 1.2, marginBottom: 24 }}>
            Peenya's Ground-Up<br />Construction Experts
          </h2>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.85, marginBottom: 20, fontFamily: "Barlow, sans-serif" }}>
            Rooted in Asia's largest industrial area, <strong>Shri Vinayaka Construction</strong> has spent over 15 years turning blueprints into built reality — from sprawling factory complexes to meticulously crafted family homes.
          </p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.85, marginBottom: 36, fontFamily: "Barlow, sans-serif" }}>
            We believe great construction begins at the ground level — precise planning, honest timelines, and a workforce that treats every project like it's their own home being built.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {[["200+", "Projects Completed"], ["50+", "Industrial Clients"], ["15+", "Years Experience"], ["100%", "Client Satisfaction"]].map(([n, l], i) => (
              <div key={i} style={{ background: "#fff", borderRadius: 10, padding: "20px", border: "1px solid rgba(26,26,46,0.08)", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
                <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 32, fontWeight: 900, color: "#f39c12" }}><AnimCounter target={parseInt(n)} suffix={n.includes("+") ? "+" : "%"} /></div>
                <div style={{ color: "#888", fontSize: 12, textTransform: "uppercase", letterSpacing: 1.5, marginTop: 4, fontFamily: "Barlow, sans-serif" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
