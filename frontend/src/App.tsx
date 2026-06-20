import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        <section className="kid-container py-20 text-center">
          <h1 className="text-5xl font-bold">
            AI & Robotics Summer Workshop
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Learn AI, Robotics, Coding and Future Technologies in a fun,
            interactive 4-week online workshop.
          </p>
        </section>
      </main>
    </>
  );
}

export default App;