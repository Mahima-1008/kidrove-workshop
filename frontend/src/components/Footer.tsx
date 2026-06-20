import { MailIcon, PhoneIcon, PinIcon } from "./icons";

const columns = [
  {
    title: "Explore",
    links: ["Adventure & Outdoor", "Arts & Crafts", "Sports & Active", "Science & STEM", "Camps & Classes"],
  },
  {
    title: "Company",
    links: ["About us", "Careers", "Press", "Partners", "Blog"],
  },
  {
    title: "Support",
    links: ["Help centre", "Safety & trust", "Cancellations", "Contact us", "FAQs"],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-[#374151]/12 bg-white">
      <div className="kid-container py-14">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
         
          <div className="col-span-2">
            <a href="#top" className="flex items-center gap-2">
              <span
                className="grid h-9 w-9 place-items-center rounded-[0.75rem] text-lg font-bold text-white"
                style={{
                  background:
                    "linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)",
                }}
              >
                k
              </span>
              <span className="font-display text-xl font-bold tracking-tight text-[#000000]">
                kidrove
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#6b7280]">
              The friendliest way to discover and book unforgettable experiences
              for kids across the UAE.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-[#6b7280]">
              <li className="flex items-center gap-2">
                <MailIcon width={16} height={16} /> hello@kidrove.com
              </li>
              <li className="flex items-center gap-2">
                <PhoneIcon width={16} height={16} /> +971 4 000 0000
              </li>
              <li className="flex items-center gap-2">
                <PinIcon width={16} height={16} /> Dubai, United Arab Emirates
              </li>
            </ul>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-bold text-[#000000]">{col.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-[#6b7280] transition-colors hover:text-[#000000]"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#374151]/12 pt-6 sm:flex-row">
          <p className="text-xs text-[#6b7280]">
            © {new Date().getFullYear()} kidrove. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-xs text-[#6b7280]">
            <a href="#" className="transition-colors hover:text-[#000000]">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-[#000000]">
              Terms
            </a>
            <a href="#" className="transition-colors hover:text-[#000000]">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
