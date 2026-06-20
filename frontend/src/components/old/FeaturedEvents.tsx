import { events } from "../../lib/data";
import { SectionHeading, Reveal, Badge, Button } from "../ui";
import {
  StarIcon,
  PinIcon,
  ClockIcon,
  CalendarIcon,
  HeartIcon,
  UsersIcon,
} from "../icons";

export function FeaturedEvents() {
  return (
    <section id="events" className="bg-[#eff6ff] py-20 md:py-28">
      <div className="kid-container">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              align="left"
              eyebrow="Handpicked this week"
              title="Featured experiences"
              subtitle="Top-rated activities loved by families near you — book in seconds with free cancellation."
            />
            <Button variant="ghost" className="shrink-0">
              View all experiences
            </Button>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((e, i) => (
            <Reveal key={e.id} delay={(i % 3) * 80}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[1rem] border border-[#374151]/10 bg-white shadow-[0_1px_2px_#0000000d] transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_10px_20px_#00000026]">
                {/* Media */}
                <div
                  className="relative flex h-44 items-center justify-center overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${e.from} 0%, ${e.to} 100%)`,
                  }}
                >
                  <span className="text-6xl transition-transform duration-300 group-hover:scale-110">
                    {e.emoji}
                  </span>
                  {e.badge && (
                    <span className="absolute left-3 top-3">
                      <Badge tone="primary">{e.badge}</Badge>
                    </span>
                  )}
                  <button
                    aria-label="Save to favourites"
                    className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/95 text-[#6b7280] shadow-[0_2px_8px_#0000001a] transition-colors hover:text-[#f672a3]"
                  >
                    <HeartIcon width={18} height={18} />
                  </button>
                </div>

                
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wide text-[#e07d14]">
                      {e.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#000000]">
                      <StarIcon width={14} height={14} className="text-[#f8962b]" />
                      {e.rating}
                      <span className="font-normal text-[#6b7280]">
                        ({e.reviews})
                      </span>
                    </span>
                  </div>

                  <h3 className="mt-2 text-lg font-bold leading-snug text-[#000000]">
                    {e.title}
                  </h3>

                  <div className="mt-3 space-y-1.5 text-sm text-[#6b7280]">
                    <p className="flex items-center gap-2">
                      <PinIcon width={15} height={15} /> {e.location}
                    </p>
                    <p className="flex items-center gap-2">
                      <CalendarIcon width={15} height={15} /> {e.date}
                      <span className="text-[#374151]/30">•</span>
                      <ClockIcon width={15} height={15} /> {e.duration}
                    </p>
                    <p className="flex items-center gap-2">
                      <UsersIcon width={15} height={15} /> Ages {e.ageRange}
                    </p>
                  </div>

                  <div className="mt-5 flex items-end justify-between border-t border-[#374151]/10 pt-4">
                    <div>
                      <span className="text-xs text-[#6b7280]">From</span>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-xl font-bold text-[#000000]">
                          AED {e.price}
                        </span>
                        {e.oldPrice && (
                          <span className="text-sm text-[#6b7280] line-through">
                            {e.oldPrice}
                          </span>
                        )}
                      </div>
                    </div>
                    <Button>Book now</Button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
