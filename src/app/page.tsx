import Link from "next/link";
import { ActionButton } from "./components";

export default function Home() {
  return (
    <div className="flex flex-col space-y-8 max-w-7xl items-center p-4 my-auto lg:flex-row lg:mx-auto lg:gap-4">
      <div  className="self-center space-y-8">
        <h1>I&apos;m here to make it happen.</h1>
        <h2>
          <span className="text-accent">I help businesses</span> make a mark in the digital world and streamline their operations with smart software solutions.
          If you&apos;re ready <span className="text-accent">to get noticed online</span> or want to take the busywork out of your day-to-day life.
        </h2>
        <div className="mt-8">
        <Link href="/contact">
          <ActionButton>
            Contact
          </ActionButton>
        </Link>
        </div>
      </div>
    </div>
  );
}
