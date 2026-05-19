import { useState, useEffect } from "react";
import { Outlet, NavLink, useLocation } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Zap, Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/skills", label: "Skills" },
  { path: "/experience", label: "Experience" },
  { path: "/projects", label: "Projects" },
  { path: "/achievements", label: "Achievements" },
  { path: "/contact", label: "Contact" },
];

export function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0B1120",
        fontFamily: "'Inter', 'Poppins', sans-serif",
        color: "#fff",
        overflowX: "hidden",
      }}
    >
      {/* Navbar */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: scrolled
            ? "rgba(11, 17, 32, 0.85)"
            : "rgba(11, 17, 32, 0.4)",
          backdropFilter: "blur(20px)",
          borderBottom: scrolled
            ? "1px solid rgba(59, 130, 246, 0.15)"
            : "1px solid transparent",
          transition: "all 0.3s ease",
          padding: "0 2rem",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "68px",
          }}
        >
          {/* Logo */}
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "10px",
                  background: "linear-gradient(135deg, #3B82F6, #8B5CF6)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
                }}
              >
                <Zap size={18} color="#fff" fill="#fff" />
              </div>
              <span
                style={{
                  background: "linear-gradient(135deg, #3B82F6, #8B5CF6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                }}
              >
                Amrutha BS
              </span>
            </motion.div>
          </NavLink>

          {/* Desktop Nav */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
            className="hidden-mobile"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                style={({ isActive }) => ({
                  textDecoration: "none",
                  padding: "6px 14px",
                  borderRadius: "8px",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: isActive ? "#fff" : "rgba(255,255,255,0.6)",
                  background: isActive
                    ? "rgba(59, 130, 246, 0.15)"
                    : "transparent",
                  border: isActive
                    ? "1px solid rgba(59, 130, 246, 0.3)"
                    : "1px solid transparent",
                  boxShadow: isActive
                    ? "0 0 12px rgba(59, 130, 246, 0.2)"
                    : "none",
                  transition: "all 0.2s ease",
                })}
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink to="/contact" style={{ textDecoration: "none", marginLeft: "8px" }}>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(59, 130, 246, 0.5)" }}
                whileTap={{ scale: 0.98 }}
                style={{
                  background: "linear-gradient(135deg, #3B82F6, #8B5CF6)",
                  border: "none",
                  borderRadius: "8px",
                  color: "#fff",
                  padding: "7px 18px",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Hire Me
              </motion.button>
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: "none",
              background: "rgba(59, 130, 246, 0.1)",
              border: "1px solid rgba(59, 130, 246, 0.3)",
              borderRadius: "8px",
              color: "#fff",
              padding: "8px",
              cursor: "pointer",
            }}
            className="show-mobile"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              style={{
                borderTop: "1px solid rgba(59, 130, 246, 0.15)",
                padding: "1rem 0",
                display: "flex",
                flexDirection: "column",
                gap: "4px",
              }}
            >
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === "/"}
                  style={({ isActive }) => ({
                    textDecoration: "none",
                    padding: "10px 16px",
                    borderRadius: "8px",
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    color: isActive ? "#3B82F6" : "rgba(255,255,255,0.7)",
                    background: isActive ? "rgba(59, 130, 246, 0.1)" : "transparent",
                    transition: "all 0.2s ease",
                  })}
                >
                  {link.label}
                </NavLink>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Page Content */}
      <main style={{ paddingTop: "68px" }}>
        <Outlet />
      </main>

      {/* Footer */}
      <footer
        style={{
          background: "#080D1A",
          borderTop: "1px solid rgba(59, 130, 246, 0.1)",
          padding: "3rem 2rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1.5rem",
              marginBottom: "2rem",
            }}
          >
            {[
              { icon: <Github size={20} />, href: "https://github.com/", label: "GitHub" },
              { icon: <Linkedin size={20} />, href: "https://linkedin.com/", label: "LinkedIn" },
              { icon: <Mail size={20} />, href: "mailto:amrutha@example.com", label: "Email" },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -3 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "rgba(255,255,255,0.5)",
                  textDecoration: "none",
                  padding: "10px 18px",
                  borderRadius: "10px",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#3B82F6";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(59,130,246,0.3)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                }}
              >
                {social.icon}
                {social.label}
              </motion.a>
            ))}
          </div>
          <div
            style={{
              height: "1px",
              background: "rgba(255,255,255,0.06)",
              marginBottom: "1.5rem",
            }}
          />
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.85rem", margin: 0 }}>
            © 2026 Amrutha B S · Crafted with passion for AI & Innovation
          </p>
          <p style={{ color: "rgba(255,255,255,0.15)", fontSize: "0.75rem", margin: "0.5rem 0 0" }}>
            AI/ML Engineer · Full Stack Developer · Bangalore, India
          </p>
        </div>
      </footer>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #0B1120; }
        ::-webkit-scrollbar-thumb { background: rgba(59,130,246,0.4); border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(59,130,246,0.6); }
      `}</style>
    </div>
  );
}
