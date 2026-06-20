import type { ButtonHTMLAttributes, ReactNode } from "react";
import { useReveal } from "../hooks/useReveal";


type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost" | "soft";
  size?: "md" | "lg";
};

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}: ButtonProps) {
  const sizes =
    size === "lg" ? "px-6 py-3 text-[15px]" : "px-4 py-2 text-sm";

  const variants: Record<string, string> = {
    primary:
      "text-white shadow-[0_4px_6px_#0000001a] hover:-translate-y-0.5 hover:shadow-[0_10px_20px_#00000026]",
    ghost:
      "bg-transparent border border-[#374151] text-[#000000] hover:bg-[#eff6ff]",
    soft: "bg-[#fff0db] text-[#bb6210] hover:bg-[#ffddb3]",
  };

  const primaryStyle =
    variant === "primary"
      ? { background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)" }
      : undefined;

  return (
    <button
      {...rest}
      style={{ ...primaryStyle, ...rest.style }}
      className={`inline-flex items-center justify-center gap-2 rounded-[1rem] font-semibold transition-all duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2 ${sizes} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}


export function Badge({
  children,
  tone = "neutral",
  className = "",
}: {
  children: ReactNode;
  tone?: "neutral" | "primary" | "accent" | "success";
  className?: string;
}) {
  const tones: Record<string, string> = {
    neutral: "bg-[#eff6ff] text-[#6b7280]",
    primary: "bg-[#fff0db] text-[#bb6210]",
    accent: "bg-[#fde7f0] text-[#db2777]",
    success: "bg-[#dcfce7] text-[#16a34a]",
  };
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}


export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "center" | "left";
}) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow && (
        <span className="inline-block text-xs font-bold uppercase tracking-[0.14em] text-[#e07d14] mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="text-[2rem] md:text-[2.75rem] font-bold text-[#000000]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-[15px] leading-relaxed text-[#6b7280]">
          {subtitle}
        </p>
      )}
    </div>
  );
}


export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
