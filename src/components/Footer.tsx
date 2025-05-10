import { Github, Linkedin } from "lucide-react";
import UXAnnotation from "./UXAnnotation";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 md:px-12 border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-muted-foreground">
          © {currentYear} Your Name. All rights reserved. [Built with ♡, and a
          little bit of JavaScript magic ✨]
        </div>

        <UXAnnotation explanation="Social links provide additional ways for visitors to connect and learn more about you on external platforms.">
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>
        </UXAnnotation>
      </div>
    </footer>
  );
}
