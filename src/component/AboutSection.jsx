import { Briefcase, Code, Variable } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Background in Mathematics and Computation
            </h3>
            <p className="text-muted-foreground text-justify mb-4">
              Hi! I’m a freelance web developer with an academic background in
              Mathematics and Computation. My core focus is backend development
              using Django, and I’m currently expanding into fullstack
              development by learning and building with React.js.
            </p>
            <p className="text-muted-foreground text-justify mb-4">
              I enjoy solving problems through code and crafting web solutions
              that are reliable, user-friendly, and scalable. My development
              approach emphasizes clean architecture, performance, and
              thoughtful design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1_L49TUnrlHcyPel1HMLLXhJwA0OIbdWp/view?usp=sharing"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/15 transtion-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-2">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with
                    modern framework.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Variable className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Custom CMS & Admin Dashboards
                  </h4>
                  <p className="text-muted-foreground">
                    The CMS that I built is based on Django Admin or a
                    React-based dashboard.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Creative Project Collaboration
                  </h4>
                  <p className="text-muted-foreground">
                    I’m open to working with designers, developers, or
                    non-technical teams, with a focus on clarity, flexibility,
                    and smooth collaboration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
