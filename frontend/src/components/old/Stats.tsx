import { Reveal } from "./ui";

const stats = [
  { value: "12,000+", label: "Activities & experiences" },
  { value: "50k", label: "Happy families" },
  { value: "1,400", label: "Vetted partners" },
  { value: "4.9★", label: "Average rating" },
];

export function Stats() {
  return (
    <section className="py-6">
      <div className="kid-container">
        <Reveal>
          <div
            className="overflow-hidden rounded-[1.5rem] px-6 py-10 md:px-12 md:py-12"
            style={{
              background:
                "linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)",
            }}
          >
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-display text-3xl font-extrabold text-white md:text-4xl">
                    {s.value}
                  </div>
                  <div className="mt-1 text-sm font-medium text-white/85">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
