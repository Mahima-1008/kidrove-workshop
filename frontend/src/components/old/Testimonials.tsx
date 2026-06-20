import { testimonials } from "../lib/data";
import { SectionHeading, Reveal } from "./ui";
import { StarIcon, QuoteIcon } from "./icons";

export function Testimonials() {
  return (
    <section id="reviews" className="bg-[#eff6ff] py-20 md:py-28">
      <div className="kid-container">
        <Reveal>
          <SectionHeading
            eyebrow="Loved by parents"
            title="Families plan their weekends here"
            subtitle="Join tens of thousands of parents who trust kidrove to find safe, joyful experiences their kids remember."
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.id} delay={i * 90}>
              <figure className="flex h-full flex-col rounded-[1rem] border border-[#374151]/10 bg-white p-6 shadow-[0_1px_2px_#0000000d]">
                <div
                  className="mb-4"
                  style={{ color: t.tint }}
                  aria-hidden
                >
                  <QuoteIcon />
                </div>
                <div className="mb-4 flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <StarIcon
                      key={s}
                      width={16}
                      height={16}
                      className="text-[#f8962b]"
                    />
                  ))}
                </div>
                <blockquote className="flex-1 text-[15px] leading-relaxed text-[#1f2937]">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-[#374151]/10 pt-4">
                  <span
                    className="grid h-11 w-11 place-items-center rounded-full text-sm font-bold text-white"
                    style={{ backgroundColor: t.tint }}
                  >
                    {t.initials}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-[#000000]">
                      {t.name}
                    </span>
                    <span className="block text-xs text-[#6b7280]">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
