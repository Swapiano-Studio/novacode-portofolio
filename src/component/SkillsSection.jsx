import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
  { name: "HTML/CSS", level: 85, category: "frontend" },
  { name: "React", level: 70, category: "frontend" },
  { name: "Tailwind CSS", level: 70, category: "frontend" },
  { name: "JavaScript", level: 80, category: "frontend" },

  { name: "Python", level: 85, category: "backend" },
  { name: "Django", level: 80, category: "backend" },
  { name: "PostgreeSQL", level: 60, category: "backend" },
  { name: "MySQL", level: 55, category: "backend" },

  { name: "Git/Github", level: 80, category: "tools" },
  { name: "Postman", level: 70, category: "tools" },
  { name: "Docker", level: 55, category: "tools" },
  { name: "VS Code", level: 90, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filterSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span> Skills</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filterSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3>{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                ></div>
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
