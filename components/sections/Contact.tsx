"use client";

import { useActionState, useEffect, useRef } from "react";
import { Mail, Send } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/SocialIcons";
import { motion } from "framer-motion";
import { meta } from "@/data/portfolio";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { sendContactEmail, type ContactFormState } from "@/app/actions/contact";

const initial: ContactFormState = { status: "idle" };

export function Contact() {
  const [state, action, pending] = useActionState(sendContactEmail, initial);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") formRef.current?.reset();
  }, [state.status]);

  const fieldError = (key: string) =>
    state.status === "error" ? state.errors[key]?.[0] : undefined;

  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-12 lg:px-20 bg-foreground text-background"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Left — CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="flex flex-col gap-6"
        >
          <SectionTitle
            id="contact-heading"
            label="// Get In Touch"
            title={`Let's Build\nSomething.`}
            className="[&_h2]:text-background [&_span]:text-foreground [&_span]:bg-primary"
          />
          <p className="text-background/70 font-medium text-lg leading-relaxed max-w-sm">
            Open to full-time roles, freelance projects, and interesting collaborations.
          </p>

          <a
            href={`mailto:${meta.email}`}
            className="inline-flex items-center gap-3 border-2 border-background bg-primary text-foreground px-5 py-3 font-mono font-black uppercase tracking-wide text-sm shadow-[4px_4px_0px_#FFE500] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#FFE500] transition-all duration-150 w-fit"
          >
            <Mail size={16} />
            {meta.email}
          </a>

          <div className="flex items-center gap-4 pt-2">
            <a
              href={meta.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="border-2 border-background p-2 hover:bg-primary hover:border-primary hover:text-foreground transition-colors"
            >
              <GitHubIcon size={18} />
            </a>
            <a
              href={meta.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="border-2 border-background p-2 hover:bg-primary hover:border-primary hover:text-foreground transition-colors"
            >
              <LinkedInIcon size={18} />
            </a>
          </div>
        </motion.div>

        {/* Right — Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.15, duration: 0.45 }}
        >
          <form ref={formRef} action={action} className="flex flex-col gap-4" noValidate>
            <Field
              label="Name"
              name="name"
              type="text"
              placeholder="Your name"
              error={fieldError("name")}
              required
            />
            <Field
              label="Email"
              name="email"
              type="email"
              placeholder="your@email.com"
              error={fieldError("email")}
              required
            />
            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="font-mono text-xs font-bold uppercase tracking-widest text-background/60">
                Message <span aria-hidden>*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="What are you working on?"
                aria-describedby={fieldError("message") ? "message-error" : undefined}
                className="w-full border-2 border-background bg-transparent text-background placeholder:text-background/30 px-4 py-3 font-mono text-sm resize-none focus:outline-none focus:border-primary transition-colors"
              />
              {fieldError("message") && (
                <p id="message-error" role="alert" className="font-mono text-xs text-secondary">
                  {fieldError("message")}
                </p>
              )}
            </div>

            {state.status === "success" && (
              <p role="status" className="font-mono text-sm font-bold text-primary border-2 border-primary px-4 py-2">
                Message sent! I&apos;ll get back to you soon.
              </p>
            )}
            {state.status === "server-error" && (
              <p role="alert" className="font-mono text-sm font-bold text-secondary border-2 border-secondary px-4 py-2">
                {state.message}
              </p>
            )}

            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={pending}
              className="w-full"
            >
              {pending ? "Sending..." : <>Send It <Send size={14} className="ml-2" /></>}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type,
  placeholder,
  error,
  required,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  error?: string;
  required?: boolean;
}) {
  const errorId = `${name}-error`;
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="font-mono text-xs font-bold uppercase tracking-widest text-background/60">
        {label} {required && <span aria-hidden>*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        aria-describedby={error ? errorId : undefined}
        className="w-full border-2 border-background bg-transparent text-background placeholder:text-background/30 px-4 py-3 font-mono text-sm focus:outline-none focus:border-primary transition-colors"
      />
      {error && (
        <p id={errorId} role="alert" className="font-mono text-xs text-secondary">
          {error}
        </p>
      )}
    </div>
  );
}
