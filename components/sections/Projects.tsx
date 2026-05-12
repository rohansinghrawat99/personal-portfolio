"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/ui/SocialIcons";
import { projects } from "@/data/portfolio";
import { Badge } from "@/components/ui/Badge";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 md:px-12 lg:px-20 bg-muted border-y-2 border-foreground"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-5xl mx-auto">
        <SectionTitle id="projects-heading" label="// What I've Built" title="Projects" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="group border-2 border-foreground bg-card-bg shadow-[4px_4px_0px_#0A0A0A] flex flex-col overflow-hidden transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#0A0A0A]"
            >
              {/* Yellow accent top bar */}
              <div className="h-2 bg-primary border-b-2 border-foreground w-full" />

              <div className="p-6 flex flex-col flex-1 gap-4">
                {/* Title row */}
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-mono font-black text-lg uppercase tracking-tight leading-tight">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 shrink-0">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} GitHub`}
                        className="border-2 border-foreground p-1.5 hover:bg-primary transition-colors shadow-[2px_2px_0px_#0A0A0A]"
                      >
                        <GitHubIcon size={14} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} live site`}
                        className="border-2 border-foreground p-1.5 hover:bg-primary transition-colors shadow-[2px_2px_0px_#0A0A0A]"
                      >
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm font-medium text-foreground/70 leading-relaxed">
                  {project.description}
                </p>

                {/* Bullets */}
                <ul className="flex flex-col gap-1.5 flex-1">
                  {project.bullets.map((b, j) => (
                    <li key={j} className="flex gap-2 text-sm text-foreground/80">
                      <span className="text-secondary font-bold shrink-0">→</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {/* Stack */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t-2 border-foreground/10">
                  {project.stack.map((tech) => (
                    <Badge key={tech} variant="muted">{tech}</Badge>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
