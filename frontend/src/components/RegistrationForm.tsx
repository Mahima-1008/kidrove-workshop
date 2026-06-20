import { useState } from "react";
import { Button } from "./ui";

export function RegistrationForm() {
  const [form, setForm] = useState({
    studentName: "",
    parentName: "",
    email: "",
    phone: "",
    age: "",
  });

  return (
    <section
      id="register"
      className="py-24 bg-gradient-to-b from-orange-50 to-yellow-50"
    >
      <div className="container mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          
          <div>

            <div className="inline-block bg-orange-200 text-orange-800 font-bold px-5 py-2 rounded-full">
              🎉 Limited Seats Available
            </div>

            <h2 className="mt-6 text-5xl font-extrabold text-slate-900">
              Join The
              <span className="block text-orange-500">
                AI & Robotics Adventure
              </span>
            </h2>

            <p className="mt-5 text-lg text-slate-600">
              Become a young innovator and learn Artificial Intelligence,
              Robotics, Coding and Future Technologies through exciting
              projects and live classes.
            </p>

            <div className="mt-8 space-y-4">

              <div className="flex items-center gap-3">
                <span className="text-2xl">🤖</span>
                <span>Build AI Projects</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-2xl">🚀</span>
                <span>Create Robotics Models</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-2xl">💻</span>
                <span>Learn Coding Skills</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-2xl">🏆</span>
                <span>Earn Certificate</span>
              </div>

            </div>

            <div className="grid grid-cols-3 gap-4 mt-10">

              <div className="bg-white rounded-2xl p-4 text-center shadow">
                <div className="text-3xl">👦</div>
                <div className="font-bold mt-2">500+</div>
                <div className="text-xs text-slate-500">
                  Students
                </div>
              </div>

              <div className="bg-white rounded-2xl p-4 text-center shadow">
                <div className="text-3xl">🤖</div>
                <div className="font-bold mt-2">25+</div>
                <div className="text-xs text-slate-500">
                  Projects
                </div>
              </div>

              <div className="bg-white rounded-2xl p-4 text-center shadow">
                <div className="text-3xl">🏆</div>
                <div className="font-bold mt-2">100%</div>
                <div className="text-xs text-slate-500">
                  Certificate
                </div>
              </div>

            </div>

          </div>

          <div className="bg-white rounded-[35px] p-8 shadow-2xl">

            <h3 className="text-3xl font-bold text-center">
              🎯 Reserve Your Seat
            </h3>

            <p className="text-center text-slate-500 mt-2">
              Fill in the details below
            </p>

            <form className="mt-8 space-y-4">

              <input
                type="text"
                placeholder="👦 Student Name"
                className="w-full p-4 border rounded-2xl"
                value={form.studentName}
                onChange={(e) =>
                  setForm({
                    ...form,
                    studentName: e.target.value,
                  })
                }
              />

              <input
                type="text"
                placeholder="👨 Parent Name"
                className="w-full p-4 border rounded-2xl"
                value={form.parentName}
                onChange={(e) =>
                  setForm({
                    ...form,
                    parentName: e.target.value,
                  })
                }
              />

              <input
                type="email"
                placeholder="📧 Email Address"
                className="w-full p-4 border rounded-2xl"
                value={form.email}
                onChange={(e) =>
                  setForm({
                    ...form,
                    email: e.target.value,
                  })
                }
              />

              <input
                type="text"
                placeholder="📱 Phone Number"
                className="w-full p-4 border rounded-2xl"
                value={form.phone}
                onChange={(e) =>
                  setForm({
                    ...form,
                    phone: e.target.value,
                  })
                }
              />

              <input
                type="number"
                placeholder="🎂 Age"
                className="w-full p-4 border rounded-2xl"
                value={form.age}
                onChange={(e) =>
                  setForm({
                    ...form,
                    age: e.target.value,
                  })
                }
              />

              <Button
                type="submit"
                size="lg"
                className="
                  w-full
                  bg-orange-500
                  hover:bg-orange-600
                  text-white
                  rounded-2xl
                "
              >
                🚀 Register Now
              </Button>

            </form>

            <p className="text-center text-sm text-slate-500 mt-5">
              🔒 Your information is safe and secure.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}