import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Cpu, Code2, Server, Users, ChevronRight, Zap } from "lucide-react";

const categories = [
  {
    id: "languages",
    label: "Languages & Tools",
    icon: <Code2 size={18} />,
    color: "#3B82F6",
    skills: [
      { name: "Python", level: 92, emoji: "🐍" },
      { name: "C++", level: 78, emoji: "⚙️" },
      { name: "JavaScript", level: 72, emoji: "🌐" },
      { name: "SQL", level: 80, emoji: "🗄️" },
      { name: "Git", level: 85, emoji: "🔀" },
      { name: "HTML/CSS", level: 75, emoji: "🎨" },
    ],
  },
  {
    id: "ml",
    label: "ML Frameworks",
    icon: <Cpu size={18} />,
    color: "#8B5CF6",
    skills: [
      { name: "TensorFlow", level: 85, emoji: "🧠" },
      { name: "OpenCV", level: 82, emoji: "👁️" },
      { name: "Pandas", level: 90, emoji: "🐼" },
      { name: "NumPy", level: 88, emoji: "📊" },
      { name: "Scikit-learn", level: 83, emoji: "🔬" },
      { name: "Matplotlib", level: 78, emoji: "📈" },
    ],
  },
  {
    id: "backend",
    label: "Backend Technologies",
    icon: <Server size={18} />,
    color: "#06B6D4",
    skills: [
      { name: "Flask", level: 88, emoji: "🌶️" },
      { name: "FastAPI", level: 82, emoji: "⚡" },
      { name: "Streamlit", level: 85, emoji: "🎈" },
      { name: "React", level: 76, emoji: "⚛️" },
      { name: "REST APIs", level: 84, emoji: "🔗" },
      { name: "Docker", level: 68, emoji: "🐳" },
    ],
  },
  {
    id: "soft",
    label: "Soft Skills",
    icon: <Users size={18} />,
    color: "#F59E0B",
    skills: [
      { name: "Problem Solving", level: 95, emoji: "🧩" },
      { name: "Team Collaboration", level: 90, emoji: "🤝" },
      { name: "Communication", level: 88, emoji: "💬" },
      { name: "Research", level: 85, emoji: "🔭" },
      { name: "Adaptability", level: 92, emoji: "🔄" },
      { name: "Time Management", level: 86, emoji: "⏰" },
    ],
  },
];

const techBadges = [
  "Python", "TensorFlow", "Flask", "Streamlit", "FastAPI", "React",
  "OpenCV", "NumPy", "Pandas", "Scikit-learn", "C++", "Git",
  "REST APIs", "NLP", "Deep Learning", "Data Science", "Computer Vision",
];

function CircleProgress({ level, color, size = 80 }: { level: number; color: string; size?: number }) {
  const radius = (size - 10) / 2;
  const circ = 2 * Math.PI * radius;
  const offset = circ - (level / 100) * circ;

  return (
    <div style={{ position: "relative", width: size, height: size, flexShrink: 0 }}>
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="5" />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray={circ}
          initial={{ strokeDashoffset: circ }}
          whileInView={{ strokeDashoffset: offset }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{ filter: `drop-shadow(0 0 6px ${color})` }}
        />
      </svg>
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "0.75rem",
          fontWeight: 700,
          color: "#fff",
        }}
      >
        {level}%
      </div>
    </div>
  );
}

export function SkillsPage() {
  const [active, setActive] = useState("languages");
  const activeCat = categories.find((c) => c.id === active)!;

  return (
    <div style={{ position: "relative", minHeight: "100vh", padding: "5rem 2rem 6rem", overflow: "hidden" }}>
      {/* Background blobs */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
        <div
          style={{
            position: "absolute",
            top: "5%",
            left: "-10%",
            width: "550px",
            height: "550px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            right: "-5%",
            width: "450px",
            height: "450px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
      </div>

      <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "5px 16px",
              borderRadius: "100px",
              background: "rgba(59,130,246,0.1)",
              border: "1px solid rgba(59,130,246,0.3)",
              color: "#3B82F6",
              fontSize: "0.78rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            <Zap size={13} />
            Technical Arsenal
          </div>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              color: "#fff",
              margin: "0 0 1rem",
              letterSpacing: "-0.03em",
            }}
          >
            Skills &{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #3B82F6, #8B5CF6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Expertise
            </span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "1rem", maxWidth: "550px", margin: "0 auto" }}>
            A versatile toolkit spanning AI/ML research, backend engineering, and full-stack development
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            display: "flex",
            gap: "0.75rem",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "3rem",
          }}
        >
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActive(cat.id)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 22px",
                borderRadius: "12px",
                border: active === cat.id ? `1px solid ${cat.color}` : "1px solid rgba(255,255,255,0.1)",
                background: active === cat.id
                  ? `rgba(${cat.color === "#3B82F6" ? "59,130,246" : cat.color === "#8B5CF6" ? "139,92,246" : cat.color === "#06B6D4" ? "6,182,212" : "245,158,11"},0.15)`
                  : "rgba(255,255,255,0.03)",
                color: active === cat.id ? cat.color : "rgba(255,255,255,0.5)",
                fontWeight: 600,
                fontSize: "0.875rem",
                cursor: "pointer",
                boxShadow: active === cat.id
                  ? `0 0 20px rgba(${cat.color === "#3B82F6" ? "59,130,246" : cat.color === "#8B5CF6" ? "139,92,246" : cat.color === "#06B6D4" ? "6,182,212" : "245,158,11"},0.2)`
                  : "none",
                transition: "all 0.3s ease",
              }}
            >
              {cat.icon}
              {cat.label}
              {active === cat.id && <ChevronRight size={14} />}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1rem",
              marginBottom: "4rem",
            }}
          >
            {activeCat.skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: `0 10px 40px rgba(${activeCat.color === "#3B82F6" ? "59,130,246" : activeCat.color === "#8B5CF6" ? "139,92,246" : activeCat.color === "#06B6D4" ? "6,182,212" : "245,158,11"},0.2)`,
                  borderColor: activeCat.color,
                }}
                style={{
                  padding: "1.5rem",
                  borderRadius: "16px",
                  background: "rgba(17,24,39,0.7)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  backdropFilter: "blur(20px)",
                  display: "flex",
                  alignItems: "center",
                  gap: "1.25rem",
                  cursor: "default",
                  transition: "all 0.3s ease",
                }}
              >
                <CircleProgress level={skill.level} color={activeCat.color} size={72} />
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "0.5rem" }}>
                    <span style={{ fontSize: "1.3rem" }}>{skill.emoji}</span>
                    <h4 style={{ color: "#fff", fontWeight: 700, margin: 0, fontSize: "1rem" }}>
                      {skill.name}
                    </h4>
                  </div>
                  {/* Bar */}
                  <div
                    style={{
                      height: "5px",
                      borderRadius: "3px",
                      background: "rgba(255,255,255,0.08)",
                      overflow: "hidden",
                    }}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: i * 0.07, ease: "easeOut" }}
                      style={{
                        height: "100%",
                        borderRadius: "3px",
                        background: `linear-gradient(90deg, ${activeCat.color}, ${activeCat.color === "#3B82F6" ? "#8B5CF6" : activeCat.color === "#8B5CF6" ? "#06B6D4" : "#3B82F6"})`,
                        boxShadow: `0 0 10px ${activeCat.color}`,
                      }}
                    />
                  </div>
                  <div
                    style={{
                      color: "rgba(255,255,255,0.35)",
                      fontSize: "0.72rem",
                      marginTop: "0.4rem",
                    }}
                  >
                    {skill.level >= 90 ? "Expert" : skill.level >= 80 ? "Advanced" : skill.level >= 70 ? "Proficient" : "Familiar"}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Floating Tech Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            padding: "2rem",
            borderRadius: "20px",
            background: "rgba(17,24,39,0.5)",
            border: "1px solid rgba(59,130,246,0.1)",
            backdropFilter: "blur(20px)",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "rgba(255,255,255,0.35)",
              fontSize: "0.75rem",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              marginBottom: "1.25rem",
            }}
          >
            All Technologies
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.625rem", justifyContent: "center" }}>
            {techBadges.map((badge, i) => (
              <motion.span
                key={badge}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                whileHover={{
                  scale: 1.1,
                  background: "rgba(59,130,246,0.2)",
                  borderColor: "rgba(59,130,246,0.5)",
                  color: "#3B82F6",
                }}
                style={{
                  padding: "6px 16px",
                  borderRadius: "8px",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "rgba(255,255,255,0.6)",
                  fontSize: "0.82rem",
                  fontWeight: 500,
                  cursor: "default",
                  transition: "all 0.2s ease",
                }}
              >
                {badge}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
