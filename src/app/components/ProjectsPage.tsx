import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Github, ExternalLink, Rocket, Brain, Shield, Dog, TrendingUp, Search, ShoppingBag } from "lucide-react";

// SVG road path — snakes through all 6 projects in viewBox "0 0 1100 2900"
// Projects at Y: [400, 850, 1300, 1750, 2200, 2650]
// Left peaks x=440 (projects 1,3,5), Right peaks x=660 (projects 2,4,6)
const ROAD_PATH_D = `
  M 550 0
  L 550 120
  C 550 240 440 290 440 400
  C 440 510 550 560 550 670
  C 550 760 660 810 660 850
  C 660 940 550 990 550 1110
  C 550 1200 440 1250 440 1300
  C 440 1400 550 1450 550 1560
  C 550 1650 660 1700 660 1750
  C 660 1850 550 1900 550 2010
  C 550 2100 440 2150 440 2200
  C 440 2300 550 2350 550 2460
  C 550 2550 660 2600 660 2650
  C 660 2750 550 2800 550 2900
`;

// Y-center for each project stop (must match the path above)
const PROJECT_Y = [400, 850, 1300, 1750, 2200, 2650];
const CONTAINER_H = 2900;
const CARD_HALF_H = 130;

interface Project {
  title: string;
  subtitle: string;
  desc: string;
  Icon: React.ComponentType<{ size?: number; color?: string }>;
  color: string;
  tags: string[];
  side: "left" | "right";
  status: string;

  github: string;
  demo: string;
}

const projects: Project[] = [
  {
    title: "Parkinson's Disease Detection",
    subtitle: "Healthcare AI",
    desc: "ML system detecting early Parkinson's signs using voice and tremor analysis data. Achieved 94%+ accuracy using ensemble learning methods on the Oxford Parkinson's dataset.",
    Icon: Brain,
    color: "#3B82F6",
    tags: ["Python", "TensorFlow", "Scikit-learn", "Flask", "Pandas"],
    side: "left",
    status: "Completed",
    github: "#",
    demo: "#",
  },
  {
    title: "TRATA – The Protector",
    subtitle: "Women Safety Tech",
    desc: "AI-driven safety application detecting distress signals via voice and video analysis, triggering real-time alerts and integrating with emergency response systems.",
    Icon: Shield,
    color: "#8B5CF6",
    tags: ["Python", "OpenCV", "NLP", "Flask", "React", "TensorFlow"],
    side: "right",
    status: "Completed",
    github: "#",
    demo: "https://helpline-nine.vercel.app/",
  },
  {
    title: "Dog Breed Classification",
    subtitle: "Computer Vision",
    desc: "CNN model that accurately identifies dog breeds from images using transfer learning on MobileNetV2, deployed as an interactive Streamlit web application.",
    Icon: Dog,
    color: "#06B6D4",
    tags: ["Python", "TensorFlow", "CNN", "Streamlit", "NumPy", "OpenCV"],
    side: "left",
    status: "Completed",
    github: "https://github.com/amrutha-b-s/dog-breed-classifier",
    demo: "#",
  },
  {
    title: "Gold Price Tracker",
    subtitle: "FinTech Analytics",
    desc: "Real-time gold price analytics platform with historical trend visualization, price prediction using LSTM models, and an intuitive dashboard for financial insights.",
    Icon: TrendingUp,
    color: "#F59E0B",
    tags: ["Python", "LSTM", "Pandas", "FastAPI", "React", "Recharts"],
    side: "right",
    status: "Completed",
    github: "https://github.com/amrutha-b-s/gold-price-tracker",
    demo: "https://gold-price-tracker-mu.vercel.app/",
  },
  {
    title: "Dog Verse",
    subtitle: "Pet Discovery Platform",
    desc: "Modern dog breed exploration platform featuring breed information, interactive UI, and user-friendly experience for pet enthusiasts.",
    Icon: Search,
    color: "#10B981",
    tags: ["React", "TypeScript", "TailwindCSS", "API", "Vite"],
    side: "left",
    status: "Completed",
      github: "https://github.com/amrutha-b-s/DogVerse",
      demo: "https://dog-verse.vercel.app/",
  },
  {
    title: "E-Commerce Platform",
    subtitle: "Full Stack Web App",
    desc: "Modern full-stack e-commerce platform built with Next.js featuring responsive UI, product browsing, shopping cart functionality, and smooth user experience.",
    Icon: ShoppingBag,
    color: "#F97316",
    tags: ["Next.js", "React", "Node.js", "MongoDB", "Tailwind"],
    side: "right",
    status: "Completed",
    github: "https://github.com/amrutha-b-s/ecommerce-next",
    demo: "https://ecommerce-next-mauve-zeta.vercel.app/",
  },
];

function colorRgb(color: string) {
  const m: Record<string, string> = {
    "#3B82F6": "59,130,246",
    "#8B5CF6": "139,92,246",
    "#06B6D4": "6,182,212",
    "#F59E0B": "245,158,11",
    "#10B981": "16,185,129",
    "#F97316": "249,115,22",
  };
  return m[color] || "59,130,246";
}

function TopDownCar() {
  return (
    <svg viewBox="0 0 52 80" width="52" height="80">
      <defs>
        <filter id="car-glow">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="hl-blur">
          <feGaussianBlur stdDeviation="3" />
        </filter>
      </defs>

      {/* Shadow underneath */}
      <ellipse cx="26" cy="42" rx="20" ry="30" fill="rgba(0,0,0,0.35)" />

      {/* Car body – main */}
      <rect x="8" y="6" width="36" height="68" rx="10" fill="#1D4ED8" filter="url(#car-glow)" />

      {/* Hood (front) */}
      <rect x="10" y="8" width="32" height="20" rx="8" fill="#2563EB" />

      {/* Windshield */}
      <rect x="13" y="11" width="26" height="14" rx="5" fill="#93C5FD" opacity="0.92" />

      {/* Windshield reflection */}
      <rect x="14" y="12" width="8" height="12" rx="3" fill="rgba(255,255,255,0.25)" />

      {/* Cabin roof */}
      <rect x="11" y="30" width="30" height="24" rx="4" fill="#1E40AF" />

      {/* Cabin window sides */}
      <rect x="11" y="31" width="6" height="22" rx="3" fill="#60A5FA" opacity="0.6" />
      <rect x="35" y="31" width="6" height="22" rx="3" fill="#60A5FA" opacity="0.6" />

      {/* Rear section */}
      <rect x="10" y="52" width="32" height="18" rx="7" fill="#2563EB" />

      {/* Rear window */}
      <rect x="13" y="54" width="26" height="12" rx="4" fill="#BAE6FD" opacity="0.75" />

      {/* Center stripe */}
      <rect x="24" y="8" width="4" height="66" rx="2" fill="#1D4ED8" opacity="0.5" />

      {/* Front left wheel */}
      <rect x="1" y="12" width="9" height="15" rx="4" fill="#0F172A" />
      <rect x="2" y="13" width="7" height="13" rx="3" fill="#1E293B" />
      <rect x="3" y="16" width="5" height="4" rx="1" fill="#334155" />

      {/* Front right wheel */}
      <rect x="42" y="12" width="9" height="15" rx="4" fill="#0F172A" />
      <rect x="43" y="13" width="7" height="13" rx="3" fill="#1E293B" />
      <rect x="44" y="16" width="5" height="4" rx="1" fill="#334155" />

      {/* Rear left wheel */}
      <rect x="1" y="53" width="9" height="15" rx="4" fill="#0F172A" />
      <rect x="2" y="54" width="7" height="13" rx="3" fill="#1E293B" />
      <rect x="3" y="57" width="5" height="4" rx="1" fill="#334155" />

      {/* Rear right wheel */}
      <rect x="42" y="53" width="9" height="15" rx="4" fill="#0F172A" />
      <rect x="43" y="54" width="7" height="13" rx="3" fill="#1E293B" />
      <rect x="44" y="57" width="5" height="4" rx="1" fill="#334155" />

      {/* Headlight glow (behind) */}
      <ellipse cx="16" cy="8" rx="7" ry="4" fill="#FDE68A" opacity="0.35" filter="url(#hl-blur)" />
      <ellipse cx="36" cy="8" rx="7" ry="4" fill="#FDE68A" opacity="0.35" filter="url(#hl-blur)" />

      {/* Headlights */}
      <ellipse cx="16" cy="9" rx="5" ry="3" fill="#FDE68A" />
      <ellipse cx="36" cy="9" rx="5" ry="3" fill="#FDE68A" />
      <ellipse cx="16" cy="9" rx="3" ry="1.5" fill="#FEF9C3" />
      <ellipse cx="36" cy="9" rx="3" ry="1.5" fill="#FEF9C3" />

      {/* Tail lights */}
      <ellipse cx="16" cy="71" rx="5" ry="3" fill="#EF4444" />
      <ellipse cx="36" cy="71" rx="5" ry="3" fill="#EF4444" />
      <ellipse cx="16" cy="71" rx="3" ry="1.5" fill="#FCA5A5" />
      <ellipse cx="36" cy="71" rx="3" ry="1.5" fill="#FCA5A5" />
    </svg>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const rgb = colorRgb(project.color);
  const { Icon } = project;
  return (
    <motion.div
      initial={{ opacity: 0, x: project.side === "left" ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{
        y: -6,
        boxShadow: `0 20px 60px rgba(${rgb},0.25)`,
        borderColor: project.color,
      }}
      style={{
        width: "100%",
        height: "260px",
        borderRadius: "20px",
        background: "rgba(15, 23, 42, 0.9)",
        border: `1px solid rgba(${rgb},0.25)`,
        backdropFilter: "blur(24px)",
        overflow: "hidden",
        cursor: "default",
        transition: "all 0.35s ease",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Card header */}
      <div
        style={{
          padding: "1.1rem 1.25rem 0.75rem",
          background: `linear-gradient(135deg, rgba(${rgb},0.12), rgba(${rgb},0.04))`,
          borderBottom: `1px solid rgba(${rgb},0.1)`,
          display: "flex",
          alignItems: "flex-start",
          gap: "0.75rem",
        }}
      >
        <div
          style={{
            width: "42px",
            height: "42px",
            borderRadius: "12px",
            background: `rgba(${rgb},0.18)`,
            border: `1px solid rgba(${rgb},0.4)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            boxShadow: `0 0 16px rgba(${rgb},0.3)`,
          }}
        >
          <Icon size={20} color={project.color} />
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.5rem", marginBottom: "0.2rem" }}>
            <span style={{ padding: "2px 8px", borderRadius: "4px", background: `rgba(${rgb},0.15)`, color: project.color, fontSize: "0.67rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", whiteSpace: "nowrap" }}>
              {project.subtitle}
            </span>
            <span style={{ padding: "2px 8px", borderRadius: "4px", background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.25)", color: "#22C55E", fontSize: "0.65rem", fontWeight: 600, whiteSpace: "nowrap" }}>
              ✓ {project.status}
            </span>
          </div>
          <h3 style={{ color: "#fff", fontWeight: 800, margin: 0, fontSize: "0.95rem", letterSpacing: "-0.01em", lineHeight: 1.2 }}>
            {project.title}
          </h3>
          <span style={{ fontSize: "0.68rem", color: "rgba(255,255,255,0.3)", fontWeight: 500 }}>Project #{index + 1}</span>
        </div>
      </div>

      {/* Description */}
      <div style={{ padding: "0.75rem 1.25rem", flex: 1 }}>
        <p style={{ color: "rgba(255,255,255,0.58)", fontSize: "0.8rem", lineHeight: 1.6, margin: 0, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
          {project.desc}
        </p>
      </div>

      {/* Tags */}
      <div style={{ padding: "0 1.25rem 0.6rem", display: "flex", flexWrap: "wrap", gap: "5px" }}>
        {project.tags.slice(0, 4).map((tag) => (
          <span key={tag} style={{ padding: "2px 8px", borderRadius: "5px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)", color: "rgba(255,255,255,0.5)", fontSize: "0.7rem", fontWeight: 500 }}>
            {tag}
          </span>
        ))}
        {project.tags.length > 4 && (
          <span style={{ padding: "2px 8px", borderRadius: "5px", background: `rgba(${rgb},0.1)`, color: project.color, fontSize: "0.7rem", fontWeight: 600 }}>+{project.tags.length - 4}</span>
        )}
      </div>

      {/* Buttons */}
      <div style={{ padding: "0 1.25rem 1rem", display: "flex", gap: "0.5rem" }}>
        <motion.a href={project.github} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.04, boxShadow: `0 0 18px rgba(${rgb},0.45)` }} whileTap={{ scale: 0.97 }}
          style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", padding: "7px", borderRadius: "8px", background: `linear-gradient(135deg, ${project.color}cc, ${project.color})`, border: "none", color: "#fff", fontSize: "0.78rem", fontWeight: 700, cursor: "pointer", textDecoration: "none" }}>
          <Github size={13} /> GitHub
        </motion.a>
        <motion.a href={project.demo} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
          style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", padding: "7px", borderRadius: "8px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.65)", fontSize: "0.78rem", fontWeight: 600, cursor: "pointer", textDecoration: "none" }}>
          <ExternalLink size={13} /> Demo
        </motion.a>
      </div>
    </motion.div>
  );
}

export function ProjectsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const carRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !pathRef.current || !carRef.current) return;
      const { top, height } = containerRef.current.getBoundingClientRect();
      const viewH = window.innerHeight;
      const totalScrollable = height - viewH;
      if (totalScrollable <= 0) return;
      const progress = Math.max(0, Math.min(1, -top / totalScrollable));

      const pathEl = pathRef.current;
      const totalLen = pathEl.getTotalLength();
      const t = progress * totalLen;
      const pt = pathEl.getPointAtLength(t);
      const pt2 = pathEl.getPointAtLength(Math.min(t + 12, totalLen));

      const angle = Math.atan2(pt2.y - pt.y, pt2.x - pt.x) * (180 / Math.PI) + 90;
      const containerW = containerRef.current.offsetWidth;
      const scaleX = containerW / 1100;

      const car = carRef.current;
      car.style.left = `${pt.x * scaleX - 26}px`;
      car.style.top = `${pt.y - 40}px`;
      car.style.transform = `rotate(${angle}deg)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // slight delay so SVG path is measured after mount
    const t = setTimeout(handleScroll, 100);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(t);
    };
  }, []);

  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      {/* Absolute background blobs */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
        <div style={{ position: "absolute", top: "5%", left: "50%", transform: "translateX(-50%)", width: "700px", height: "350px", borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)", filter: "blur(60px)" }} />
      </div>

      {/* ─── Section Header ─── */}
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ textAlign: "center", padding: "5rem 2rem 3rem", position: "relative", zIndex: 1 }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "5px 16px", borderRadius: "100px", background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.3)", color: "#8B5CF6", fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>
          <Rocket size={13} /> Projects
        </div>
        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#fff", margin: "0 0 1rem", letterSpacing: "-0.03em" }}>
          The Journey of{" "}
          <span style={{ background: "linear-gradient(135deg, #8B5CF6, #06B6D4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Building</span>
        </h2>
        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "1rem", maxWidth: "520px", margin: "0 auto" }}>
          Scroll to drive through my project journey — 6 AI & full-stack builds along the road
        </p>
      </motion.div>

      {/* ─── DESKTOP: Road + Car ─── */}
      <div
        ref={containerRef}
        className="road-desktop"
        style={{ position: "relative", height: `${CONTAINER_H}px`, maxWidth: "1100px", margin: "0 auto", overflow: "hidden" }}
      >
        {/* SVG Road */}
        <svg
          width="100%"
          height="100%"
          viewBox={`0 0 1100 ${CONTAINER_H}`}
          preserveAspectRatio="none"
          style={{ position: "absolute", top: 0, left: 0, zIndex: 1, pointerEvents: "none" }}
        >
          <defs>
            <filter id="road-glow" x="-50%" y="-5%" width="200%" height="110%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="road-edge-glow">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Outer ambient glow */}
          <path d={ROAD_PATH_D} stroke="rgba(59,130,246,0.12)" strokeWidth="140" fill="none" filter="url(#road-glow)" />

          {/* Road surface */}
          <path d={ROAD_PATH_D} stroke="#0D1526" strokeWidth="96" fill="none" strokeLinecap="round" strokeLinejoin="round" />

          {/* Road edge highlight lines */}
          <path d={ROAD_PATH_D} stroke="rgba(59,130,246,0.55)" strokeWidth="96" fill="none" strokeLinecap="round" filter="url(#road-edge-glow)" />
          <path d={ROAD_PATH_D} stroke="#0D1526" strokeWidth="88" fill="none" strokeLinecap="round" />

          {/* Inner road tint */}
          <path d={ROAD_PATH_D} stroke="rgba(17,29,54,0.95)" strokeWidth="82" fill="none" strokeLinecap="round" />

          {/* Center dashes */}
          <path d={ROAD_PATH_D} stroke="rgba(255,255,255,0.22)" strokeWidth="2.5" fill="none" strokeDasharray="26 18" strokeLinecap="round" />

          {/* Side lane dots */}
          <path d={ROAD_PATH_D} stroke="rgba(59,130,246,0.18)" strokeWidth="80" fill="none" strokeLinecap="round" strokeDasharray="4 80" />

          {/* Invisible path used for getTotalLength / getPointAtLength */}
          <path
            ref={pathRef}
            d={ROAD_PATH_D}
            stroke="transparent"
            strokeWidth="1"
            fill="none"
          />

          {/* Project stop markers on the road */}
          {PROJECT_Y.map((y, i) => {
            const cx = i % 2 === 0 ? 440 : 660;
            const proj = projects[i];
            const rgb = colorRgb(proj.color);
            return (
              <g key={i}>
                <circle cx={cx} cy={y} r="22" fill={`rgba(${rgb},0.15)`} stroke={proj.color} strokeWidth="2" />
                <circle cx={cx} cy={y} r="10" fill={proj.color} opacity="0.9" />
                <circle cx={cx} cy={y} r="5" fill="#fff" opacity="0.8" />
              </g>
            );
          })}
        </svg>

        {/* Car */}
        <div
          ref={carRef}
          style={{
            position: "absolute",
            zIndex: 20,
            pointerEvents: "none",
            filter: "drop-shadow(0 0 10px rgba(59,130,246,0.9)) drop-shadow(0 0 20px rgba(59,130,246,0.4))",
            left: "524px",
            top: "-40px",
          }}
        >
          <TopDownCar />
        </div>

        {/* Project cards — absolutely positioned */}
        {projects.map((project, i) => {
          const y = PROJECT_Y[i];
          const isLeft = project.side === "left";
          return (
            <div
              key={project.title}
              style={{
                position: "absolute",
                top: `${y - CARD_HALF_H}px`,
                left: isLeft ? "0%" : "61%",
                width: "38%",
                zIndex: 10,
              }}
            >
              <ProjectCard project={project} index={i} />
            </div>
          );
        })}

        {/* Finish flag at bottom */}
        <div style={{ position: "absolute", bottom: "60px", left: "50%", transform: "translateX(-50%)", zIndex: 10, textAlign: "center" }}>
          <motion.div initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3, type: "spring" }}
            style={{ fontSize: "2.5rem", filter: "drop-shadow(0 0 12px rgba(59,130,246,0.8))" }}>🏁</motion.div>
          <div style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.75rem", marginTop: "4px", fontWeight: 500 }}>End of Journey</div>
        </div>
      </div>

      {/* ─── MOBILE: Card Grid ─── */}
      <div className="road-mobile" style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 1.25rem 5rem", display: "none" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.25rem" }}>
          {projects.map((project, i) => (
            <motion.div key={project.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
              <ProjectCard project={project} index={i} />
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 769px) {
          .road-desktop { display: block !important; }
          .road-mobile { display: none !important; }
        }
        @media (max-width: 768px) {
          .road-desktop { display: none !important; }
          .road-mobile { display: block !important; }
        }
      `}</style>
    </div>
  );
}
