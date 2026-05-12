"use client";

import { motion } from "framer-motion";
import { meta, milestones } from "@/data/portfolio";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 md:px-12 lg:px-20 bg-muted border-y-2 border-foreground"
      aria-labelledby="about-heading"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left — decorative */}
          <div className="relative flex items-start">
            <div
              aria-hidden="true"
              className="select-none font-mono font-black text-[7rem] md:text-[9rem] lg:text-[11rem] leading-none text-foreground/5 uppercase tracking-tighter absolute -left-4 top-0 pointer-events-none"
            >
              ME
            </div>
            <div className="relative z-10 pt-4">
              <SectionTitle id="about-heading" label="// Who I Am" title="About Me" />

              {/* Bio */}
              <div className="flex flex-col gap-4 text-base md:text-lg font-medium text-foreground/80 leading-relaxed">
                {meta.bio.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Right — quote + timeline */}
          <div className="flex flex-col gap-8">
            {/* Quote card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4 }}
              className="border-2 border-foreground bg-primary shadow-[6px_6px_0px_#0A0A0A] p-6"
            >
              <p className="font-mono font-black text-xl md:text-2xl uppercase tracking-tight leading-tight">
                &ldquo;{meta.quote}&rdquo;
              </p>
            </motion.div>

            {/* Timeline */}
            <div>
              <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-foreground/50 mb-6">
                Career Milestones
              </h3>
              <ol className="relative border-l-2 border-foreground ml-4 flex flex-col gap-0">
                {milestones.map((m, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ delay: i * 0.08, duration: 0.35 }}
                    className="relative pl-6 pb-6 last:pb-0"
                  >
                    <span className="absolute -left-[9px] top-1 w-4 h-4 border-2 border-foreground bg-primary" />
                    <span className="font-mono font-black text-xs uppercase tracking-widest text-foreground/50">
                      {m.year}
                    </span>
                    <p className="font-mono font-bold text-base mt-0.5">
                      {m.label}
                    </p>
                  </motion.li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
