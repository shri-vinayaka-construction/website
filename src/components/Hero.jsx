import { ChevronDown, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" style={{ minHeight: "100vh", position: "relative", display: "flex", alignItems: "center", overflow: "hidden", background: "#0a0a1e" }}>
      {/* Architectural grid background */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(rgba(243,156,18,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(243,156,18,0.04) 1px, transparent 1px)`, backgroundSize: "60px 60px", zIndex: 0 }} />
      {/* Deep gradient overlay */}
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 80% at 60% 50%, rgba(26,26,46,0.4) 0%, rgba(10,10,30,0.95) 100%)", zIndex: 1 }} />
      {/* Gold accent line left */}
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 5, background: "linear-gradient(to bottom, transparent, #f39c12 30%, #e67e22 70%, transparent)", zIndex: 2 }} />

      {/* Floating geometric shapes */}
      <div style={{ position: "absolute", top: "15%", right: "8%", width: 320, height: 320, border: "1px solid rgba(243,156,18,0.12)", borderRadius: "50%", zIndex: 1, animation: "spin 40s linear infinite" }} />
      <div style={{ position: "absolute", top: "20%", right: "11%", width: 200, height: 200, border: "1px solid rgba(243,156,18,0.18)", borderRadius: "50%", zIndex: 1, animation: "spin 25s linear infinite reverse" }} />
      <div style={{ position: "absolute", bottom: "10%", right: "20%", width: 80, height: 80, background: "rgba(243,156,18,0.06)", transform: "rotate(45deg)", zIndex: 1 }} />

      {/* Content */}
      <div style={{ maxWidth: 1280, width: "100%", margin: "0 auto", padding: "0 5vw", position: "relative", zIndex: 3, paddingTop: 100 }}>
        <div style={{ maxWidth: 760 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(243,156,18,0.12)", border: "1px solid rgba(243,156,18,0.3)", borderRadius: 100, padding: "7px 18px", marginBottom: 28 }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#f39c12", animation: "pulse 2s infinite" }} />
            <span style={{ color: "#f39c12", fontSize: 12, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", fontFamily: "Barlow, sans-serif" }}>Peenya Industrial Area, Bangalore</span>
          </div>

          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(38px, 6vw, 76px)", fontWeight: 900, color: "#fff", lineHeight: 1.08, marginBottom: 12, letterSpacing: -1 }}>
            Building Peenya's Future:
          </h1>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(30px, 4.5vw, 58px)", fontWeight: 700, lineHeight: 1.15, marginBottom: 28, letterSpacing: -0.5 }}>
            <span style={{ color: "#f39c12" }}>From Industrial Strength</span>
            <br />to Interior Elegance.
          </h1>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "clamp(15px, 1.8vw, 19px)", lineHeight: 1.75, maxWidth: 580, marginBottom: 42, fontFamily: "Barlow, sans-serif", fontWeight: 400 }}>
            Bangalore's trusted A-Z construction partner. We engineer industrial complexes, build dream homes, and craft interiors that speak luxury — all from Asia's largest industrial hub.
          </p>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href="#contact" style={{ background: "linear-gradient(135deg, #f39c12 0%, #e67e22 100%)", color: "#fff", padding: "16px 34px", borderRadius: 8, fontWeight: 700, textDecoration: "none", fontSize: 15, letterSpacing: 0.5, display: "flex", alignItems: "center", gap: 10, boxShadow: "0 8px 32px rgba(243,156,18,0.35)", transition: "transform 0.2s, box-shadow 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(243,156,18,0.5)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(243,156,18,0.35)"; }}>
              Start Your Project <ArrowRight size={18} />
            </a>
            <a href="#projects" style={{ border: "1.5px solid rgba(255,255,255,0.25)", color: "#fff", padding: "16px 34px", borderRadius: 8, fontWeight: 600, textDecoration: "none", fontSize: 15, letterSpacing: 0.5, backdropFilter: "blur(8px)", background: "rgba(255,255,255,0.04)", transition: "all 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(243,156,18,0.6)"; e.currentTarget.style.color = "#f39c12"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)"; e.currentTarget.style.color = "#fff"; }}>
              View Projects
            </a>
          </div>
        </div>

        {/* Stats bar */}
        <div style={{ marginTop: 72, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 1, background: "rgba(243,156,18,0.15)", borderRadius: 12, overflow: "hidden", maxWidth: 760, border: "1px solid rgba(243,156,18,0.15)" }}>
          {[["15+", "Years Experience"], ["200+", "Projects Delivered"], ["50+", "Industrial Clients"], ["100%", "In-House Team"]].map(([num, label], i) => (
            <div key={i} style={{ background: "rgba(10,10,30,0.8)", padding: "24px 20px", textAlign: "center", backdropFilter: "blur(12px)" }}>
              <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 36, fontWeight: 900, color: "#f39c12", lineHeight: 1 }}>{num}</div>
              <div style={{ color: "rgba(255,255,255,0.55)", fontSize: 12, marginTop: 6, textTransform: "uppercase", letterSpacing: 1.5, fontFamily: "Barlow, sans-serif" }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", zIndex: 3, display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
        <span style={{ color: "rgba(255,255,255,0.35)", fontSize: 11, letterSpacing: 2, textTransform: "uppercase", fontFamily: "Barlow, sans-serif" }}>Scroll</span>
        <ChevronDown size={18} color="rgba(243,156,18,0.6)" style={{ animation: "bounce 2s infinite" }} />
      </div>
    </section>
  );
}
