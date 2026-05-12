import { cn } from "@/lib/utils";

interface SectionTitleProps {
  label: string;
  title: string;
  className?: string;
  id?: string;
}

export function SectionTitle({ label, title, className, id }: SectionTitleProps) {
  return (
    <div className={cn("mb-12", className)}>
      <span className="inline-block bg-primary border-2 border-foreground px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest mb-4">
        {label}
      </span>
      <h2 id={id} className="font-mono text-4xl md:text-5xl font-black uppercase tracking-tight leading-none">
        {title}
      </h2>
    </div>
  );
}
