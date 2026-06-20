export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white">

      <div className="container mx-auto px-6 py-16">

        
        <div className="grid md:grid-cols-3 gap-10">

          
          <div>
            <div className="flex items-center gap-3">
              <div className="text-5xl">
                🤖
              </div>

              <div>
                <h2 className="text-3xl font-extrabold">
                  Kidrove
                </h2>

                <p className="text-blue-100">
                  AI & Robotics Summer Adventure
                </p>
              </div>
            </div>

            <p className="mt-5 text-blue-100 leading-relaxed">
              Inspiring young innovators to explore Artificial
              Intelligence, Robotics, Coding and Future
              Technologies through fun and interactive learning.
            </p>
          </div>

         
          <div>
            <h3 className="text-2xl font-bold">
              🚀 Quick Links
            </h3>

            <ul className="mt-5 space-y-3">

              <li>
                <a href="#overview" className="hover:text-yellow-300">
                  Workshop Overview
                </a>
              </li>

              <li>
                <a href="#outcomes" className="hover:text-yellow-300">
                  Learning Outcomes
                </a>
              </li>

              <li>
                <a href="#instructor" className="hover:text-yellow-300">
                  Instructor
                </a>
              </li>

              <li>
                <a href="#faq" className="hover:text-yellow-300">
                  FAQs
                </a>
              </li>

              <li>
                <a href="#register" className="hover:text-yellow-300">
                  Register Now
                </a>
              </li>

            </ul>
          </div>

         
          <div>
            <h3 className="text-2xl font-bold">
              📞 Contact Us
            </h3>

            <div className="mt-5 space-y-4">

              <p>
                📧 hello@kidrove.com
              </p>

              <p>
                📱 +91 98765 43210
              </p>

              <p>
                🌍 Online Program
              </p>

              <p>
                🕒 Live Interactive Classes
              </p>

            </div>
          </div>

        </div>

      
        <div className="grid md:grid-cols-4 gap-6 mt-14">

          <div className="bg-white/20 rounded-3xl p-6 text-center backdrop-blur-sm">
            <div className="text-5xl">👦</div>
            <h3 className="mt-3 text-3xl font-bold">
              500+
            </h3>
            <p>Students</p>
          </div>

          <div className="bg-white/20 rounded-3xl p-6 text-center backdrop-blur-sm">
            <div className="text-5xl">🤖</div>
            <h3 className="mt-3 text-3xl font-bold">
              25+
            </h3>
            <p>Projects</p>
          </div>

          <div className="bg-white/20 rounded-3xl p-6 text-center backdrop-blur-sm">
            <div className="text-5xl">🚀</div>
            <h3 className="mt-3 text-3xl font-bold">
              4
            </h3>
            <p>Weeks</p>
          </div>

          <div className="bg-white/20 rounded-3xl p-6 text-center backdrop-blur-sm">
            <div className="text-5xl">🏆</div>
            <h3 className="mt-3 text-3xl font-bold">
              100%
            </h3>
            <p>Certificate</p>
          </div>

        </div>

        
        <div className="mt-14 border-t border-white/20 pt-6 text-center">

          <p className="text-blue-100">
            © {new Date().getFullYear()} Kidrove AI & Robotics Summer Adventure.
            All Rights Reserved.
          </p>

          <p className="mt-2 text-sm text-blue-200">
            Made with ❤️ for Young Innovators
          </p>

        </div>

      </div>

    </footer>
  );
}