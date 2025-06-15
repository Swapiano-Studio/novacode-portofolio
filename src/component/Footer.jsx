import { ArrowUp } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="py-4 px-4 bg-card relative border-t border-border mt-12 flex flex-wrap justify-between items-center">
      <p className="text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} Novacode, All rights reversed.
      </p>
      <a
        href="#hero"
        className="p-1 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={18} />
      </a>
    </footer>
  );
};

export default Footer;
