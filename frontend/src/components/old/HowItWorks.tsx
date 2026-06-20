import { SectionHeading, Reveal } from "../ui";
import { SearchIcon, TicketIcon, SparkIcon } from "../icons";

const steps = [
  {
    icon: SearchIcon,
    title: "Discover",
    text: "Filter thousands of vetted activities by age, interest, date and location to find the perfect match.",
    from: "#fb923c",
    to: "#f97316",
  },
  {
    icon: TicketIcon,
    title: "Book instantly",
    text: "Secure your spot in seconds with instant confirmation, transparent pricing and free cancellation.",
    from: "#f672a3",
    to: "#db2777",
  },
  {
    icon: SparkIcon,
    title: "Make memories",
    text: "Show up and play. Then share a review to help other families discover their next adventure.",
    from: "#a78bfa",
    to: "#7e3899",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="py-20 md:py-28">
      <div className="kid-container">
        <Reveal>
          <SectionHeading
            eyebrow="Simple by design"
            title="Three taps to a brilliant day out"
            subtitle="We've stripped the hassle out of planning so you can spend less time organising and more time playing."
          />
        </Reveal>

        <div className="relative mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
         
          <div
            className="pointer-events-none absolute left-0 right-0 top-9 hidden h-px md:block"
            style={{
              background:
                "repeating-linear-gradient(90deg, #374151 0 6px, transparent 6px 14px)",
              opacity: 0.2,
            }}
          />
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 120}>
              <div className="relative flex flex-col items-center text-center">
                <div
                  className="relative grid h-18 w-18 place-items-center rounded-[1.5rem] text-white shadow-[0_4px_6px_#0000001a]"
                  style={{
                    height: 72,
                    width: 72,
                    background: `linear-gradient(135deg, ${s.from} 0%, ${s.to} 100%)`,
                  }}
                >
                  <s.icon width={28} height={28} />
                  <span className="absolute -right-2 -top-2 grid h-7 w-7 place-items-center rounded-full bg-white text-sm font-bold text-[#000000] shadow-[0_2px_8px_#0000001a]">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-bold text-[#000000]">
                  {s.title}
                </h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-[#6b7280]">
                  {s.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
