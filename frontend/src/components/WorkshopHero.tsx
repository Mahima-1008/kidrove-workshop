import { Button, Badge } from "./ui";
import { workshop } from "../lib/data";

export function WorkshopHero() {
  return (
    <section className="pt-32 pb-20">
      <div className="kid-container text-center">

        <Badge tone="primary">
          Online Workshop
        </Badge>

        <h1 className="mt-6 text-5xl font-bold">
          {workshop.title}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-[#6b7280]">
          {workshop.description}
        </p>

        <Button
          size="lg"
          className="mt-8"
        >
          Enroll Now
        </Button>

      </div>
    </section>
  );
}