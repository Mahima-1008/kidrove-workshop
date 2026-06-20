export function FAQ() {
  const faqs = [
    {
      question: "Do students need prior coding experience?",
      answer:
        "No. The workshop is beginner friendly."
    },
    {
      question: "Will recordings be available?",
      answer:
        "Yes. Students can access recordings after each session."
    },
    {
      question: "Will certificates be provided?",
      answer:
        "Yes. Every participant receives a certificate."
    }
  ];

  return (
    <section className="py-20 bg-[#eff6ff]">
      <div className="kid-container max-w-4xl">
        <h2 className="text-4xl font-bold text-center">
          Frequently Asked Questions
        </h2>

        <div className="mt-10 space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="bg-white rounded-xl p-6 shadow"
            >
              <h3 className="font-bold">
                {faq.question}
              </h3>

              <p className="mt-2 text-gray-600">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}