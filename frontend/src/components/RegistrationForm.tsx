import { useState } from "react";
import { Button } from "./ui";

export function RegistrationForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  return (
    <section className="py-20">
      <div className="kid-container max-w-2xl">
        <h2 className="text-4xl font-bold text-center">
          Register Now
        </h2>

        <form className="mt-10 space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full border p-4 rounded-xl"
            value={form.name}
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value,
              })
            }
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-4 rounded-xl"
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
            placeholder="Phone Number"
            className="w-full border p-4 rounded-xl"
            value={form.phone}
            onChange={(e) =>
              setForm({
                ...form,
                phone: e.target.value,
              })
            }
          />

          <Button type="submit" size="lg">
            Submit Registration
          </Button>
        </form>
      </div>
    </section>
  );
}