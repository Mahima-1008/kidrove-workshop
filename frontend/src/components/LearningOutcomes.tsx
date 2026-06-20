import HeroImage from "../assets/robot-kid.jpg";

export function LearningOutcomes() {
  const outcomes = [
    {
      icon: "🤖",
      title: "Build AI Bots",
      description:
        "Create smart AI projects and learn how Artificial Intelligence works.",
      color: "bg-blue-100",
    },
    {
      icon: "🚀",
      title: "Create Robots",
      description:
        "Design and understand robotics systems through fun activities.",
      color: "bg-orange-100",
    },
    {
      icon: "💻",
      title: "Learn Coding",
      description:
        "Master programming logic using beginner-friendly coding lessons.",
      color: "bg-green-100",
    },
    {
      icon: "🧠",
      title: "Think Like an Inventor",
      description:
        "Develop creativity, innovation, and critical thinking skills.",
      color: "bg-purple-100",
    },
    {
      icon: "⚡",
      title: "Solve Challenges",
      description:
        "Work on exciting missions and real-world technology problems.",
      color: "bg-yellow-100",
    },
    {
      icon: "🏆",
      title: "Earn a Certificate",
      description:
        "Receive an internship completion certificate and showcase your skills.",
      color: "bg-pink-100",
    },
  ];

  return (
    <section
      id="outcomes"
      className="py-24 bg-gradient-to-b from-green-50 to-blue-50"
    >
      <div className="container mx-auto px-6">

     
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block bg-green-200 text-green-800 font-bold px-5 py-2 rounded-full">
            🎯 Learning Missions
          </div>

          <h2 className="mt-6 text-4xl md:text-5xl font-extrabold text-slate-900">
            What Young Innovators Will Learn
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            Every student will complete exciting technology missions,
            build projects, and develop future-ready skills.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-center mt-16">

          
          <div className="grid sm:grid-cols-2 gap-6">
            {outcomes.map((item) => (
              <div
                key={item.title}
                className="
                  bg-white
                  rounded-[28px]
                  p-6
                  shadow-xl
                  hover:scale-105
                  transition
                "
              >
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl ${item.color}`}
                >
                  {item.icon}
                </div>

                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

         
          <div className="relative flex justify-center">

            <div className="absolute w-[400px] h-[400px] bg-yellow-300 rounded-full opacity-20 blur-3xl"></div>

            <img
              src={HeroImage}
              alt="Learning AI and Robotics"
              className="relative z-10 max-w-lg rounded-3xl w-full"
            />

          </div>

        </div>

        <div className="mt-20 bg-white rounded-[35px] p-10 shadow-xl">

          <h3 className="text-3xl font-bold text-center text-slate-900">
            🌟 By The End Of The Program
          </h3>

          <div className="grid md:grid-cols-4 gap-6 mt-10">

            <div className="bg-blue-500 text-white rounded-3xl p-6 text-center">
              <div className="text-4xl">🤖</div>
              <h4 className="mt-3 font-bold">
                AI Projects
              </h4>
            </div>

            <div className="bg-orange-500 text-white rounded-3xl p-6 text-center">
              <div className="text-4xl">🚀</div>
              <h4 className="mt-3 font-bold">
                Robotics Skills
              </h4>
            </div>

            <div className="bg-green-500 text-white rounded-3xl p-6 text-center">
              <div className="text-4xl">💻</div>
              <h4 className="mt-3 font-bold">
                Coding Knowledge
              </h4>
            </div>

            <div className="bg-purple-500 text-white rounded-3xl p-6 text-center">
              <div className="text-4xl">🏆</div>
              <h4 className="mt-3 font-bold">
                Certificate
              </h4>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}