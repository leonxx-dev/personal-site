import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me - Jevgeni Glazunov",
  description: "Passionate software developer with expertise in frontend and backend development, database management, system integrations, and end-to-end software solutions.",
  authors: {
    name: "Jevgeni Glazunov",
    url: "https://glazunov.dev"
  },
  keywords: "Software Developer, Frontend Development, Backend Development, React.js, Vue.js, Node.js, TypeScript, SQL Databases, TailwindCSS, Scalable Solutions, End-to-End Development"
};

export default function AboutPage() {
  return (
    <main className="flex flex-col space-y-8 max-w-4xl items-center p-4 my-auto lg:mx-auto lg:gap-4">
      <section className="my-10">
        <div className="flex gap-8 items-center">
          <div className="flex-shrink-0">
            <Image width={500} height={500} src="/jevgeniGlazunov.webp" alt="Jevgeni Glazunov" className="w-48 h-48 rounded-full shadow-md border-2 border-gray-300" />
          </div>
          <div>
          <h2 className="mb-4">Hello!</h2>
            <p className="leading-relaxed">
              I&apos;m a passionate software developer with a deep love for technology and problem-solving.
              My journey in the tech world has been fueled by curiosity, creativity, and a constant drive to learn and grow.
              I thrive on turning ideas into working solutions, bringing concepts to life through clean, efficient, and user-friendly software.
            </p>
          </div>
        </div>
      </section>
      <section className="my-10">
        <h2 className="mb-4">My Expertise</h2>
        <p className="leading-relaxed mb-4">
          Over the years, I&apos;ve built strong skills in working with a wide range of technologies, including:
        </p>
        <ul className="list-disc ml-4 leading-relaxed">
          <li>
            <span className="font-semibold">Frontend Development:</span> Using tools like React.js, Vue.js, Next.js,
            and TailwindCSS to create user-friendly, responsive, and visually appealing websites.
          </li>
          <li>
            <span className="font-semibold">Backend Development:</span> Working with Node.js and TypeScript to build
            reliable and scalable server-side applications and APIs.
          </li>
          <li>
            <span className="font-semibold">Database Management:</span> Skilled in working with SQL databases to handle
            data smoothly and run queries efficiently.
          </li>
          <li>
            <span className="font-semibold">System Integrations:</span> Connecting different systems to ensure they
            work together seamlessly.
          </li>
          <li>
            <span className="font-semibold">End-to-End Development:</span> Managing the entire development process,
            from idea to finished product, by breaking big projects into smaller, manageable tasks to deliver effective solutions on time.
          </li>
        </ul>
      </section>

      <section className="my-10">
        <h2 className="mb-4">My Approach</h2>
        <p className="leading-relaxed mb-4">
          I believe that great software starts with a clear vision and grows through teamwork. My development process focuses
          on both technical accuracy and creating a great user experience:
        </p>
        <ul className="list-disc ml-4 leading-relaxed">
          <li>
            <span className="font-semibold">From Idea to Reality:</span> Turning big ideas into working, practical applications.
          </li>
          <li>
            <span className="font-semibold">Scalable Solutions:</span> Creating systems, APIs, and interfaces that can grow and adapt over time.
          </li>
          <li>
            <span className="font-semibold">Effective Problem-Solving:</span> Breaking down tough challenges into simple, workable solutions.
          </li>
        </ul>
      </section>
      <section className="my-10">
        <h2 className="mb-4">What Drives Me</h2>
        <p className="leading-relaxed mb-4">
          I&apos;m passionate about staying ahead in the ever-evolving world of technology, always exploring new tools and frameworks to grow
          my skills. For me, development is more than just a job—it&apos;s my craft and my passion.
        </p>
        <p className="leading-relaxed mb-4">
          I thrive on the thrill of solving problems and the joy of building software that truly makes a difference.
        </p>
        <p className="leading-relaxed mb-4">
          Let&apos;s create something incredible together—whether it&apos;s designing a cutting-edge app or enhancing an existing system, I&apos;m ready for the next challenge. 🚀
        </p>
      </section>
    </main>
  );
}