import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/SocialIcons";
import { meta } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t-2 border-foreground bg-foreground text-background">
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-sm font-bold uppercase tracking-wide">
          &copy; {new Date().getFullYear()} Rohan Singh Rawat — Built with Next.js
        </p>

        <div className="flex items-center gap-4">
          <a
            href={meta.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-primary transition-colors"
          >
            <GitHubIcon size={20} />
          </a>
          <a
            href={meta.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-primary transition-colors"
          >
            <LinkedInIcon size={20} />
          </a>
          <a
            href={`mailto:${meta.email}`}
            aria-label="Email"
            className="hover:text-primary transition-colors"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
