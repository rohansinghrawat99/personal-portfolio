"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { meta, stats } from "@/data/portfolio";
import { Button } from "@/components/ui/Button";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/SocialIcons";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen pt-32 pb-24 px-6 md:px-12 lg:px-20 max-w-5xl mx-auto flex items-center"
      aria-label="Hero"
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left */}
        <div className="flex flex-col gap-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
          >
            <span className="inline-block bg-primary border-2 border-foreground px-4 py-1.5 font-mono text-sm font-black uppercase tracking-widest shadow-[3px_3px_0px_#0A0A0A]">
              [ Full-Stack Engineer ]
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="font-mono font-black uppercase leading-none tracking-tight text-5xl md:text-6xl lg:text-7xl"
          >
            {meta.name.split(" ").map((word, i) => (
              <span key={i} className="block">
                {i === 1 ? (
                  <span className="relative inline-block">
                    <span className="relative z-10">{word}</span>
                    <span className="absolute inset-x-0 bottom-1 h-4 bg-primary -z-0" />
                  </span>
                ) : (
                  word
                )}
              </span>
            ))}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="text-lg md:text-xl font-medium text-foreground/80 max-w-md"
          >
            {meta.subTagline}
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="flex flex-wrap gap-3"
          >
            <a href="#projects">
              <Button variant="primary" size="lg">
                View My Work <ArrowRight size={16} className="ml-2" />
              </Button>
            </a>
            <a href={meta.resumeUrl} download>
              <Button variant="secondary" size="lg">
                <Download size={16} className="mr-2" /> Resume
              </Button>
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="flex items-center gap-4 pt-2"
          >
            <a
              href={meta.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="border-2 border-foreground p-2 hover:bg-primary transition-colors shadow-[2px_2px_0px_#0A0A0A]"
            >
              <GitHubIcon size={18} />
            </a>
            <a
              href={meta.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="border-2 border-foreground p-2 hover:bg-primary transition-colors shadow-[2px_2px_0px_#0A0A0A]"
            >
              <LinkedInIcon size={18} />
            </a>
            <a
              href={`mailto:${meta.email}`}
              aria-label="Email"
              className="border-2 border-foreground p-2 hover:bg-primary transition-colors shadow-[2px_2px_0px_#0A0A0A]"
            >
              <Mail size={18} />
            </a>
            <span className="font-mono text-sm text-foreground/50 ml-2">
              {meta.location}
            </span>
          </motion.div>
        </div>

        {/* Right — Stats card */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="hidden lg:block"
        >
          <div className="border-2 border-foreground bg-card-bg shadow-[8px_8px_0px_#0A0A0A] p-8">
            {/* Decorative grid */}
            <div className="grid grid-cols-5 gap-1.5 mb-8">
              {Array.from({ length: 25 }).map((_, i) => (
                <div
                  key={i}
                  aria-hidden="true"
                  className={`aspect-square border border-foreground/20 ${
                    [2, 6, 12, 18, 22].includes(i) ? "bg-primary" : "bg-muted"
                  }`}
                />
              ))}
            </div>

            <div className="grid grid-cols-2 gap-0">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className={`border-2 border-foreground p-4 ${
                    i % 2 === 0 ? "border-r-0" : ""
                  } ${i < 2 ? "border-b-0" : ""}`}
                >
                  <p className="font-mono font-black text-2xl md:text-3xl text-foreground">
                    {stat.value}
                  </p>
                  <p className="font-mono text-xs text-foreground/60 uppercase tracking-wide mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
