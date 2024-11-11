import Link from "next/link";
import Button from "./components/Button";
import { Title, SubTitle } from "./components/typography";
import { SpiralFancy } from "./components/fancy";

export default function Home() {
  return (
    <div className="flex flex-col space-y-8 max-w-7xl items-center p-4 my-auto lg:flex-row lg:mx-auto lg:gap-4">
      <div  className="lg:basis-1/2 self-center space-y-8">
        <Title>I am here to make it happen.</Title>
        <SubTitle>
          <span className="text-yellow-500">I help businesses</span> make a mark in the digital world and streamline their operations with smart software solutions.
          If you're ready <span className="text-yellow-500">to get noticed online</span> or want to take the busywork out of your day-to-day life.
        </SubTitle>
        <div className="mt-8">
        <Link href="/about">
          <Button>
            Contact
          </Button>
        </Link>
        </div>
        
      </div>
      <div className="lg:basis-1/2">
        <SpiralFancy />
      </div>
    </div>
  );
}
