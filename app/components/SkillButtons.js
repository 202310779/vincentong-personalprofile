"use client";

import { useState } from "react";

export default function SkillButtons() {
  const skills = [
    "HTML / CSS / JavaScript",
    "React / Next.js",
    "Basic UI/UX design",
  ];

  // track toggle state for each button (true = active)
  const [active, setActive] = useState(() => skills.map(() => false));

  function toggle(i) {
    setActive((prev) => {
      const copy = [...prev];
      copy[i] = !copy[i];
      return copy;
    });
  }

  return (
    <div className="skill-row" role="list">
      {skills.map((skill, i) => (
        <button
          key={skill}
          type="button"
          className={`skill-btn ${active[i] ? "active" : ""}`}
          onClick={() => toggle(i)}
          aria-pressed={!!active[i]}
        >
          {skill}
        </button>
      ))}
    </div>
  );
}
