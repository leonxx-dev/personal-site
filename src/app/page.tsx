import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="min-h-screen flex items-center justify-center px-6 relative">
        <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* <!-- Left Section: Text Content --> */}
          <div className="text-center md:text-left space-y-6">
            <h1>
              Hi, I&apos;m <span className="text-orange-600">Jevgeni Glazunov</span>,<br />a Fullstack Developer!
            </h1>
            <p>
              I design and build web experiences that are visually stunning and highly functional. Let&apos;s bring your ideas to life.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <Link
                href="/portfolio"
                aria-current="page"
                className="px-6 py-3 bg-orange-600 rounded-lg shadow-lg hover:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-300"
              >
                View My Work
              </Link>
              <Link
                href="/contact"
                aria-current="page"
                className="px-6 py-3 text-orange-600 border border-orange-600 rounded-lg hover:bg-orange-100 focus:outline-none focus:ring focus:ring-orange-300"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          {/* <!-- Right Section: Hero Image --> */}
          <div className="flex justify-center md:justify-end">
            <Image
              src="/hero.webp"
              alt="Your Name"
              width={1000}
              height={1000}
              className="w-full max-w-lg md:max-w-xl object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* <!-- Left Section: Image or Screenshot --> */}
          <div className="flex justify-center md:justify-start">
            <Image
              src="/hero.webp"
              alt="Your Name"
              width={1000}
              height={1000}
              className="w-full max-w-lg md:max-w-xl object-cover rounded-lg shadow-lg"
            />
          </div>
          {/* <!-- Right Section: Project/Skill Details --> */}
          <div className="space-y-6 text-center md:text-left">
            {/* <!-- Section Title --> */}
            <h2>
              Featured Project: <span className="text-orange-600">[Project name]</span>
            </h2>
            {/* <!-- Description --> */}
            <p>
              [Short description of the project or skill]. This project highlights my expertise in [technology or skill]. Built with [tool/framework], it’s designed to deliver [impact/outcome].
            </p>
            {/* <!-- Call-to-Action Buttons --> */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <Link
                href="/project-details"
                aria-current="page"
                className="px-6 py-3 text-white bg-orange-600 rounded-lg shadow-lg hover:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-300"
              >
                View Project
              </Link>
              <Link
                href="/contact"
                aria-current="page"
                className="px-6 py-3 text-orange-600 border border-orange-600 rounded-lg hover:bg-orange-100 focus:outline-none focus:ring focus:ring-orange-300"
              >
                Hire Me
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
