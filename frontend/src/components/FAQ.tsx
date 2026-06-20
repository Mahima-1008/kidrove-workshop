import { useState } from "react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "🤔 Do I need coding experience?",
      answer:
        "No! This program is specially designed for beginners. We'll teach everything step by step.",
    },
    {
      question: "🎥 Will class recordings be available?",
      answer:
        "Yes! Every session is recorded so students can learn anytime and revise later.",
    },
    {
      question: "🏆 Will I receive a certificate?",
      answer:
        "Absolutely! Every student who completes the program receives a certificate.",
    },
    {
      question: "🤖 What projects will I build?",
      answer:
        "Students build AI projects, coding challenges, robotics activities and exciting technology creations.",
    },
    {
      question: "👦 What is the age group?",
      answer:
        "The program is designed for children aged 8–14 years.",
    },
    {
      question: "💻 How are classes conducted?",
      answer:
        "Classes are conducted online through live interactive sessions with mentors.",
    },
  ];

  return (
    <section
      id="faq"
      className="py-24 bg-gradient-to-b from-blue-50 to-purple-50"
    >
      <div className="container mx-auto px-6">

       
        <div className="text-center max-w-3xl mx-auto">

          <div className="inline-block bg-purple-200 text-purple-800 font-bold px-5 py-2 rounded-full">
            ❓ Frequently Asked Questions
          </div>

          <h2 className="mt-6 text-4xl md:text-5xl font-extrabold text-slate-900">
            Got Questions?
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            Here are some common questions from students and parents.
          </p>

        </div>

        
        <div className="max-w-4xl mx-auto mt-16 space-y-5">

          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="
                bg-white
                rounded-[25px]
                shadow-lg
                overflow-hidden
              "
            >
              <button
                type="button"
                onClick={() =>
                  setOpenIndex(
                    openIndex === index ? null : index
                  )
                }
                className="
                  w-full
                  p-6
                  flex
                  justify-between
                  items-center
                  text-left
                "
              >
                <span className="font-bold text-lg">
                  {faq.question}
                </span>

                <span className="text-2xl">
                  {openIndex === index ? "-" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}

        </div>

  
        <div className="mt-16 bg-white rounded-[35px] p-10 shadow-xl text-center max-w-3xl mx-auto">

          <div className="text-6xl">
            🚀
          </div>

          <h3 className="mt-4 text-3xl font-bold text-slate-900">
            Ready For The Adventure?
          </h3>

          <p className="mt-4 text-slate-600">
            Join hundreds of young innovators learning AI,
            Robotics and Coding in a fun and exciting way.
          </p>

          <a
            href="#register"
            className="
              inline-block
              mt-6
              px-8
              py-4
              bg-orange-500
              hover:bg-orange-600
              text-white
              font-bold
              rounded-2xl
              transition
            "
          >
            🎯 Register Now
          </a>

        </div>

      </div>
    </section>
  );
}