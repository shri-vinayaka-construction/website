import useReveal from "../hooks/useReveal";

export default function WhyUs() {
  const [ref, visible] = useReveal();
  const points = [
    { n: "01", t: "Industrial-Grade Materials", d: "We source only verified, graded materials — no compromise on structural integrity for any project type." },
    { n: "02", t: "Transparent Pricing", d: "Every estimate is itemised. No surprise bills. You know exactly what you're paying and why." },
    { n: "03", t: "In-House Skilled Workforce", d: "Our masons, carpenters, and POP artisans are permanent staff — ensuring consistency and accountability." },
    { n: "04", t: "Peenya Local Expertise", d: "15+ years operating in Peenya means we know local regulations, suppliers, and timelines inside out." },
  ];
  return (
    <section style={{ padding: "110px 5vw", background: "#1a1a2e", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(rgba(243,156,18,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(243,156,18,0.03) 1px, transparent 1px)`, backgroundSize: "80px 80px" }} />
      <div ref={ref} style={{ maxWidth: 1280, margin: "0 auto", opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(40px)", transition: "all 0.8s ease" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{ color: "#f39c12", fontSize: 12, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", marginBottom: 12, fontFamily: "Barlow, sans-serif" }}>Why Choose Us</div>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 900, color: "#fff" }}>The Shri Vinayaka Difference</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 28 }}>
          {points.map(({ n, t, d }, i) => (
            <div key={i} style={{ borderRadius: 14, padding: "38px 32px", border: "1px solid rgba(243,156,18,0.12)", background: "rgba(255,255,255,0.03)", backdropFilter: "blur(8px)", position: "relative", overflow: "hidden", transition: "border-color 0.3s, background 0.3s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(243,156,18,0.4)"; e.currentTarget.style.background = "rgba(243,156,18,0.05)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(243,156,18,0.12)"; e.currentTarget.style.background = "rgba(255,255,255,0.03)"; }}>
              <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 64, fontWeight: 900, color: "rgba(243,156,18,0.08)", position: "absolute", top: 10, right: 20, lineHeight: 1 }}>{n}</div>
              <div style={{ color: "#f39c12", fontFamily: "'Playfair Display', Georgia, serif", fontSize: 18, fontWeight: 700, marginBottom: 14 }}>{n}</div>
              <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 800, fontSize: 20, color: "#fff", marginBottom: 14, lineHeight: 1.35 }}>{t}</h3>
              <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 14.5, lineHeight: 1.75, fontFamily: "Barlow, sans-serif" }}>{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}