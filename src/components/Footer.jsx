import { Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer style={{ background: "#0a0a1e", padding: "72px 5vw 32px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, transparent, #f39c12, transparent)" }} />
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 60 }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <div style={{ width: 44, height: 44, background: "linear-gradient(135deg, #f39c12, #e67e22)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 900, fontSize: 20, color: "#fff" }}>SV</div>
              <div>
                <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 800, fontSize: 15, color: "#fff", lineHeight: 1.1 }}>SHRI VINAYAKA</div>
                <div style={{ fontSize: 9.5, color: "#f39c12", letterSpacing: 2.5, textTransform: "uppercase" }}>Construction & Interiors</div>
              </div>
            </div>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 14, lineHeight: 1.8, marginBottom: 24, fontFamily: "Barlow, sans-serif", maxWidth: 280 }}>
              Peenya's trusted A-Z construction partner since 2009. Industrial strength, interior elegance.
            </p>
            {/* NAP (Local SEO) */}
            <address style={{ fontStyle: "normal" }}>
              <div style={{ display: "flex", gap: 10, marginBottom: 10, alignItems: "flex-start" }}>
                <MapPin size={14} color="#f39c12" style={{ marginTop: 2, flexShrink: 0 }} />
                <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 13.5, fontFamily: "Barlow, sans-serif", lineHeight: 1.6 }}>Peenya Industrial Area,<br />Bangalore – 560091, Karnataka</span>
              </div>
              <div style={{ display: "flex", gap: 10, marginBottom: 10, alignItems: "center" }}>
                <Phone size={14} color="#f39c12" />
                <a href="tel:+919886032862" style={{ color: "rgba(255,255,255,0.5)", fontSize: 13.5, fontFamily: "Barlow, sans-serif", textDecoration: "none" }}>+91 98860 32862</a>
              </div>
              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <Mail size={14} color="#f39c12" />
                <a href="mailto:buildwithsv@gmail.com" style={{ color: "rgba(255,255,255,0.5)", fontSize: 13.5, fontFamily: "Barlow, sans-serif", textDecoration: "none" }}>buildwithsv@gmail.com</a>
              </div>
            </address>
          </div>
          {/* Links */}
          {[
            { h: "Services", links: ["Industrial Construction", "Residential Build", "Commercial Projects", "Interior Design", "POP Works"] },
            { h: "Company", links: ["About Us", "Our Projects", "Testimonials", "Careers", "Contact"] },
            { h: "Areas Served", links: ["Peenya", "Yeshwanthpur", "Rajajinagar", "Tumkur Road", "All Bangalore"] },
          ].map(({ h, links }) => (
            <div key={h}>
              <h4 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 800, fontSize: 15, color: "#fff", marginBottom: 20, letterSpacing: 0.3 }}>{h}</h4>
              {links.map(l => (
                <a key={l} href="#" style={{ display: "block", color: "rgba(255,255,255,0.4)", fontSize: 13.5, fontFamily: "Barlow, sans-serif", textDecoration: "none", marginBottom: 10, transition: "color 0.2s" }}
                  onMouseEnter={e => e.target.style.color = "#f39c12"} onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.4)"}>{l}</a>
              ))}
            </div>
          ))}
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 28, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 13, fontFamily: "Barlow, sans-serif" }}>© 2025 Shri Vinayaka Construction & Interior Designs. All rights reserved.</span>
          <div style={{ display: "flex", gap: 14 }}>
            { /*icons removed for now*/ }
          </div>
        </div>
      </div>

      {/* Local SEO JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Shri Vinayaka Construction & Interior Designs",
        "description": "A-Z construction company in Peenya Industrial Area, Bangalore. Specializing in industrial, residential, and commercial construction, interior design, and POP decorative works.",
        "address": { "@type": "PostalAddress", "streetAddress": "Peenya Industrial Area", "addressLocality": "Bangalore", "addressRegion": "Karnataka", "postalCode": "560091", "addressCountry": "IN" },
        "telephone": "+919999999999",
        "email": "buildwithsv@gmail.com",
        "url": "https://shrivinayakaconstruction.com",
        "areaServed": ["Peenya", "Bangalore", "Yeshwanthpur", "Rajajinagar", "Tumkur Road"],
        "serviceType": ["Industrial Construction", "Residential Construction", "Commercial Construction", "Interior Design", "POP Works"],
        "foundingDate": "2009",
        "openingHours": ["Mo-Sa 08:00-19:00", "Su 10:00-15:00"]
      })}} />
    </footer>
  );
}