import { useState } from "react";
import { motion } from "motion/react";
import { GraduationCap, Heart, Lightbulb, Target, MapPin, Calendar, BookOpen, Code2, Brain, Layers, ChevronDown } from "lucide-react";

function LanguageButton() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "5px",
          padding: "3px 10px",
          borderRadius: "5px",
          background: open ? "rgba(6,182,212,0.2)" : "rgba(6,182,212,0.08)",
          border: `1px solid rgba(6,182,212,${open ? "0.5" : "0.25"})`,
          color: "#06B6D4",
          fontSize: "0.74rem",
          fontWeight: 600,
          cursor: "pointer",
          transition: "all 0.2s ease",
        }}
      >
        🌐 Languages
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown size={11} />
        </motion.div>
      </motion.button>
      {open && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: -4 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          style={{ display: "inline-flex", gap: "5px", alignItems: "center" }}
        >
          {["Kannada", "Sanskrit"].map((lang) => (
            <motion.span
              key={lang}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              style={{
                padding: "3px 10px",
                borderRadius: "5px",
                background: "rgba(6,182,212,0.15)",
                border: "1px solid rgba(6,182,212,0.4)",
                color: "#06B6D4",
                fontSize: "0.74rem",
                fontWeight: 600,
              }}
            >
              {lang}
            </motion.span>
          ))}
        </motion.div>
      )}
    </>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const education = [
  {
    degree: "B.E. Information Science & Engineering",
    institution: "Dr Ambedkar Institute of Technology, Bangalore",
    period: "2022 – 2026",
    score: "CGPA: 8.12",
    icon: <GraduationCap size={22} />,
    color: "#3B82F6",
    highlights: ["AI & Machine Learning", "Data Structures & Algorithms", "Database Systems", "Software Engineering"],
    showLanguageBtn: false,
  },
  {
    degree: "Pre-University (PUC) – PCMC",
    institution: "Sri JCBM PU College, Sringeri",
    period: "2020 – 2022",
    score: "83%",
    icon: <BookOpen size={22} />,
    color: "#8B5CF6",
    highlights: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
    showLanguageBtn: false,
  },
  {
    degree: "Secondary School (SSLC)",
    institution: "Jnanavahini English Medium High School, Koppa",
    period: "2019 – 2020",
    score: "92.4%",
    icon: <Target size={22} />,
    color: "#06B6D4",
    highlights: ["Science", "Mathematics", "Social Studies"],
    showLanguageBtn: true,
  },
];

const interests = [
  {
    title: "Artificial Intelligence",
    desc: "Exploring advanced AI architectures, neural networks, and intelligent system design",
    icon: <Brain size={26} />,
    color: "#3B82F6",
    gradient: "rgba(59,130,246,0.1)",
    border: "rgba(59,130,246,0.25)",
  },
  {
    title: "Machine Learning",
    desc: "Building predictive models, deep learning pipelines, and data-driven solutions",
    icon: <Lightbulb size={26} />,
    color: "#8B5CF6",
    gradient: "rgba(139,92,246,0.1)",
    border: "rgba(139,92,246,0.25)",
  },
  {
    title: "Full Stack Development",
    desc: "Crafting end-to-end web applications with modern frameworks and clean APIs",
    icon: <Layers size={26} />,
    color: "#06B6D4",
    gradient: "rgba(6,182,212,0.1)",
    border: "rgba(6,182,212,0.25)",
  },
  {
    title: "AI-powered Applications",
    desc: "Merging AI intelligence with user-friendly interfaces for real-world impact",
    icon: <Code2 size={26} />,
    color: "#3B82F6",
    gradient: "rgba(59,130,246,0.1)",
    border: "rgba(59,130,246,0.25)",
  },
];

function colorRgb(color: string) {
  const m: Record<string, string> = {
    "#3B82F6": "59,130,246",
    "#8B5CF6": "139,92,246",
    "#06B6D4": "6,182,212",
  };
  return m[color] || "59,130,246";
}

export function AboutPage() {
  return (
    <div style={{ position: "relative", minHeight: "100vh", padding: "5rem 2rem 6rem", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
        <div style={{ position: "absolute", top: "10%", right: "-5%", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)", filter: "blur(50px)" }} />
        <div style={{ position: "absolute", bottom: "10%", left: "-5%", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)", filter: "blur(40px)" }} />
      </div>

      <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "5px 16px", borderRadius: "100px", background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.3)", color: "#8B5CF6", fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>
            <Heart size={13} /> About Me
          </div>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#fff", margin: "0 0 1rem", letterSpacing: "-0.03em" }}>
            Building the{" "}
            <span style={{ background: "linear-gradient(135deg, #8B5CF6, #06B6D4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>future</span>{" "}
            with AI
          </h2>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "1.05rem", maxWidth: "600px", margin: "0 auto", lineHeight: 1.7 }}>
            A passionate technologist from Karnataka, India, dedicated to creating impactful solutions at the intersection of AI, machine learning, and modern software engineering.
          </p>
        </motion.div>

        {/* Bio + Quick Info */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={0.1} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", marginBottom: "5rem" }} className="about-grid">
          <div style={{ padding: "2rem", borderRadius: "20px", background: "rgba(17,24,39,0.6)", border: "1px solid rgba(59,130,246,0.15)", backdropFilter: "blur(20px)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1.25rem" }}>
              <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "rgba(59,130,246,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Heart size={18} color="#3B82F6" />
              </div>
              <h3 style={{ margin: 0, color: "#fff", fontWeight: 700, fontSize: "1.15rem" }}>My Story</h3>
            </div>
            <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.75, margin: 0, fontSize: "0.95rem" }}>
              I'm Amrutha B S, an Information Science Engineering graduate (2026) with a deep passion for Artificial Intelligence and Machine Learning. My journey started with curiosity about how machines learn, leading me to build real-world AI applications that solve meaningful problems.
            </p>
            <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.75, margin: "1rem 0 0", fontSize: "0.95rem" }}>
              I believe in the power of combining elegant code with intelligent algorithms — creating software that's not just functional, but genuinely impactful. From building healthcare AI tools to developing full-stack platforms, I'm driven by the thrill of innovation.
            </p>
          </div>

          <div style={{ padding: "2rem", borderRadius: "20px", background: "rgba(17,24,39,0.6)", border: "1px solid rgba(139,92,246,0.15)", backdropFilter: "blur(20px)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1.5rem" }}>
              <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "rgba(139,92,246,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Target size={18} color="#8B5CF6" />
              </div>
              <h3 style={{ margin: 0, color: "#fff", fontWeight: 700, fontSize: "1.15rem" }}>Quick Info</h3>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              {[
                { icon: <MapPin size={16} />, label: "Location", value: "Bangalore, India" },
                { icon: <GraduationCap size={16} />, label: "Degree", value: "B.E. Information Science" },
                { icon: <Calendar size={16} />, label: "Graduated", value: "2026" },
                { icon: <Target size={16} />, label: "Focus", value: "AI/ML & Full Stack Dev" },
              ].map(({ icon, label, value }) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 14px", borderRadius: "10px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <span style={{ color: "#8B5CF6" }}>{icon}</span>
                  <div>
                    <div style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.07em" }}>{label}</div>
                    <div style={{ color: "#fff", fontSize: "0.9rem", fontWeight: 500 }}>{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Education Timeline */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={0.15} style={{ marginBottom: "5rem" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "5px 16px", borderRadius: "100px", background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.3)", color: "#3B82F6", fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>
              <GraduationCap size={13} /> Education
            </div>
            <h3 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, color: "#fff", margin: 0, letterSpacing: "-0.02em" }}>Academic Journey</h3>
          </div>

          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", left: "28px", top: "0", bottom: "0", width: "2px", background: "linear-gradient(to bottom, #3B82F6, #8B5CF6, #06B6D4)", opacity: 0.4 }} />

            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {education.map((edu, i) => (
                <motion.div key={edu.degree} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.6 }} style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start" }}>
                  <div style={{ flexShrink: 0, width: "56px", height: "56px", borderRadius: "50%", background: `rgba(${colorRgb(edu.color)},0.15)`, border: `2px solid ${edu.color}`, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: `0 0 20px rgba(${colorRgb(edu.color)},0.3)`, color: edu.color, zIndex: 1, position: "relative" }}>
                    {edu.icon}
                  </div>

                  <motion.div whileHover={{ y: -3, boxShadow: `0 10px 40px rgba(${colorRgb(edu.color)},0.15)` }} style={{ flex: 1, padding: "1.5rem", borderRadius: "16px", background: "rgba(17,24,39,0.7)", border: `1px solid rgba(${colorRgb(edu.color)},0.2)`, backdropFilter: "blur(20px)", cursor: "default", transition: "all 0.3s ease" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.75rem" }}>
                      <div>
                        <h4 style={{ color: "#fff", fontWeight: 700, margin: "0 0 0.25rem", fontSize: "1.05rem" }}>{edu.degree}</h4>
                        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem", margin: 0 }}>{edu.institution}</p>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <span style={{ display: "block", padding: "4px 12px", borderRadius: "6px", background: `rgba(${colorRgb(edu.color)},0.15)`, color: edu.color, fontSize: "0.8rem", fontWeight: 700, marginBottom: "4px" }}>{edu.score}</span>
                        <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.75rem" }}>{edu.period}</span>
                      </div>
                    </div>
                    <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", alignItems: "center" }}>
                      {edu.highlights.map((h) => (
                        <span key={h} style={{ padding: "3px 10px", borderRadius: "5px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.5)", fontSize: "0.74rem" }}>
                          {h}
                        </span>
                      ))}
                      {edu.showLanguageBtn && <LanguageButton />}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Career Interests */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={0.2}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "5px 16px", borderRadius: "100px", background: "rgba(6,182,212,0.1)", border: "1px solid rgba(6,182,212,0.3)", color: "#06B6D4", fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>
              <Target size={13} /> Interests
            </div>
            <h3 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, color: "#fff", margin: 0, letterSpacing: "-0.02em" }}>Career Interests</h3>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.25rem" }}>
            {interests.map((interest, i) => (
              <motion.div key={interest.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }} whileHover={{ y: -6, boxShadow: `0 20px 40px rgba(${colorRgb(interest.color)},0.2)` }} style={{ padding: "1.75rem", borderRadius: "18px", background: interest.gradient, border: `1px solid ${interest.border}`, backdropFilter: "blur(20px)", cursor: "default", transition: "all 0.3s ease" }}>
                <div style={{ width: "50px", height: "50px", borderRadius: "14px", background: `rgba(${colorRgb(interest.color)},0.2)`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem", color: interest.color }}>
                  {interest.icon}
                </div>
                <h4 style={{ color: "#fff", fontWeight: 700, margin: "0 0 0.5rem", fontSize: "1rem" }}>{interest.title}</h4>
                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.875rem", lineHeight: 1.6, margin: 0 }}>{interest.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) { .about-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}
