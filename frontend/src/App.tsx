import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { WorkshopDetails } from "./components/WorkshopDetails";
import { LearningOutcomes } from "./components/LearningOutcomes";
import { Instructor } from "./components/Instructors";
import { Testimonials } from "./components/Testimonials";
import { RegistrationForm } from "./components/RegistrationForm";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <WorkshopDetails />
      <LearningOutcomes />
      <Instructor />
      <Testimonials />
      <RegistrationForm />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;