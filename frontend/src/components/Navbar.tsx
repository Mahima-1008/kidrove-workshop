import { Button } from "./ui";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-md">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">

       
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center text-2xl shadow-lg">
            🤖
          </div>

          <div>
            <h1 className="text-2xl font-extrabold text-slate-900">
              Kidrove
            </h1>

            <p className="text-xs text-blue-600 font-semibold">
              AI & Robotics Summer Adventure
            </p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#overview"
            className="font-medium text-slate-700 hover:text-orange-500 transition"
          >
            🚀 Overview
          </a>

          <a
            href="#outcomes"
            className="font-medium text-slate-700 hover:text-orange-500 transition"
          >
            🧠 Learning
          </a>

          <a
            href="#instructor"
            className="font-medium text-slate-700 hover:text-orange-500 transition"
          >
            👨‍🏫 Mentor
          </a>

          <a
            href="#faq"
            className="font-medium text-slate-700 hover:text-orange-500 transition"
          >
            ❓ FAQs
          </a>
        </nav>

      
        <a href="#register">
          <Button
            className="
              bg-orange-500
              hover:bg-orange-600
              text-white
              font-bold
              rounded-full
              px-6
            "
          >
            🎯 Join Now
          </Button>
        </a>

      </div>
    </header>
  );
}