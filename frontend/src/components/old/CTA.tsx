import { useState } from "react";
import { Reveal, Button } from "./ui";
import { MailIcon, CheckIcon } from "./icons";

export function CTA() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setDone(true);
    setEmail("");
  };

  return (
    <section className="py-20 md:py-28">
      <div className="kid-container">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-[#374151]/12 bg-white px-6 py-12 text-center shadow-[0_4px_6px_#0000001a] md:px-12 md:py-16">
            <div
              className="pointer-events-none absolute inset-0 -z-10"
              style={{
                background:
                  "radial-gradient(70% 80% at 50% 0%, #fff0db 0%, #ffffff 65%)",
              }}
            />
            <span
              aria-hidden
              className="anim-float absolute left-[8%] top-10 hidden text-3xl md:block"
            >
              🎈
            </span>
            <span
              aria-hidden
              className="anim-float absolute right-[10%] bottom-10 hidden text-3xl md:block"
              style={{ animationDelay: "1.4s" }}
            >
              ⭐
            </span>

            <h2 className="mx-auto max-w-2xl font-display text-[2rem] font-extrabold leading-tight text-[#000000] md:text-[2.75rem]">
              Never run out of <span className="gradient-text">things to do</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-[#6b7280]">
              Get a weekly handpicked edit of the best new activities near you,
              plus members-only early access and offers.
            </p>

            {done ? (
              <div className="mx-auto mt-8 inline-flex items-center gap-2 rounded-full bg-[#dcfce7] px-5 py-3 text-sm font-semibold text-[#16a34a]">
                <CheckIcon width={18} height={18} /> You're on the list — check
                your inbox!
              </div>
            ) : (
              <form
                onSubmit={submit}
                className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
              >
                <div className="flex flex-1 items-center gap-2 rounded-[1rem] border border-[#374151]/20 bg-white px-3 focus-within:border-[#e07d14]">
                  <MailIcon width={18} height={18} className="text-[#6b7280]" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@email.com"
                    aria-label="Email address"
                    className="w-full bg-transparent py-3 text-sm text-[#000000] placeholder:text-[#6b7280] focus:outline-none"
                  />
                </div>
                <Button type="submit" size="lg" className="sm:px-7">
                  Subscribe
                </Button>
              </form>
            )}
            <p className="mt-4 text-xs text-[#6b7280]">
              No spam, ever. Unsubscribe anytime.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
