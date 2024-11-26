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
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-shrink-0">
            <Image width={500} height={500} src="/jevgeniGlazunov.webp" alt="Jevgeni Glazunov" className="w-48 h-48 rounded-full shadow-md border-2 border-gray-300" />
          </div>
          <div>
            <h1 className="mb-4">About Me</h1>
            <p className="leading-relaxed">
              I&apos;m Jevgeni Glazunov, a passionate software developer with a deep love for technology and problem-solving.
              Based in Oslo, Norway, I thrive on turning ideas into working solutions, bringing concepts to life through clean, efficient, and user-friendly software.
              My journey in the tech world has been fueled by curiosity, creativity, and a constant drive to learn and grow.
            </p>
          </div>
        </div>
      </section>
      <section className="my-10">
        <h2 className="mb-4">Achievements</h2>
        <p className="leading-relaxed mb-4">A showcase of my accomplishments reflecting dedication, innovation, and impact.</p>
        <ul className="list-disc ml-4 leading-relaxed">
          <li>
            <strong>Achieved First-Class Honors:</strong> Graduated top of the class from a coding bootcamp, excelling despite no prior
            programming experience.
          </li>
          <li>
            <strong>Solo Developer Success:</strong> Designed and implemented an admin application single-handedly, streamlining onboarding
            and customer management processes for the company.
          </li>
          <li>
            <strong>Educational Impact:</strong> Contributed as a key team member to the development of a kindergarten-focused educational platform,
            enabling teachers to effectively plan activities and evaluate children performance.
          </li>
          <li>
            <strong>Leadership in Legacy Modernization:</strong> Leading a team of four to revamp a 20-year-old insurance system, including
            complete backend integration, data migration, and UI/UX transformation.
          </li>
          <li>
            <strong>Hackathon Event Organizer:</strong> Contributed to the organization of NTNU University&apos;s 5th Annual BRAIN Hackathon,
            collaborating with a team to plan technical aspects, manage participant communication, and ensure a seamless event experience.
          </li>
        </ul>
      </section>
      <section className="my-10">
        <h2 className="mb-4">My Expertise</h2>
        <p className="leading-relaxed mb-4">
          Over the years, I&apos;ve built strong skills in working with a wide range of technologies, including:
        </p>
        <ul className="list-disc ml-4 leading-relaxed">
          <li>
            <strong>Frontend Development:</strong> Using tools like React.js, Vue.js, Next.js,
            and TailwindCSS to create user-friendly, responsive, and visually appealing websites.
          </li>
          <li>
            <strong>Backend Development:</strong> Working with Node.js and TypeScript to build
            reliable and scalable server-side applications and APIs.
          </li>
          <li>
            <strong>Database Management:</strong> Skilled in working with SQL databases to handle
            data smoothly and run queries efficiently.
          </li>
          <li>
            <strong>System Integrations:</strong> Connecting different systems to ensure they
            work together seamlessly.
          </li>
          <li>
            <strong>End-to-End Development:</strong> Managing the entire development process,
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
            <strong>From Idea to Reality:</strong> Turning big ideas into working, practical applications.
          </li>
          <li>
            <strong>Scalable Solutions:</strong> Creating systems, APIs, and interfaces that can grow and adapt over time.
          </li>
          <li>
            <strong>Effective Problem-Solving:</strong> Breaking down tough challenges into simple, workable solutions.
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