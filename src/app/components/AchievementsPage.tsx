import { motion } from "motion/react";
import { Trophy, Award, FileText, Star, Sparkles } from "lucide-react";

const achievements = [
  {
    title: "TCS IT Quiz",
    subtitle: "National Level Competition",
    desc: "Demonstrated exceptional technical knowledge across computer science, programming, AI, and IT domains at the prestigious TCS National IT Quiz, competing against top engineering students from across India.",
    icon: <Trophy size={32} />,
    color: "#F59E0B",
    gradient: "linear-gradient(135deg, rgba(245,158,11,0.15), rgba(245,158,11,0.05))",
    border: "rgba(245,158,11,0.25)",
    badge: "🏆 National Level",
    year: "2025",
    highlight: "Top Performer",
  },
  {
    title: "Research Paper Publication",
    subtitle: "Peer-Reviewed Journal",
    desc: "Published an original research paper on TRATA – The Protector, an AI-driven women's safety system combining computer vision and NLP for real-time threat detection and emergency response, contributing to the academic community's knowledge of AI for social good.",
    icon: <FileText size={32} />,
    color: "#3B82F6",
    gradient: "linear-gradient(135deg, rgba(59,130,246,0.15), rgba(59,130,246,0.05))",
    border: "rgba(59,130,246,0.25)",
    badge: "📄 Published Research",
    year: "2025",
    highlight: "Published",
  },
  {
    title: "Special Recognition Award",
    subtitle: "Academic Excellence",
    desc: "Received a special recognition award for outstanding academic performance, technical innovation, and significant contributions to the department through impactful project work and research initiatives.",
    icon: <Award size={32} />,
    color: "#8B5CF6",
    gradient: "linear-gradient(135deg, rgba(139,92,246,0.15), rgba(139,92,246,0.05))",
    border: "rgba(139,92,246,0.25)",
    badge: "⭐ Excellence Award",
    year: "2026",
    highlight: "Awarded",
  },
];

const stats = [
  { label: "Competitions", value: "3+", icon: <Trophy size={20} />, color: "#F59E0B" },
  { label: "Publications", value: "1+", icon: <FileText size={20} />, color: "#3B82F6" },
  { label: "Awards", value: "2+", icon: <Award size={20} />, color: "#8B5CF6" },
  { label: "CGPA", value: "8.12", icon: <Star size={20} />, color: "#06B6D4" },
];

function getColorRgb(color: string) {
  const map: Record<string, string> = {
    "#F59E0B": "245,158,11",
    "#3B82F6": "59,130,246",
    "#8B5CF6": "139,92,246",
    "#06B6D4": "6,182,212",
  };
  return map[color] || "59,130,246";
}

export function AchievementsPage() {
  return (
    <div style={{ position: "relative", minHeight: "100vh", padding: "5rem 2rem 6rem", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
        <div style={{ position: "absolute", top: "5%", right: "-5%", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)", filter: "blur(50px)" }} />
        <div style={{ position: "absolute", bottom: "5%", left: "-5%", width: "450px", height: "450px", borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)", filter: "blur(40px)" }} />
        {[...Array(20)].map((_, i) => (
          <motion.div key={i} animate={{ opacity: [0.2, 0.8, 0.2], scale: [0.8, 1.2, 0.8] }} transition={{ duration: 2 + (i % 4), repeat: Infinity, delay: i * 0.3 }} style={{ position: "absolute", width: "2px", height: "2px", borderRadius: "50%", background: "#fff", left: `${(i * 13 + 7) % 100}%`, top: `${(i * 17 + 5) % 100}%` }} />
        ))}
      </div>

      <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "5px 16px", borderRadius: "100px", background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.3)", color: "#F59E0B", fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>
            <Sparkles size={13} /> Achievements
          </div>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#fff", margin: "0 0 1rem", letterSpacing: "-0.03em" }}>
            Milestones &{" "}
            <span style={{ background: "linear-gradient(135deg, #F59E0B, #8B5CF6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Recognition</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "1rem", maxWidth: "520px", margin: "0 auto" }}>
            A collection of accomplishments that reflect dedication, technical excellence, and a drive to go beyond
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem", marginBottom: "3.5rem" }} className="stats-grid">
          {stats.map((stat, i) => (
            <motion.div key={stat.label} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -4, boxShadow: `0 10px 30px rgba(${getColorRgb(stat.color)},0.2)` }} style={{ padding: "1.5rem", borderRadius: "16px", background: `rgba(${getColorRgb(stat.color)},0.07)`, border: `1px solid rgba(${getColorRgb(stat.color)},0.2)`, backdropFilter: "blur(20px)", textAlign: "center", cursor: "default", transition: "all 0.3s ease" }}>
              <div style={{ color: stat.color, marginBottom: "0.5rem", display: "flex", justifyContent: "center" }}>{stat.icon}</div>
              <div style={{ fontSize: "1.75rem", fontWeight: 800, background: `linear-gradient(135deg, ${stat.color}, ${stat.color}aa)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", lineHeight: 1.1, marginBottom: "0.25rem" }}>{stat.value}</div>
              <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.78rem", fontWeight: 500 }}>{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievement Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {achievements.map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.7 }} whileHover={{ y: -5, boxShadow: `0 25px 60px rgba(${getColorRgb(item.color)},0.2)`, borderColor: item.color }} style={{ borderRadius: "24px", background: "rgba(17,24,39,0.8)", border: `1px solid ${item.border}`, backdropFilter: "blur(20px)", overflow: "hidden", cursor: "default", transition: "all 0.35s ease" }}>
              <div style={{ display: "flex", gap: "0", alignItems: "stretch" }} className="achievement-inner">
                <div style={{ width: "6px", background: `linear-gradient(to bottom, ${item.color}, ${item.color}44)`, flexShrink: 0 }} />

                <div style={{ padding: "2rem 1.75rem", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: item.gradient, borderRight: `1px solid rgba(${getColorRgb(item.color)},0.12)`, minWidth: "130px", gap: "0.75rem" }} className="achievement-icon-col">
                  <div style={{ width: "70px", height: "70px", borderRadius: "20px", background: `rgba(${getColorRgb(item.color)},0.2)`, border: `1px solid rgba(${getColorRgb(item.color)},0.4)`, display: "flex", alignItems: "center", justifyContent: "center", color: item.color, boxShadow: `0 0 25px rgba(${getColorRgb(item.color)},0.3)` }}>
                    {item.icon}
                  </div>
                  <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.75rem", fontWeight: 600 }}>{item.year}</span>
                </div>

                <div style={{ flex: 1, padding: "2rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.75rem" }}>
                    <div>
                      <span style={{ display: "inline-block", padding: "3px 10px", borderRadius: "6px", background: `rgba(${getColorRgb(item.color)},0.15)`, color: item.color, fontSize: "0.72rem", fontWeight: 600, marginBottom: "0.5rem" }}>{item.badge}</span>
                      <h3 style={{ color: "#fff", fontWeight: 800, fontSize: "1.3rem", margin: "0 0 0.25rem", letterSpacing: "-0.02em" }}>{item.title}</h3>
                      <p style={{ background: `linear-gradient(135deg, ${item.color}, ${item.color}99)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", fontWeight: 600, fontSize: "0.9rem", margin: 0 }}>{item.subtitle}</p>
                    </div>
                    <span style={{ padding: "6px 14px", borderRadius: "8px", background: `rgba(${getColorRgb(item.color)},0.15)`, color: item.color, fontSize: "0.8rem", fontWeight: 700, whiteSpace: "nowrap" }}>{item.highlight}</span>
                  </div>
                  <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.7, margin: 0, fontSize: "0.9rem" }}>{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .achievement-inner { flex-direction: column !important; }
          .achievement-icon-col { min-width: unset !important; flex-direction: row !important; border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.06) !important; }
        }
      `}</style>
    </div>
  );
}
