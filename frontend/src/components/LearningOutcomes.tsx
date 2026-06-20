export function LearningOutcomes() {
  const outcomes = [
    "Understand AI fundamentals",
    "Build simple robotics projects",
    "Learn programming logic",
    "Improve problem solving skills",
    "Work on real-world mini projects",
    "Develop teamwork and creativity",
  ];

  return (
    <section className="py-20">
      <div className="kid-container max-w-4xl">
        <h2 className="text-4xl font-bold text-center">
          Learning Outcomes
        </h2>

        <div className="mt-12 space-y-4">
          {outcomes.map((item) => (
            <div
              key={item}
              className="p-5 rounded-xl border"
            >
              ✅ {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}