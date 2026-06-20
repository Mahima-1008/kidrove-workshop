import { categories } from "../lib/data";
import { SectionHeading, Reveal } from "./ui";
import { ArrowRightIcon } from "./icons";

export function Categories() {
  return (
    <section id="categories" className="py-20 md:py-28">
      <div className="kid-container">
        <Reveal>
          <SectionHeading
            eyebrow="Browse by interest"
            title={<>What will they love today?</>}
            subtitle="From rocket science to rock climbing — explore curated categories built around how kids actually like to play and learn."
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {categories.map((c, i) => (
            <Reveal key={c.id} delay={i * 50}>
              <a
                href="#events"
                className="group block h-full rounded-[1rem] border border-[#374151]/12 bg-white p-5 shadow-[0_1px_2px_#0000000d] transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[#374151]/25 hover:shadow-[0_10px_20px_#00000026]"
              >
                <span
                  className="grid h-14 w-14 place-items-center rounded-[0.75rem] text-2xl transition-transform duration-200 group-hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, ${c.from} 0%, ${c.to} 100%)`,
                  }}
                >
                  {c.emoji}
                </span>
                <h3 className="mt-4 text-[15px] font-semibold leading-snug text-[#000000]">
                  {c.name}
                </h3>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-xs text-[#6b7280]">
                    {c.count} experiences
                  </span>
                  <ArrowRightIcon
                    width={16}
                    height={16}
                    className="text-[#6b7280] transition-all duration-200 group-hover:translate-x-1 group-hover:text-[#e07d14]"
                  />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
