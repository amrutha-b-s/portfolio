import { motion } from "motion/react";
import { Briefcase, Calendar, MapPin, ChevronRight, Award, Brain, Eye, FileText, Link } from "lucide-react";

const highlights = [
  { icon: <Brain size={16} />, text: "Natural Language Processing (NLP) pipeline development" },
  { icon: <FileText size={16} />, text: "Smart Document Analyzer using TF-IDF and keyword extraction" },
  { icon: <Eye size={16} />, text: "Computer vision modules with OpenCV for document processing" },
  { icon: <Link size={16} />, text: "REST API integration with FastAPI for production deployment" },
  { icon: <Award size={16} />, text: "Delivered AI-driven insights improving document retrieval speed by 40%" },
];

const techUsed = [
  { name: "Python", color: "#3B82F6" },
  { name: "NLP", color: "#8B5CF6" },
  { name: "TF-IDF", color: "#06B6D4" },
  { name: "OpenCV", color: "#3B82F6" },
  { name: "FastAPI", color: "#8B5CF6" },
  { name: "REST APIs", color: "#06B6D4" },
  { name: "TensorFlow", color: "#F59E0B" },
  { name: "Pandas", color: "#3B82F6" },
];

export function ExperiencePage() {
  return (
    <div style={{ position: "relative", minHeight: "100vh", padding: "5rem 2rem 6rem", overflow: "hidden" }}>
      {/* Background */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
        <div
          style={{
            position: "absolute",
            top: "10%",
            right: "-5%",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "15%",
            left: "5%",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
      </div>

      <div style={{ maxWidth: "900px", margin: "0 auto", position: "relative", zIndex: 1 }}>
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
            <Briefcase size={13} />
            Professional Experience
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
            Where I've{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #3B82F6, #8B5CF6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Worked
            </span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "1rem", maxWidth: "500px", margin: "0 auto" }}>
            Building real-world AI solutions and gaining hands-on experience with cutting-edge technologies
          </p>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Timeline line */}
          <div
            style={{
              position: "absolute",
              left: "27px",
              top: "60px",
              bottom: "0",
              width: "2px",
              background: "linear-gradient(to bottom, #3B82F6, rgba(59,130,246,0.1))",
            }}
          />

          {/* Experience Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ display: "flex", gap: "2rem", alignItems: "flex-start" }}
          >
            {/* Dot */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              style={{
                flexShrink: 0,
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                background: "rgba(59,130,246,0.15)",
                border: "2px solid #3B82F6",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 25px rgba(59,130,246,0.4)",
                zIndex: 1,
                position: "relative",
              }}
            >
              <Briefcase size={22} color="#3B82F6" />
            </motion.div>

            {/* Card */}
            <motion.div
              whileHover={{ y: -4, boxShadow: "0 20px 60px rgba(59,130,246,0.15)" }}
              style={{
                flex: 1,
                borderRadius: "24px",
                overflow: "hidden",
                background: "rgba(17,24,39,0.7)",
                border: "1px solid rgba(59,130,246,0.2)",
                backdropFilter: "blur(20px)",
                transition: "all 0.3s ease",
                marginBottom: "2rem",
              }}
            >
              {/* Card header */}
              <div
                style={{
                  padding: "1.75rem 2rem",
                  background: "linear-gradient(135deg, rgba(59,130,246,0.08), rgba(139,92,246,0.05))",
                  borderBottom: "1px solid rgba(59,130,246,0.1)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                    gap: "1rem",
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        padding: "3px 10px",
                        borderRadius: "6px",
                        background: "rgba(59,130,246,0.15)",
                        color: "#3B82F6",
                        fontSize: "0.72rem",
                        fontWeight: 600,
                        marginBottom: "0.5rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                      }}
                    >
                      <span
                        style={{
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          background: "#3B82F6",
                        }}
                      />
                      Internship
                    </div>
                    <h3
                      style={{
                        color: "#fff",
                        fontWeight: 800,
                        fontSize: "1.4rem",
                        margin: "0 0 0.4rem",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      AI/ML Intern
                    </h3>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <span
                        style={{
                          background: "linear-gradient(135deg, #3B82F6, #8B5CF6)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                          fontWeight: 700,
                          fontSize: "1.05rem",
                        }}
                      >
                        SuprMentr Technologies Pvt. Ltd.
                      </span>
                    </div>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "6px", alignItems: "flex-end" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        color: "rgba(255,255,255,0.5)",
                        fontSize: "0.85rem",
                      }}
                    >
                      <Calendar size={14} color="#06B6D4" />
                      Jan 2026 – May 2026
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        color: "rgba(255,255,255,0.5)",
                        fontSize: "0.85rem",
                      }}
                    >
                      <MapPin size={14} color="#06B6D4" />
                      Bangalore, India
                    </div>
                  </div>
                </div>
              </div>

              {/* Card body */}
              <div style={{ padding: "1.75rem 2rem" }}>
                <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.75, margin: "0 0 1.5rem", fontSize: "0.95rem" }}>
                  Developed intelligent AI/ML solutions during a hands-on internship, focusing on
                  natural language processing and computer vision systems. Designed and deployed
                  production-ready APIs for document intelligence, contributing directly to the
                  company's core AI product offerings.
                </p>

                <h4
                  style={{
                    color: "rgba(255,255,255,0.8)",
                    fontWeight: 600,
                    fontSize: "0.875rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    margin: "0 0 1rem",
                  }}
                >
                  Key Contributions
                </h4>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1.75rem" }}>
                  {highlights.map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "12px",
                        padding: "10px 14px",
                        borderRadius: "10px",
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      <span
                        style={{
                          color: "#3B82F6",
                          flexShrink: 0,
                          marginTop: "1px",
                        }}
                      >
                        {h.icon}
                      </span>
                      <span style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.9rem", lineHeight: 1.5 }}>
                        {h.text}
                      </span>
                      <ChevronRight size={14} color="rgba(255,255,255,0.2)" style={{ marginLeft: "auto", flexShrink: 0 }} />
                    </motion.div>
                  ))}
                </div>

                {/* Tech stack used */}
                <div>
                  <h4
                    style={{
                      color: "rgba(255,255,255,0.8)",
                      fontWeight: 600,
                      fontSize: "0.875rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      margin: "0 0 0.875rem",
                    }}
                  >
                    Technologies Used
                  </h4>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                    {techUsed.map((tech) => (
                      <motion.span
                        key={tech.name}
                        whileHover={{ scale: 1.05 }}
                        style={{
                          padding: "5px 14px",
                          borderRadius: "8px",
                          background: `rgba(${tech.color === "#3B82F6" ? "59,130,246" : tech.color === "#8B5CF6" ? "139,92,246" : tech.color === "#06B6D4" ? "6,182,212" : "245,158,11"},0.12)`,
                          border: `1px solid rgba(${tech.color === "#3B82F6" ? "59,130,246" : tech.color === "#8B5CF6" ? "139,92,246" : tech.color === "#06B6D4" ? "6,182,212" : "245,158,11"},0.3)`,
                          color: tech.color,
                          fontSize: "0.8rem",
                          fontWeight: 600,
                          cursor: "default",
                        }}
                      >
                        {tech.name}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Future card hint */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.5rem",
              paddingLeft: "0",
            }}
          >
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                border: "2px dashed rgba(59,130,246,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <span style={{ color: "rgba(59,130,246,0.5)", fontSize: "1.2rem" }}>+</span>
            </div>
            <div
              style={{
                padding: "1.25rem 1.75rem",
                borderRadius: "16px",
                background: "rgba(59,130,246,0.04)",
                border: "1px dashed rgba(59,130,246,0.2)",
                color: "rgba(255,255,255,0.35)",
                fontSize: "0.9rem",
                fontStyle: "italic",
              }}
            >
              The next chapter is loading... 🚀
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
