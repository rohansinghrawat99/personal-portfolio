"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { experiences } from "@/data/portfolio";
import { Badge } from "@/components/ui/Badge";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Experience() {
  return (
    <section
      id="experience"
      className="py-24 px-6 md:px-12 lg:px-20"
      aria-labelledby="experience-heading"
    >
      <div className="max-w-5xl mx-auto">
        <SectionTitle id="experience-heading" label="// Where I've Worked" title="Experience" />

        <ol className="relative border-l-2 border-foreground ml-2 flex flex-col gap-0">
          {experiences.map((exp, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.1, duration: 0.45 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline dot */}
              <span
                className={`absolute -left-[10px] top-1.5 w-5 h-5 border-2 border-foreground ${
                  exp.current ? "bg-primary" : "bg-card-bg"
                }`}
              />

              <article className="border-2 border-foreground bg-card-bg shadow-[4px_4px_0px_#0A0A0A] p-6 md:p-8 border-l-[6px] border-l-foreground">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-mono font-black text-xl uppercase tracking-tight">
                        {exp.company}
                      </h3>
                      {exp.current && (
                        <Badge variant="yellow">Current</Badge>
                      )}
                    </div>
                    <p className="font-mono text-sm font-bold text-foreground/70 mt-0.5">
                      {exp.role}
                    </p>
                  </div>
                  <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
                    <span className="font-mono text-xs font-bold uppercase tracking-wide bg-muted border border-foreground/30 px-2 py-0.5">
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1 font-mono text-xs text-foreground/50">
                      <MapPin size={11} /> {exp.location}
                    </span>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="flex flex-col gap-2 mb-5">
                  {exp.bullets.map((bullet, j) => (
                    <li key={j} className="flex gap-2 text-sm md:text-base font-medium text-foreground/80">
                      <span className="text-secondary font-bold shrink-0 mt-0.5">→</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Stack */}
                <div className="flex flex-wrap gap-2">
                  {exp.stack.map((tech) => (
                    <Badge key={tech} variant="muted">{tech}</Badge>
                  ))}
                </div>
              </article>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
