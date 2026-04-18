import { useState } from "react";
import useReveal from "../hooks/useReveal";
import { Phone, Mail, MapPin, CheckCircle, Send } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [ref, visible] = useReveal();

  const handleSubmit = () => {
    console.log("Lead captured:", form);
    setSubmitted(true);
    setTimeout(() => {
      window.open(`https://wa.me/919999999999?text=${encodeURIComponent("I am interested in a construction quote.")}`, "_blank");
    }, 1200);
  };

  return (
    <section id="contact" style={{ padding: "110px 5vw", background: "#f8f7f4" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <div style={{ color: "#f39c12", fontSize: 12, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", marginBottom: 12, fontFamily: "Barlow, sans-serif" }}>Get In Touch</div>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 900, color: "#1a1a2e" }}>Start Your Project Today</h2>
          <p style={{ color: "#888", fontSize: 17, marginTop: 12, fontFamily: "Barlow, sans-serif" }}>Free consultation. No commitments. We'll call you within 2 hours.</p>
        </div>

        <div ref={ref} style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 48, alignItems: "start", opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(40px)", transition: "all 0.8s ease" }}>
          {/* Left info */}
          <div>
            <div style={{ background: "#1a1a2e", borderRadius: 16, padding: "42px 36px", marginBottom: 24 }}>
              <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 800, fontSize: 22, color: "#fff", marginBottom: 28 }}>Contact Information</h3>
              {[
                { Icon: MapPin, label: "Address", val: "Peenya Industrial Area, Bangalore – 560091, Karnataka" },
                { Icon: Phone, label: "Phone", val: "+91 99999 99999" },
                { Icon: Mail, label: "Email", val: "buildwithsv@gmail.com" },
              ].map(({ Icon, label, val }, i) => (
                <div key={i} style={{ display: "flex", gap: 16, marginBottom: 24 }}>
                  <div style={{ width: 44, height: 44, background: "rgba(243,156,18,0.12)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon size={18} color="#f39c12" />
                  </div>
                  <div>
                    <div style={{ color: "rgba(255,255,255,0.45)", fontSize: 11, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 4, fontFamily: "Barlow, sans-serif" }}>{label}</div>
                    <div style={{ color: "#fff", fontSize: 14.5, fontFamily: "Barlow, sans-serif" }}>{val}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ background: "linear-gradient(135deg, #f39c12, #e67e22)", borderRadius: 14, padding: "28px 32px" }}>
              <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 800, fontSize: 20, color: "#fff", marginBottom: 8 }}>Working Hours</div>
              <div style={{ color: "rgba(255,255,255,0.85)", fontSize: 14, fontFamily: "Barlow, sans-serif", lineHeight: 1.8 }}>
                Mon – Sat: 8:00 AM – 7:00 PM<br />
                Sun: 10:00 AM – 3:00 PM (By Appointment)
              </div>
            </div>
          </div>

          {/* Right form */}
          <div style={{ background: "#fff", borderRadius: 16, padding: "44px 40px", boxShadow: "0 8px 40px rgba(0,0,0,0.07)", border: "1px solid rgba(26,26,46,0.05)" }}>
            {submitted ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ width: 72, height: 72, background: "linear-gradient(135deg, #f39c12, #e67e22)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                  <CheckCircle size={36} color="#fff" />
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 800, fontSize: 24, color: "#1a1a2e", marginBottom: 10 }}>Quote Request Sent!</h3>
                <p style={{ color: "#888", fontFamily: "Barlow, sans-serif", fontSize: 15 }}>Redirecting you to WhatsApp for instant response…</p>
              </div>
            ) : (
              <>
                <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 800, fontSize: 24, color: "#1a1a2e", marginBottom: 28 }}>Request a Free Quote</h3>
                {[
                  { key: "name", label: "Full Name", type: "text", ph: "Your Name" },
                  { key: "phone", label: "Phone Number", type: "tel", ph: "+91 XXXXX XXXXX" },
                ].map(({ key, label, type, ph }) => (
                  <div key={key} style={{ marginBottom: 20 }}>
                    <label style={{ display: "block", color: "#555", fontSize: 13, fontWeight: 600, marginBottom: 7, textTransform: "uppercase", letterSpacing: 1, fontFamily: "Barlow, sans-serif" }}>{label}</label>
                    <input type={type} placeholder={ph} value={form[key]} onChange={e => setForm({ ...form, [key]: e.target.value })}
                      style={{ width: "100%", padding: "13px 16px", border: "1.5px solid rgba(26,26,46,0.12)", borderRadius: 8, fontSize: 15, outline: "none", fontFamily: "Barlow, sans-serif", background: "#f8f7f4", boxSizing: "border-box", transition: "border-color 0.2s" }}
                      onFocus={e => e.target.style.borderColor = "#f39c12"} onBlur={e => e.target.style.borderColor = "rgba(26,26,46,0.12)"} />
                  </div>
                ))}
                <div style={{ marginBottom: 20 }}>
                  <label style={{ display: "block", color: "#555", fontSize: 13, fontWeight: 600, marginBottom: 7, textTransform: "uppercase", letterSpacing: 1, fontFamily: "Barlow, sans-serif" }}>Service Type</label>
                  <select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}
                    style={{ width: "100%", padding: "13px 16px", border: "1.5px solid rgba(26,26,46,0.12)", borderRadius: 8, fontSize: 15, outline: "none", fontFamily: "Barlow, sans-serif", background: "#f8f7f4", boxSizing: "border-box", appearance: "none", cursor: "pointer" }}>
                    <option value="">Select a Service</option>
                    <option>Industrial Construction</option>
                    <option>Residential Construction</option>
                    <option>Commercial Construction</option>
                    <option>Interior Design</option>
                    <option>POP Works</option>
                    <option>Renovation</option>
                  </select>
                </div>
                <div style={{ marginBottom: 28 }}>
                  <label style={{ display: "block", color: "#555", fontSize: 13, fontWeight: 600, marginBottom: 7, textTransform: "uppercase", letterSpacing: 1, fontFamily: "Barlow, sans-serif" }}>Your Message</label>
                  <textarea rows={4} placeholder="Tell us about your project..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                    style={{ width: "100%", padding: "13px 16px", border: "1.5px solid rgba(26,26,46,0.12)", borderRadius: 8, fontSize: 15, outline: "none", fontFamily: "Barlow, sans-serif", background: "#f8f7f4", resize: "vertical", boxSizing: "border-box", lineHeight: 1.6 }}
                    onFocus={e => e.target.style.borderColor = "#f39c12"} onBlur={e => e.target.style.borderColor = "rgba(26,26,46,0.12)"} />
                </div>
                <button onClick={handleSubmit} style={{ width: "100%", background: "linear-gradient(135deg, #f39c12, #e67e22)", color: "#fff", padding: "16px", borderRadius: 8, border: "none", fontSize: 16, fontWeight: 700, cursor: "pointer", fontFamily: "Barlow, sans-serif", letterSpacing: 0.5, display: "flex", alignItems: "center", justifyContent: "center", gap: 10, boxShadow: "0 8px 24px rgba(243,156,18,0.3)", transition: "all 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.boxShadow = "0 12px 32px rgba(243,156,18,0.5)"}
                  onMouseLeave={e => e.currentTarget.style.boxShadow = "0 8px 24px rgba(243,156,18,0.3)"}>
                  <Send size={18} /> Send via WhatsApp
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}