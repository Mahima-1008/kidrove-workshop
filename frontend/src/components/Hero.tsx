import { Button } from "./ui";

export function Hero() {
  return (
    <section className="pt-32 pb-20">
      <div className="kid-container">
        <div className="text-center max-w-4xl mx-auto">
          <span className="inline-block px-4 py-2 rounded-full bg-orange-100 text-orange-600 font-semibold text-sm">
            Summer 2026 Workshop
          </span>

          <h1 className="mt-6 text-5xl md:text-7xl font-bold">
            AI & Robotics
            <span className="gradient-text block">
              Summer Workshop
            </span>
          </h1>

          <p className="mt-6 text-lg text-[#6b7280] max-w-2xl mx-auto">
            Learn Artificial Intelligence, Robotics, Coding,
            Problem Solving and Future Technologies through
            exciting projects and interactive online sessions.
          </p>

          <div className="mt-10">
            <Button size="lg">
              Enroll Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}