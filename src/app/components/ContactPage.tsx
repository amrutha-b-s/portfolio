import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Github, Linkedin, Send, MessageCircle, MapPin, Phone, CheckCircle, Download } from "lucide-react";
import mePhoto from "../../imports/me.jpeg";
import resumeUrl from "../../imports/resume.pdf?url";
import emailjs from "@emailjs/browser";

const socials = [
  {
    label: "GitHub",
    handle: "@amrutha-b-s",
    icon: <Github size={22} />,
    href: "https://github.com/amrutha-b-s",
    color: "#fff",
    bg: "rgba(255,255,255,0.05)",
    border: "rgba(255,255,255,0.12)",
    hoverColor: "#3B82F6",
    hoverBorder: "rgba(59,130,246,0.3)",
  },
  {
    label: "LinkedIn",
    handle: "Amrutha B S",
    icon: <Linkedin size={22} />,
    href: "https://linkedin.com/in/Amrutha-B-S-",
    color: "#3B82F6",
    bg: "rgba(59,130,246,0.08)",
    border: "rgba(59,130,246,0.2)",
    hoverColor: "#60A5FA",
    hoverBorder: "rgba(59,130,246,0.5)",
  },
  {
    label: "Email",
    handle: "amruthabswork@gmail.com",
    icon: <Mail size={22} />,
    href: "mailto:amruthabswork@gmail.com",
    color: "#8B5CF6",
    bg: "rgba(139,92,246,0.08)",
    border: "rgba(139,92,246,0.2)",
    hoverColor: "#A78BFA",
    hoverBorder: "rgba(139,92,246,0.5)",
  },
];

const info = [
  { icon: <MapPin size={18} />, label: "Location", value: "Bangalore, India", color: "#06B6D4" },
  { icon: <Mail size={18} />, label: "Email", value: "amruthabswork@gmail.com", color: "#3B82F6" },
  { icon: <Phone size={18} />, label: "Phone", value: "+91 9019168459", color: "#8B5CF6" },
];

export function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const errs = validate();

  if (Object.keys(errs).length > 0) {
    setErrors(errs);
    return;
  }

  setSending(true);

  try {
    await emailjs.send(
      "service_3ifod5n",
      "template_zxi9r7d",
      {
        name: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message,
      },
      "gdh6036XY7dWO_rUO"
    );

    setSent(true);

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

  } catch (error) {
    console.error(error);
    alert("Failed to send message");
  }

  setSending(false);
};

  const inputStyle = (field: string) => ({
    width: "100%",
    padding: "12px 16px",
    borderRadius: "12px",
    background: "rgba(255,255,255,0.04)",
    border: `1px solid ${errors[field] ? "rgba(239,68,68,0.5)" : "rgba(255,255,255,0.1)"}`,
    color: "#fff",
    fontSize: "0.9rem",
    outline: "none",
    transition: "border-color 0.2s ease, box-shadow 0.2s ease",
    boxSizing: "border-box" as const,
    fontFamily: "inherit",
  });

  return (
    <div style={{ position: "relative", minHeight: "100vh", padding: "5rem 2rem 6rem", overflow: "hidden" }}>
      {/* Background */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
        <div style={{ position: "absolute", top: "10%", left: "-5%", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)", filter: "blur(50px)" }} />
        <div style={{ position: "absolute", bottom: "10%", right: "-5%", width: "450px", height: "450px", borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)", filter: "blur(40px)" }} />
      </div>

      <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "5px 16px", borderRadius: "100px", background: "rgba(6,182,212,0.1)", border: "1px solid rgba(6,182,212,0.3)", color: "#06B6D4", fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>
            <MessageCircle size={13} /> Get In Touch
          </div>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#fff", margin: "0 0 1rem", letterSpacing: "-0.03em" }}>
            Let's{" "}
            <span style={{ background: "linear-gradient(135deg, #06B6D4, #8B5CF6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Connect</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "1rem", maxWidth: "520px", margin: "0 auto" }}>
            Open to exciting opportunities, collaborations, and conversations about AI, ML, and software development
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "2rem", alignItems: "start" }} className="contact-grid">

          {/* Left Panel */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>

            {/* Profile Photo Card */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              style={{ padding: "1.75rem", borderRadius: "20px", background: "rgba(17,24,39,0.7)", border: "1px solid rgba(59,130,246,0.15)", backdropFilter: "blur(20px)", display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>

              {/* Photo */}
              <div style={{ position: "relative" }}>
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                  style={{ position: "absolute", inset: "-10px", borderRadius: "50%", background: "conic-gradient(from 0deg, #3B82F6, #8B5CF6, #06B6D4, #3B82F6)", filter: "blur(3px)", opacity: 0.5 }} />
                <img
                  src="/me.jpeg"
                  alt="Amrutha B S"
                  style={{
                    position: "relative",
                    width: "130px",
                    height: "130px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    objectPosition: "center top",
                    border: "3px solid rgba(59,130,246,0.5)",
                    boxShadow: "0 0 30px rgba(59,130,246,0.3)",
                  }}
                />
                {/* Online indicator */}
                <div style={{ position: "absolute", bottom: "6px", right: "6px", width: "14px", height: "14px", borderRadius: "50%", background: "#22C55E", border: "2px solid #0B1120", boxShadow: "0 0 8px rgba(34,197,94,0.7)" }} />
              </div>

              <div style={{ textAlign: "center" }}>
                <h3 style={{ color: "#fff", fontWeight: 800, margin: "0 0 0.2rem", fontSize: "1.1rem" }}>Amrutha B S</h3>
                <p style={{ background: "linear-gradient(135deg, #3B82F6, #8B5CF6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", fontWeight: 600, fontSize: "0.85rem", margin: 0 }}>
                  AI/ML Engineer · Full Stack Developer
                </p>
              </div>

              {/* Download Resume */}
              <motion.a
                href={resumeUrl}
                download="Amrutha_BS_Resume.pdf"
                whileHover={{ scale: 1.04, boxShadow: "0 0 25px rgba(59,130,246,0.5)" }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "10px 22px",
                  borderRadius: "10px",
                  background: "linear-gradient(135deg, #3B82F6, #8B5CF6)",
                  color: "#fff",
                  textDecoration: "none",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  boxShadow: "0 0 15px rgba(59,130,246,0.3)",
                  width: "100%",
                  justifyContent: "center",
                }}
              >
                <Download size={16} />
                Download Resume
              </motion.a>
            </motion.div>

            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }}
              style={{ padding: "1.5rem", borderRadius: "20px", background: "rgba(17,24,39,0.7)", border: "1px solid rgba(59,130,246,0.15)", backdropFilter: "blur(20px)" }}>
              <h3 style={{ color: "#fff", fontWeight: 700, margin: "0 0 1rem", fontSize: "0.95rem" }}>Contact Information</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {info.map(({ icon, label, value, color }) => (
                  <div key={label} style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 14px", borderRadius: "10px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <span style={{ color }}>{icon}</span>
                    <div>
                      <div style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.07em" }}>{label}</div>
                      <div style={{ color: "#fff", fontSize: "0.85rem", fontWeight: 500 }}>{value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Socials */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
              style={{ padding: "1.5rem", borderRadius: "20px", background: "rgba(17,24,39,0.7)", border: "1px solid rgba(139,92,246,0.15)", backdropFilter: "blur(20px)" }}>
              <h3 style={{ color: "#fff", fontWeight: 700, margin: "0 0 1rem", fontSize: "0.95rem" }}>Find Me Online</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                {socials.map((s) => (
                  <motion.a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    whileHover={{ x: 4 }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = s.hoverColor;
                      (e.currentTarget as HTMLElement).style.borderColor = s.hoverBorder;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = s.color;
                      (e.currentTarget as HTMLElement).style.borderColor = s.border;
                    }}
                    style={{ display: "flex", alignItems: "center", gap: "12px", padding: "11px 14px", borderRadius: "12px", background: s.bg, border: `1px solid ${s.border}`, color: s.color, textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", transition: "all 0.2s ease" }}>
                    {s.icon}
                    <div>
                      <div style={{ fontSize: "0.72rem", opacity: 0.6 }}>{s.label}</div>
                      <div style={{ fontSize: "0.82rem" }}>{s.handle}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Availability */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              style={{ padding: "1rem 1.25rem", borderRadius: "14px", background: "rgba(34,197,94,0.06)", border: "1px solid rgba(34,197,94,0.2)", display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#22C55E", boxShadow: "0 0 10px rgba(34,197,94,0.7)", animation: "pulseGreen 2s infinite", flexShrink: 0 }} />
              <div>
                <div style={{ color: "#22C55E", fontWeight: 700, fontSize: "0.85rem" }}>Available for Work</div>
                <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.74rem" }}>Open to full-time & internship roles</div>
              </div>
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            style={{ padding: "2rem", borderRadius: "24px", background: "rgba(17,24,39,0.7)", border: "1px solid rgba(59,130,246,0.15)", backdropFilter: "blur(20px)", boxShadow: "0 0 50px rgba(59,130,246,0.05)" }}>

            {sent ? (
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} style={{ textAlign: "center", padding: "3rem 2rem" }}>
                <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 0.5 }}
                  style={{ width: "72px", height: "72px", borderRadius: "50%", background: "rgba(34,197,94,0.15)", border: "2px solid rgba(34,197,94,0.4)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem", boxShadow: "0 0 30px rgba(34,197,94,0.3)" }}>
                  <CheckCircle size={36} color="#22C55E" />
                </motion.div>
                <h3 style={{ color: "#fff", fontWeight: 700, margin: "0 0 0.75rem", fontSize: "1.4rem" }}>Message Sent! 🎉</h3>
                <p style={{ color: "rgba(255,255,255,0.5)", margin: "0 0 1.5rem" }}>Thank you for reaching out! I'll get back to you within 24 hours.</p>
                <motion.button whileHover={{ scale: 1.05 }} onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                  style={{ padding: "10px 24px", borderRadius: "10px", background: "rgba(59,130,246,0.15)", border: "1px solid rgba(59,130,246,0.3)", color: "#3B82F6", fontWeight: 600, cursor: "pointer", fontSize: "0.9rem" }}>
                  Send Another
                </motion.button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <h3 style={{ color: "#fff", fontWeight: 700, margin: "0 0 1.75rem", fontSize: "1.2rem" }}>Send a Message</h3>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }} className="form-row">
                  <div>
                    <label style={{ display: "block", color: "rgba(255,255,255,0.6)", fontSize: "0.82rem", fontWeight: 500, marginBottom: "0.5rem" }}>Your Name *</label>
                    <input style={inputStyle("name")} placeholder="John Doe" value={form.name}
                      onChange={(e) => { setForm({ ...form, name: e.target.value }); setErrors({ ...errors, name: "" }); }}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(59,130,246,0.6)")}
                      onBlur={(e) => (e.target.style.borderColor = errors.name ? "rgba(239,68,68,0.5)" : "rgba(255,255,255,0.1)")} />
                    {errors.name && <p style={{ color: "#EF4444", fontSize: "0.75rem", margin: "0.3rem 0 0" }}>{errors.name}</p>}
                  </div>
                  <div>
                    <label style={{ display: "block", color: "rgba(255,255,255,0.6)", fontSize: "0.82rem", fontWeight: 500, marginBottom: "0.5rem" }}>Email Address *</label>
                    <input type="email" style={inputStyle("email")} placeholder="john@example.com" value={form.email}
                      onChange={(e) => { setForm({ ...form, email: e.target.value }); setErrors({ ...errors, email: "" }); }}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(59,130,246,0.6)")}
                      onBlur={(e) => (e.target.style.borderColor = errors.email ? "rgba(239,68,68,0.5)" : "rgba(255,255,255,0.1)")} />
                    {errors.email && <p style={{ color: "#EF4444", fontSize: "0.75rem", margin: "0.3rem 0 0" }}>{errors.email}</p>}
                  </div>
                </div>

                <div style={{ marginBottom: "1rem" }}>
                  <label style={{ display: "block", color: "rgba(255,255,255,0.6)", fontSize: "0.82rem", fontWeight: 500, marginBottom: "0.5rem" }}>Subject</label>
                  <input style={inputStyle("subject")} placeholder="Internship / Collaboration / Project" value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(59,130,246,0.6)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")} />
                </div>

                <div style={{ marginBottom: "1.5rem" }}>
                  <label style={{ display: "block", color: "rgba(255,255,255,0.6)", fontSize: "0.82rem", fontWeight: 500, marginBottom: "0.5rem" }}>Message *</label>
                  <textarea rows={6} style={{ ...inputStyle("message"), resize: "vertical", minHeight: "140px" }}
                    placeholder="Hi Amrutha, I'd love to connect about..."
                    value={form.message}
                    onChange={(e) => { setForm({ ...form, message: e.target.value }); setErrors({ ...errors, message: "" }); }}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(59,130,246,0.6)")}
                    onBlur={(e) => (e.target.style.borderColor = errors.message ? "rgba(239,68,68,0.5)" : "rgba(255,255,255,0.1)")} />
                  {errors.message && <p style={{ color: "#EF4444", fontSize: "0.75rem", margin: "0.3rem 0 0" }}>{errors.message}</p>}
                </div>

                <motion.button type="submit" disabled={sending}
                  whileHover={!sending ? { scale: 1.02, boxShadow: "0 0 30px rgba(59,130,246,0.5)" } : {}}
                  whileTap={!sending ? { scale: 0.98 } : {}}
                  style={{ width: "100%", padding: "14px 28px", borderRadius: "12px", background: sending ? "rgba(59,130,246,0.4)" : "linear-gradient(135deg, #3B82F6, #8B5CF6)", border: "none", color: "#fff", fontSize: "0.95rem", fontWeight: 700, cursor: sending ? "not-allowed" : "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", boxShadow: sending ? "none" : "0 0 20px rgba(59,130,246,0.3)", transition: "all 0.3s ease" }}>
                  {sending ? (
                    <><motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} style={{ width: "18px", height: "18px", borderRadius: "50%", border: "2px solid rgba(255,255,255,0.3)", borderTop: "2px solid #fff" }} />Sending...</>
                  ) : (
                    <><Send size={18} />Send Message</>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes pulseGreen { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
