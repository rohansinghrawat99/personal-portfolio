"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/portfolio";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6 md:px-12 lg:px-20 relative overflow-hidden"
      aria-labelledby="skills-heading"
    >
      {/* Decorative background text */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute -right-8 top-1/2 -translate-y-1/2 font-mono font-black text-[10rem] md:text-[14rem] uppercase text-foreground/[0.03] leading-none"
      >
        SKILLS
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <SectionTitle id="skills-heading" label="// What I Know" title="Skills" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-2 border-foreground">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
              className={`p-6 border-foreground ${
                i % 3 !== 2 ? "border-r-2" : ""
              } ${i < skillCategories.length - 3 ? "border-b-2" : ""} ${
                i < skillCategories.length - (skillCategories.length % 3 || 3) ? "border-b-2" : ""
              }`}
            >
              <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-foreground/50 mb-4">
                {cat.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="border-2 border-foreground bg-card-bg px-2.5 py-1 font-mono text-xs font-bold uppercase tracking-wide cursor-default transition-all duration-100 hover:bg-primary hover:scale-105"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
