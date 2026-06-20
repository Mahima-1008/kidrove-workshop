import { Button } from "./ui";
import HeroImage from "../assets/robot-pic.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 pt-40 pb-24">
      
      {/* Background Shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-pink-300/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>

            <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/15 text-white text-sm font-semibold border border-white/20">
              Summer 2026 Program
            </span>

            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              Build AI,
              <span className="block text-yellow-300">
                Robotics &
              </span>
              Future Tech Skills
            </h1>

            <p className="mt-6 text-lg text-blue-100 max-w-xl leading-relaxed">
              An exciting 4-week learning experience where students
              explore Artificial Intelligence, Robotics, Coding,
              Automation and Problem Solving through interactive
              projects and live sessions.
            </p>

            {/* Highlights */}
            <div className="mt-8 flex flex-wrap gap-3">

              <div className="bg-white text-slate-800 px-4 py-2 rounded-full text-sm font-medium shadow">
                AI Projects
              </div>

              <div className="bg-white text-slate-800 px-4 py-2 rounded-full text-sm font-medium shadow">
                Robotics
              </div>

              <div className="bg-white text-slate-800 px-4 py-2 rounded-full text-sm font-medium shadow">
                Coding
              </div>

              <div className="bg-white text-slate-800 px-4 py-2 rounded-full text-sm font-medium shadow">
                Certificate Included
              </div>

            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">

              <a href="#register">
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold"
                >
                  Register Now
                </Button>
              </a>

              <a href="#overview">
                <Button
                  size="lg"
                  className="bg-white text-slate-900 hover:bg-slate-100"
                >
                  Learn More
                </Button>
              </a>

            </div>

            {/* Stats */}
            <div className="mt-12 flex flex-wrap gap-10">

              <div>
                <div className="text-3xl font-bold text-white">
                  500+
                </div>
                <div className="text-blue-100 text-sm">
                  Students Trained
                </div>
              </div>

              <div>
                <div className="text-3xl font-bold text-white">
                  25+
                </div>
                <div className="text-blue-100 text-sm">
                  Projects Built
                </div>
              </div>

              <div>
                <div className="text-3xl font-bold text-white">
                  4 Weeks
                </div>
                <div className="text-blue-100 text-sm">
                  Live Learning
                </div>
              </div>

            </div>

          </div>

          {/* Right Image */}
          <div className="relative flex justify-center">

            <div className="absolute w-[420px] h-[420px] bg-yellow-300/20 rounded-full blur-3xl"></div>

            <img
              src={HeroImage}
              alt="AI & Robotics Summer Program"
              className="relative z-10 w-full max-w-lg rounded-3xl drop-shadow-2xl"
            />

          </div>

        </div>
      </div>
    </section>
  );
}