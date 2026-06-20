import { Button } from "./ui";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="kid-container flex h-16 items-center justify-between">
        <h1 className="font-display text-xl font-bold text-black">
          Kidrove Workshop
        </h1>

        <Button>
          Register Now
        </Button>
      </div>
    </header>
  );
}