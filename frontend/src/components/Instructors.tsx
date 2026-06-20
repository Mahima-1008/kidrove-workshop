import HeroImage from "../assets/robot-mentor.jpg";

export function Instructor() {
  return (
    <section
      id="instructor"
      className="py-24 bg-gradient-to-b from-yellow-50 to-orange-50"
    >
      <div className="container mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block bg-orange-200 text-orange-800 font-bold px-5 py-2 rounded-full">
            👨‍🏫 Meet Your Mentor
          </div>

          <h2 className="mt-6 text-4xl md:text-5xl font-extrabold text-slate-900">
            Learn From Industry Experts
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            Our mentors make AI, Robotics and Coding fun, easy,
            and exciting for young learners.
          </p>
        </div>

      
        <div className="grid lg:grid-cols-2 gap-16 items-center mt-16">

         
          <div className="relative flex justify-center">

            <div className="absolute w-[400px] h-[400px] bg-orange-300 rounded-full opacity-20 blur-3xl"></div>

            <img
              src={HeroImage}
              alt="Instructor"
              className="relative z-10 max-w-lg rounded-3xl w-full"
            />

          </div>

       
          <div>

            <div className="bg-white rounded-[35px] p-8 shadow-xl">

              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center text-4xl">
                  👨‍💻
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-slate-900">
                    AI & Robotics Mentor
                  </h3>

                  <p className="text-slate-500">
                    Technology Educator
                  </p>
                </div>
              </div>

              <p className="mt-6 text-slate-600 leading-relaxed">
                Our mentors help students explore the world of
                Artificial Intelligence, Robotics, Coding and
                Innovation through engaging projects, games and
                hands-on activities.
              </p>

              <div className="mt-8 space-y-4">

                <div className="flex items-center gap-3">
                  <span className="text-2xl">🤖</span>
                  <span>AI & Robotics Specialist</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-2xl">💻</span>
                  <span>Programming Expert</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-2xl">🚀</span>
                  <span>Project-Based Learning</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-2xl">🏆</span>
                  <span>Student Success Focused</span>
                </div>

              </div>
            </div>

          </div>

        </div>

       
        <div className="grid md:grid-cols-4 gap-6 mt-16">

          <div className="bg-blue-500 text-white rounded-[30px] p-6 text-center shadow-xl">
            <div className="text-5xl">👨‍🏫</div>
            <h3 className="mt-4 text-3xl font-bold">
              500+
            </h3>
            <p>Students Guided</p>
          </div>

          <div className="bg-green-500 text-white rounded-[30px] p-6 text-center shadow-xl">
            <div className="text-5xl">🤖</div>
            <h3 className="mt-4 text-3xl font-bold">
              25+
            </h3>
            <p>Projects Built</p>
          </div>

          <div className="bg-orange-500 text-white rounded-[30px] p-6 text-center shadow-xl">
            <div className="text-5xl">🚀</div>
            <h3 className="mt-4 text-3xl font-bold">
              4
            </h3>
            <p>Weeks of Learning</p>
          </div>

          <div className="bg-purple-500 text-white rounded-[30px] p-6 text-center shadow-xl">
            <div className="text-5xl">🏆</div>
            <h3 className="mt-4 text-3xl font-bold">
              100%
            </h3>
            <p>Certificate Included</p>
          </div>

        </div>

      </div>
    </section>
  );
}