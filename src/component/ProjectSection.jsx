import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "TiensApp",
    description:
      "TiensApp is web app for product promotion and transactions, featuring login, CRUD, API integration, cart, and payment system.",
    image: "projects/shopapp.png",
    tags: ["Django", "React", "Bootstrap"],
    url: "https://newshop-jsyr.onrender.com",
    source: "https://github.com/Swapiano-Studio/ecommerce-react",
  },
  {
    id: 2,
    title: "NovacodeAnime",
    description:
      "Browse anime and manga lists with detailed info and character cards",
    image: "projects/anime.png",
    tags: ["React", "Tailwind"],
    url: "https://novacode-animelist.onrender.com",
    source: "https://github.com/Swapiano-Studio/animelist",
  },
  {
    id: 3,
    title: "Expesetracker",
    description:
      "Manage personal finances by tracking expenses, categorizing them, and visualizing spending patterns via interactive charts",
    image: "projects/expesetracker.png",
    tags: ["Django", "React", "Bootstrap", "PostgreeSQL"],
    url: "https://novacode-expesetracker.onrender.com",
    source: "https://github.com/Swapiano-Studio/expesetracker-django",
  },
];

const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my featured projects that I've worked on. You can
          find the source code for each project on my GitHub page.
        </p>
        <div className="grid grid-cols-1 md-grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-40 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-hover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-2">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-justify px-4 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.url}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      {" "}
                      <ExternalLink size={20} />{" "}
                    </a>
                    <a
                      href={project.url}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      {" "}
                      <Github size={20} />{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            target="_blank"
            href="https://github.com/swapiano-studio"
            className="cosmic-button w-fit flex items-center mx-auto"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
