export function Testimonials() {
  const testimonials = [
    {
      name: "Aarav",
      age: "10 Years",
      emoji: "👦",
      review:
        "I loved building AI projects and learning how robots work. The classes were super fun!",
      color: "bg-blue-100",
    },
    {
      name: "Diya",
      age: "12 Years",
      emoji: "👧",
      review:
        "The coding challenges were my favorite part. I can't wait to build more projects!",
      color: "bg-pink-100",
    },
    {
      name: "Vihaan",
      age: "11 Years",
      emoji: "🧒",
      review:
        "I learned AI, robotics and coding in a very easy way. The mentors were amazing.",
      color: "bg-green-100",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-pink-50 to-blue-50">
      <div className="container mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block bg-pink-200 text-pink-800 font-bold px-5 py-2 rounded-full">
            ⭐ Student Reviews
          </div>

          <h2 className="mt-6 text-4xl md:text-5xl font-extrabold text-slate-900">
            What Young Innovators Say
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            Hear from students who explored AI, Robotics and Coding
            through exciting projects and fun learning experiences.
          </p>
        </div>

     
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="
                bg-white
                rounded-[35px]
                p-8
                shadow-xl
                hover:scale-105
                transition
              "
            >
              <div
                className={`w-20 h-20 rounded-full flex items-center justify-center text-4xl ${item.color}`}
              >
                {item.emoji}
              </div>

              <div className="mt-5 text-yellow-500 text-xl">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="mt-5 text-slate-600 leading-relaxed">
                "{item.review}"
              </p>

              <div className="mt-6">
                <h4 className="font-bold text-lg text-slate-900">
                  {item.name}
                </h4>

                <p className="text-slate-500">
                  {item.age}
                </p>
              </div>
            </div>
          ))}
        </div>

      
        <div className="grid md:grid-cols-3 gap-6 mt-16">

          <div className="bg-yellow-400 rounded-[30px] p-8 text-center shadow-xl">
            <div className="text-5xl">⭐</div>
            <h3 className="mt-4 text-4xl font-bold">
              4.9/5
            </h3>
            <p className="font-semibold">
              Student Rating
            </p>
          </div>

          <div className="bg-blue-500 text-white rounded-[30px] p-8 text-center shadow-xl">
            <div className="text-5xl">👨‍🏫</div>
            <h3 className="mt-4 text-4xl font-bold">
              500+
            </h3>
            <p>
              Happy Learners
            </p>
          </div>

          <div className="bg-green-500 text-white rounded-[30px] p-8 text-center shadow-xl">
            <div className="text-5xl">🏆</div>
            <h3 className="mt-4 text-4xl font-bold">
              100%
            </h3>
            <p>
              Certificate Earned
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}