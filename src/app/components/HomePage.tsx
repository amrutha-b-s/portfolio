import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import {
  ArrowRight,
  Download,
  Mail,
  ChevronDown,
  Brain,
  Code2,
  Cpu,
  Layers,
  Sparkles,
  Terminal,
  GitBranch,
  Database,
  Eye,
} from "lucide-react";

const TYPED_TEXTS = [
  "AI/ML Engineer",
  "Full Stack Developer",
  "Innovation Builder",
  "Deep Learning Enthusiast",
];

function useTyping(texts: string[]) {
  const [display, setDisplay] = useState("");
  const [idx, setIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const text = texts[idx];
    const speed = deleting ? 50 : 100;
    const timer = setTimeout(() => {
      if (!deleting) {
        if (charIdx < text.length) {
          setDisplay(text.slice(0, charIdx + 1));
          setCharIdx((c) => c + 1);
        } else {
          setTimeout(() => setDeleting(true), 1800);
        }
      } else {
        if (charIdx > 0) {
          setDisplay(text.slice(0, charIdx - 1));
          setCharIdx((c) => c - 1);
        } else {
          setDeleting(false);
          setIdx((i) => (i + 1) % texts.length);
        }
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [charIdx, deleting, idx, texts]);

  return display;
}

const floatingIcons = [
  { Icon: Brain, color: "#8B5CF6", x: "10%", y: "20%", delay: 0 },
  { Icon: Code2, color: "#3B82F6", x: "85%", y: "15%", delay: 0.5 },
  { Icon: Cpu, color: "#06B6D4", x: "75%", y: "70%", delay: 1 },
  { Icon: Layers, color: "#8B5CF6", x: "5%", y: "75%", delay: 1.5 },
  { Icon: Database, color: "#3B82F6", x: "90%", y: "45%", delay: 0.8 },
  { Icon: GitBranch, color: "#06B6D4", x: "15%", y: "50%", delay: 1.2 },
  { Icon: Sparkles, color: "#8B5CF6", x: "50%", y: "5%", delay: 0.3 },
];

const techStack = ["Python", "TensorFlow", "React", "Flask", "OpenCV", "FastAPI", "NumPy", "Pandas"];

const terminalLines = [
  { text: "$ python amrutha.py", color: "#06B6D4" },
  { text: "> Initializing AI modules...", color: "rgba(255,255,255,0.5)" },
  { text: "> Loading ML frameworks...", color: "rgba(255,255,255,0.5)" },
  { text: "> Building impactful solutions...", color: "rgba(255,255,255,0.5)" },
  { text: "✓ Status: Ready to innovate!", color: "#3B82F6" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export function HomePage() {
  const typed = useTyping(TYPED_TEXTS);
  const [termIdx, setTermIdx] = useState(0);

  useEffect(() => {
    if (termIdx < terminalLines.length) {
      const t = setTimeout(() => setTermIdx((i) => i + 1), 600);
      return () => clearTimeout(t);
    }
  }, [termIdx]);

  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      {/* Gradient Blobs */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
        <motion.div
          animate={{ x: [0, 60, 0], y: [0, -40, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            top: "-10%",
            left: "-5%",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <motion.div
          animate={{ x: [0, -50, 0], y: [0, 60, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          style={{
            position: "absolute",
            top: "20%",
            right: "-10%",
            width: "700px",
            height: "700px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -50, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          style={{
            position: "absolute",
            bottom: "-5%",
            left: "30%",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        {/* Grid overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, color, x, y, delay }, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.3, 0.7, 0.3],
            scale: [0.9, 1.1, 0.9],
            y: [0, -12, 0],
          }}
          transition={{ duration: 4 + i, repeat: Infinity, delay, ease: "easeInOut" }}
          style={{
            position: "absolute",
            left: x,
            top: y,
            zIndex: 1,
            pointerEvents: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "44px",
            height: "44px",
            borderRadius: "12px",
            background: `rgba(${color === "#8B5CF6" ? "139,92,246" : color === "#3B82F6" ? "59,130,246" : "6,182,212"},0.1)`,
            border: `1px solid rgba(${color === "#8B5CF6" ? "139,92,246" : color === "#3B82F6" ? "59,130,246" : "6,182,212"},0.3)`,
            backdropFilter: "blur(10px)",
          }}
        >
          <Icon size={20} color={color} />
        </motion.div>
      ))}

      {/* Hero Section */}
      <section
        style={{
          position: "relative",
          zIndex: 2,
          minHeight: "calc(100vh - 68px)",
          display: "flex",
          alignItems: "center",
          padding: "4rem 2rem",
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "center",
            width: "100%",
          }}
          className="hero-grid"
        >
          {/* Left: Text */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 16px",
                borderRadius: "100px",
                background: "rgba(59,130,246,0.1)",
                border: "1px solid rgba(59,130,246,0.3)",
                marginBottom: "1.5rem",
                fontSize: "0.8rem",
                fontWeight: 600,
                color: "#3B82F6",
                letterSpacing: "0.05em",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#06B6D4",
                  animation: "pulse 2s infinite",
                }}
              />
              Available for opportunities
            </motion.div>

            {/* Main heading */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.1}
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                margin: "0 0 0.5rem",
                letterSpacing: "-0.03em",
                color: "#fff",
              }}
            >
              Hi, I'm{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #3B82F6, #8B5CF6, #06B6D4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Amrutha 👋
              </span>
            </motion.h1>

            {/* Typing animation */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.2}
              style={{
                fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
                fontWeight: 600,
                color: "#3B82F6",
                marginBottom: "1.25rem",
                minHeight: "2em",
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              {typed}
              <span
                style={{
                  display: "inline-block",
                  width: "2px",
                  height: "1.2em",
                  background: "#3B82F6",
                  animation: "blink 1s infinite",
                  marginLeft: "2px",
                }}
              />
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.3}
              style={{
                color: "rgba(255,255,255,0.6)",
                fontSize: "1.05rem",
                lineHeight: 1.7,
                margin: "0 0 2rem",
                maxWidth: "500px",
              }}
            >
              Passionate about building intelligent systems that matter. I craft AI-powered
              applications, full-stack platforms, and machine learning solutions that bridge
              the gap between research and real-world impact.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.4}
              style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
            >
              <Link to="/projects" style={{ textDecoration: "none" }}>
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59,130,246,0.5)" }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "13px 28px",
                    borderRadius: "12px",
                    background: "linear-gradient(135deg, #3B82F6, #8B5CF6)",
                    border: "none",
                    color: "#fff",
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    boxShadow: "0 0 20px rgba(59,130,246,0.3)",
                  }}
                >
                  View Projects <ArrowRight size={17} />
                </motion.button>
              </Link>


<motion.button
  onClick={() =>
    window.open(
      "https://drive.google.com/file/d/1le5QBuj1ukFL1LQ1s7QcrXcuqajRxyK3/view?usp=drive_link",
      "_blank"
    )
  }
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.97 }}
  style={{
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "13px 28px",
    borderRadius: "12px",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.15)",
    color: "#fff",
    fontSize: "0.95rem",
    fontWeight: 600,
    cursor: "pointer",
  }}
>
  👁 View Resume
</motion.button>
              <Link to="/contact" style={{ textDecoration: "none" }}>
                <motion.button
                  whileHover={{ scale: 1.05, borderColor: "rgba(6,182,212,0.6)" }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "13px 28px",
                    borderRadius: "12px",
                    background: "rgba(6,182,212,0.08)",
                    border: "1px solid rgba(6,182,212,0.3)",
                    color: "#06B6D4",
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  <Mail size={17} /> Contact Me
                </motion.button>
              </Link>
            </motion.div>

            {/* Tech Stack Row */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.5}
              style={{ marginTop: "2rem" }}
            >
              <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.3)", marginBottom: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                Tech Stack
              </p>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {techStack.map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + i * 0.07 }}
                    style={{
                      padding: "4px 12px",
                      borderRadius: "6px",
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "rgba(255,255,255,0.6)",
                      fontSize: "0.78rem",
                      fontWeight: 500,
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Profile + Cards */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem" }}>
            {/* Profile Circle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "backOut" }}
              style={{ position: "relative" }}
            >
              {/* Glowing rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                style={{
                  position: "absolute",
                  inset: "-16px",
                  borderRadius: "50%",
                  background: "conic-gradient(from 0deg, #3B82F6, #8B5CF6, #06B6D4, #3B82F6)",
                  filter: "blur(4px)",
                  opacity: 0.6,
                }}
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                style={{
                  position: "absolute",
                  inset: "-8px",
                  borderRadius: "50%",
                  border: "2px dashed rgba(139,92,246,0.4)",
                }}
              />
              {/* Avatar */}
              <div
                style={{
                  position: "relative",
                  width: "220px",
                  height: "220px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #1e1b4b, #0f172a, #0c1a2e)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "3px solid rgba(59,130,246,0.4)",
                  boxShadow: "0 0 60px rgba(59,130,246,0.3), inset 0 0 60px rgba(139,92,246,0.05)",
                  overflow: "hidden",
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      fontSize: "4rem",
                      fontWeight: 800,
                      background: "linear-gradient(135deg, #3B82F6, #8B5CF6)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      lineHeight: 1,
                    }}
                  >
                    ABS
                  </div>
                  <div
                    style={{
                      color: "rgba(255,255,255,0.35)",
                      fontSize: "0.7rem",
                      fontWeight: 500,
                      letterSpacing: "0.15em",
                      marginTop: "0.25rem",
                    }}
                  >
                    AI · ML · DEV
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Terminal Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              style={{
                background: "rgba(8, 13, 26, 0.9)",
                border: "1px solid rgba(59,130,246,0.2)",
                borderRadius: "14px",
                padding: "1.25rem 1.5rem",
                width: "100%",
                maxWidth: "360px",
                backdropFilter: "blur(20px)",
                boxShadow: "0 0 30px rgba(59,130,246,0.1)",
              }}
            >
              {/* Terminal header */}
              <div style={{ display: "flex", gap: "6px", marginBottom: "1rem" }}>
                {["#FF5F56", "#FFBD2E", "#27C93F"].map((c) => (
                  <div key={c} style={{ width: "10px", height: "10px", borderRadius: "50%", background: c }} />
                ))}
                <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.7rem", marginLeft: "auto" }}>
                  <Terminal size={12} style={{ display: "inline", marginRight: "4px" }} />
                  amrutha.py
                </span>
              </div>
              {/* Terminal lines */}
              <div style={{ fontFamily: "monospace", fontSize: "0.82rem", lineHeight: 1.8 }}>
                {terminalLines.slice(0, termIdx).map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ color: line.color }}
                  >
                    {line.text}
                  </motion.div>
                ))}
                {termIdx < terminalLines.length && (
                  <span style={{ color: "#06B6D4", animation: "blink 1s infinite" }}>_</span>
                )}
              </div>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: "0.75rem",
                width: "100%",
                maxWidth: "360px",
              }}
            >
              {[
                { label: "Projects", value: "6+" },
                { label: "CGPA", value: "8.12" },
                { label: "Skills", value: "10+" },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  style={{
                    textAlign: "center",
                    padding: "0.875rem",
                    borderRadius: "12px",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <div
                    style={{
                      fontSize: "1.4rem",
                      fontWeight: 700,
                      background: "linear-gradient(135deg, #3B82F6, #8B5CF6)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {value}
                  </div>
                  <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.72rem", fontWeight: 500 }}>
                    {label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          style={{
            position: "absolute",
            bottom: "2rem",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            color: "rgba(255,255,255,0.3)",
            fontSize: "0.75rem",
            letterSpacing: "0.1em",
          }}
        >
          <span>Swipe</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <span style={{ fontSize: "18px", fontWeight: "bold" }}>›</span>
          </motion.div>
        </motion.div>
      </section>

      <style>{`
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
}
