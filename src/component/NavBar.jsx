import React, { useState, useEffect } from "react";
import { cn } from "../lib/utils";
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.screenY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="#hero" className="text-xl font-bold text-primary flex items-center">
          <span className="relative z-10">
            <span className="text-glow text-foreground">NovaCode</span>{" "}
            Portofolio
          </span>
        </a>

        {/* dekstop nav */}
        <div className="hidden md:flex space-x-8 items-center">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* mobile nav */}
          <ThemeToggle />

        <div className="md:hidden flex flex-col items-center relative">
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden p-2 text-foreground z-50"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div
            className={cn(
              "absolute top-full right-0 mt-2 w-48 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center transform transition-all duration-300 rounded-md shadow-lg",
              isMenuOpen
                ? "opacity-100 pointer-events-auto translate-y-0"
                : "opacity-0 pointer-events-none -translate-y-4"
            )}
          >
            <div className="flex flex-col space-y-4 text-xl w-full px-4 py-2">
              {navItems.map((item, key) => (
                <a
                  key={key}
                  href={item.href}
                  className="text-foreground/80 hover:text-primary transition-colors duration-300 block w-full text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
