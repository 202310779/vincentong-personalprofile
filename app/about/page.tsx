import SkillButtons from "@/app/components/SkillButtons";

export default function AboutPage() {
  return (
        <>
      <div className="custom-shape-divider-top-1756770399">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      
    <main
      className="about-container"
      style={{ padding: "3rem 25rem", marginTop: "140px" }}
    >
      <div className="about-box contact-card">
        <h1 style={{ marginBottom: "1rem" }}>About Me</h1>
        <p style={{ lineHeight: 1.7 }}>
          Hello! I'm Vincent. I'm an IT student at Gordon College and an
          aspiring frontend developer. I enjoy building interfaces, learning
          UI/UX, and experimenting with small web animations. This page is part
          of the personal profile demo converted to Next.js.
        </p>

        <section style={{ marginTop: "1.5rem" }}>
          <h2 style={{ marginBottom: ".5rem" }}>Skills</h2>

          {/* NEW: skill buttons in a row */}
          <SkillButtons />
        </section>
      </div>
    </main>

     <div className="custom-shape-divider-bottom-1756770719">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </>
  );
}
