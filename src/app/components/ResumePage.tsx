export default function ResumePage() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <iframe
        src="/resume.pdf"
        width="100%"
        height="100%"
        style={{ border: "none" }}
        title="Resume"
      />
    </div>
  );
}