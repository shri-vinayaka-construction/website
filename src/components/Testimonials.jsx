import useReveal from "../hooks/useReveal";
import { Star } from "lucide-react";

const TESTIMONIALS = [
  { name: "Rajesh Nair", role: "Factory Owner, Peenya", text: "Shri Vinayaka built our entire 18,000 sq ft manufacturing plant on time and within budget. Their industrial experience is unmatched in this area.", stars: 5 },
  { name: "Priya Venkatesh", role: "Homeowner, Rajajinagar", text: "The POP work and interior design they delivered for our new home exceeded our expectations. Every corner feels crafted with love and precision.", stars: 5 },
  { name: "Suresh Gowda", role: "Commercial Client, Yeshwanthpur", text: "Transparent pricing, prompt communication, and zero compromise on material quality. Exactly what you want from a construction partner.", stars: 5 },
];

export default function Testimonials() {
  const [ref, visible] = useReveal();
  return (
    <section style={{ padding: "110px 5vw", background: "#fff" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <div style={{ color: "#f39c12", fontSize: 12, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", marginBottom: 12, fontFamily: "Barlow, sans-serif" }}>Client Stories</div>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 900, color: "#1a1a2e" }}>What Our Clients Say</h2>
        </div>
        <div ref={ref} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 28, opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(40px)", transition: "all 0.8s ease" }}>
          {TESTIMONIALS.map(({ name, role, text, stars }, i) => (
            <div key={i} style={{ background: "#f8f7f4", borderRadius: 16, padding: "38px 32px", border: "1px solid rgba(26,26,46,0.06)", position: "relative" }}>
              <div style={{ display: "flex", gap: 3, marginBottom: 20 }}>
                {Array(stars).fill(0).map((_, j) => <Star key={j} size={16} color="#f39c12" fill="#f39c12" />)}
              </div>
              <p style={{ color: "#444", fontSize: 15.5, lineHeight: 1.8, marginBottom: 28, fontFamily: "Barlow, sans-serif", fontStyle: "italic" }}>"{text}"</p>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{ width: 44, height: 44, background: "linear-gradient(135deg, #f39c12, #e67e22)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Playfair Display', serif", fontWeight: 900, color: "#fff", fontSize: 18 }}>{name[0]}</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 15, color: "#1a1a2e", fontFamily: "'Playfair Display', Georgia, serif" }}>{name}</div>
                  <div style={{ color: "#aaa", fontSize: 12.5, fontFamily: "Barlow, sans-serif" }}>{role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
