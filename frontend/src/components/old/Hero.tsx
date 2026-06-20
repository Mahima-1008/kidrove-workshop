import { Button, Badge } from "../ui";
import { SearchIcon, PinIcon, StarIcon, ArrowRightIcon, ShieldIcon } from "../icons";

const floaties = [
  { emoji: "🎨", className: "left-[6%] top-[24%]", delay: "0s" },
  { emoji: "🚀", className: "right-[8%] top-[18%]", delay: "1.2s" },
  { emoji: "⚽", className: "left-[12%] bottom-[16%]", delay: "0.6s" },
  { emoji: "🦒", className: "right-[12%] bottom-[22%]", delay: "1.8s" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28"
    >
    
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, #fff0db 0%, #ffffff 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute -right-24 -top-24 -z-10 h-96 w-96 rounded-full opacity-40 blur-0"
        style={{ background: "radial-gradient(circle, #fde7f0 0%, transparent 70%)" }}
      />

      
      {floaties.map((f) => (
        <span
          key={f.emoji}
          aria-hidden
          className={`anim-float pointer-events-none absolute hidden text-4xl md:block ${f.className}`}
          style={{ animationDelay: f.delay }}
        >
          {f.emoji}
        </span>
      ))}

      <div className="kid-container">
        <div className="mx-auto max-w-3xl text-center">
          <div className="anim-slide-down mb-6 inline-flex">
            <Badge tone="primary">
              <StarIcon width={13} height={13} /> Trusted by 50,000+ UAE families
            </Badge>
          </div>

          <h1 className="anim-slide-up font-display text-[2.5rem] font-extrabold leading-[1.05] tracking-tight text-[#000000] sm:text-[3.5rem] md:text-[4.5rem]">
            Unforgettable days out,
            <br className="hidden sm:block" />{" "}
            <span className="gradient-text">made for kids</span>
          </h1>

          <p
            className="anim-slide-up mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#6b7280] md:text-lg"
            style={{ animationDelay: "0.08s" }}
          >
            Discover, compare and book thousands of vetted activities, camps and
            experiences near you — with instant confirmation and real parent
            reviews.
          </p>

          
          <div
            className="anim-scale-in mx-auto mt-10 max-w-2xl"
            style={{ animationDelay: "0.16s" }}
          >
            <div className="flex flex-col gap-2 rounded-[1.5rem] border border-[#374151]/15 bg-white p-2 shadow-[0_10px_20px_#00000026] sm:flex-row sm:items-center sm:rounded-full">
              <div className="flex flex-1 items-center gap-2 px-3">
                <SearchIcon className="text-[#6b7280]" />
                <input
                  className="w-full bg-transparent py-2.5 text-sm text-[#000000] placeholder:text-[#6b7280] focus:outline-none"
                  placeholder="Search activities, e.g. 'kayaking'"
                  aria-label="Search activities"
                />
              </div>
              <div className="hidden h-8 w-px bg-[#374151]/15 sm:block" />
              <div className="flex flex-1 items-center gap-2 px-3">
                <PinIcon className="text-[#6b7280]" />
                <input
                  className="w-full bg-transparent py-2.5 text-sm text-[#000000] placeholder:text-[#6b7280] focus:outline-none"
                  placeholder="Dubai, UAE"
                  aria-label="Location"
                />
              </div>
              <Button size="lg" className="sm:rounded-full">
                Search <ArrowRightIcon width={16} height={16} />
              </Button>
            </div>
          </div>

         
          <div
            className="anim-slide-up mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-[#6b7280]"
            style={{ animationDelay: "0.24s" }}
          >
            <span className="inline-flex items-center gap-1.5">
              <ShieldIcon width={16} height={16} className="text-[#16a34a]" />
              Safety-vetted partners
            </span>
            <span className="inline-flex items-center gap-1.5">
              <StarIcon width={14} height={14} className="text-[#f8962b]" />
              4.9 average rating
            </span>
            <span className="inline-flex items-center gap-1.5">
              ⚡ Instant confirmation
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
