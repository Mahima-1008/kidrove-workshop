export function WorkshopDetails() {
  const details = [
    {
      icon: "🧒",
      title: "Age Group",
      value: "8 - 14 Years",
      color: "bg-pink-100",
    },
    {
      icon: "📅",
      title: "Duration",
      value: "4 Weeks",
      color: "bg-blue-100",
    },
    {
      icon: "💻",
      title: "Mode",
      value: "Online",
      color: "bg-green-100",
    },
    {
      icon: "💰",
      title: "Fee",
      value: "₹2,999",
      color: "bg-yellow-100",
    },
    {
      icon: "🚀",
      title: "Start Date",
      value: "15 July 2026",
      color: "bg-purple-100",
    },
  ];

  const features = [
    "🤖 Build AI Projects",
    "🚀 Create Robotics Models",
    "💻 Learn Coding Basics",
    "🧠 Improve Problem Solving",
    "🏆 Internship Certificate",
    "🎯 Fun Live Activities",
  ];

  return (
    <section
      id="overview"
      className="py-24 bg-[#FFF8E7]"
    >
      <div className="container mx-auto px-6">

      
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block bg-orange-200 text-orange-700 font-bold px-5 py-2 rounded-full">
            🚀 Workshop Overview
          </div>

          <h2 className="mt-6 text-4xl md:text-5xl font-extrabold text-slate-900">
            AI & Robotics Summer Adventure
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            Join an exciting learning journey where kids build
            robots, explore Artificial Intelligence, learn coding,
            and create amazing technology projects.
          </p>
        </div>

       
        <div className="grid md:grid-cols-5 gap-6 mt-14">
          {details.map((item) => (
            <div
              key={item.title}
              className="
                bg-white
                rounded-[30px]
                p-6
                shadow-xl
                border-4
                border-white
                hover:scale-105
                transition
                text-center
              "
            >
              <div
                className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center text-3xl ${item.color}`}
              >
                {item.icon}
              </div>

              <h3 className="mt-4 text-sm font-bold uppercase text-slate-500">
                {item.title}
              </h3>

              <p className="mt-2 text-xl font-extrabold text-slate-900">
                {item.value}
              </p>
            </div>
          ))}
        </div>

      
        <div className="mt-16 bg-white rounded-[35px] p-10 shadow-xl">

          <h3 className="text-3xl font-bold text-center text-slate-900">
            🎉 What Kids Will Experience
          </h3>

          <div className="grid md:grid-cols-3 gap-5 mt-10">
            {features.map((feature) => (
              <div
                key={feature}
                className="
                  bg-gradient-to-r
                  from-blue-50
                  to-purple-50
                  rounded-2xl
                  p-5
                  font-semibold
                  text-slate-700
                  shadow
                "
              >
                {feature}
              </div>
            ))}
          </div>
        </div>

        
        <div className="grid md:grid-cols-3 gap-6 mt-14">

          <div className="bg-blue-500 text-white rounded-[30px] p-8 text-center shadow-xl">
            <div className="text-5xl">🤖</div>
            <h3 className="mt-4 text-4xl font-bold">
              25+
            </h3>
            <p className="mt-2">
              Fun Projects
            </p>
          </div>

          <div className="bg-orange-500 text-white rounded-[30px] p-8 text-center shadow-xl">
            <div className="text-5xl">🧠</div>
            <h3 className="mt-4 text-4xl font-bold">
              500+
            </h3>
            <p className="mt-2">
              Happy Learners
            </p>
          </div>

          <div className="bg-green-500 text-white rounded-[30px] p-8 text-center shadow-xl">
            <div className="text-5xl">🏆</div>
            <h3 className="mt-4 text-4xl font-bold">
              100%
            </h3>
            <p className="mt-2">
              Certificate Included
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}