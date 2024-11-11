import Image from "next/image";
import Gradient from "./components/background/Gradient";
import Title from "./components/typography/Title";
import SubTitle from "./components/typography/SubTitle";
import Text from "./components/typography/Text";

export default function Home() {
  return (
    <div className="flex flex-col space-y-8 max-w-7xl items-center p-4 my-auto lg:items-center lg:flex-row lg:my-auto lg:mx-auto lg:gap-4">
      <div  className="lg:basis-1/2 self-center space-y-8">
        <Title>Lorem Ipsum Generator</Title>
        <SubTitle>
          Lorem ipsum odor amet, consectetuer adipiscing elit.
          Nullam etiam auctor dictumst conubia lacus eros mauris eu luctus.
          Tristique porta nulla, feugiat felis feugiat tempus ultricies facilisi.
        </SubTitle>
        <Text>
          Lorem ipsum odor amet, consectetuer adipiscing elit.
          Nullam etiam auctor dictumst conubia lacus eros mauris eu luctus.
          Tristique porta nulla, feugiat felis feugiat tempus ultricies facilisi.
        </Text>
        <button className="rounded bg-green-600 hover:bg-green-800 p-4">Do Something!</button>
        <Gradient />
      </div>
      <div className="lg:basis-1/2">
        <Image
          src="/trump.jpg"
          alt=""
          width={2000}
          height={900}
          priority
        />
      </div>
    </div>
  );
}
