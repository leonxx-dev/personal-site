import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jevgeni Glazunov - Full-Stack Developer | React, Node.js, Scalable Web Solutions",
  description: "Discover Jevgeni Glazunov, an innovative Full-Stack Developer with expertise in React, Node.js, and scalable web solutions. Skilled in delivering high-quality applications, managing teams, and achieving impactful results through modern tech stacks including Docker, AWS, PostgreSQL, and more.",
  keywords: "Jevgeni Glazunov, Full-Stack Developer, React developer, Node.js developer, scalable web solutions, software team leader, RESTful APIs, AWS developer, Docker, modern UI/UX, SQL, NoSQL, web development expert, coding bootcamp honors graduate, educational platform developer, insurance system modernization, Nornir Oslo developer"
};

export default function ResumePage() {
  return (
    <main className="max-w-4xl mx-auto">
      <section className="mb-10">
        {/* <!-- Page Header --> */}
        <h1 className="mb-5">Resume</h1>
        <p className="mb-8">
          A snapshot of my professional journey and accomplishments.
        </p>
        <Link
          href="/Jevgeni Glazunov - Full-Stack Developer.docx"
          download
          className="px-6 py-3 bg-orange-600 rounded-lg shadow-lg hover:bg-orange-700"
        >
          Download Resume
        </Link>
      </section>

      <section className="mb-10">
        {/* <!-- About Section --> */}
        <h2 className="mb-4">Objective</h2>
        <p>
          Innovative Full-Stack Developer skilled in React, Node.js, and scalable web solutions. Passionate about solving complex problems and delivering impactful user-focused applications.
        </p>
      </section>

      <section className="mb-10">
        {/* <!-- Technical Skills Section --> */}
        <h2 className="mb-4">Technical Skills</h2>
        <ul className="list-disc ml-5 mt-2">
          <li><strong>Frontend:</strong> React, Vue.js, Next.js, Tailwind CSS, HTML/CSS</li>
          <li><strong>Backend:</strong> Node.js, TypeScript, Python, C#, PostgreSQL, MongoDB</li>
          <li><strong>Other Tools:</strong> Docker, AWS, REST APIs, Git/GitHub</li>
        </ul>
      </section>

      <section className="mb-10">
        {/* <!-- Professional Experience Section --> */}
        <h2 className="mb-4">Professional Experience</h2>

        {/* <!-- Job 1 --> */}
        <div className="mb-6">
          <h3>Team Lead</h3>
          <p>Nornir, Oslo, Norway | 03.2023 - Present</p>
          <ul className="list-disc ml-5 mt-2">
            <li>Manage the software team, effectively coordinating and aligning deliverables with company standards.</li>
            <li>Actively contribute to the development process, ensuring high-quality products.</li>
            <li>Translate high-level objectives into actionable tasks for the team.</li>
          </ul>
        </div>

        {/* <!-- Job 2 --> */}
        <div className="mb-6">
          <h3>Full Stack Developer</h3>
          <p>Nornir, Oslo, Norway | 03.2020 - 03.2023</p>
          <ul className="list-disc ml-5 mt-2">
            <li>Developed and deployed RESTful APIs for web and mobile applications.</li>
            <li>Built user-friendly and responsive interfaces with React and Vue.</li>
            <li>Implemented authentication systems and optimized databases using SQL and NoSQL technologies.</li>
          </ul>
        </div>

        {/* <!-- Event --> */}
        <div>
          <h3>Event Organizer</h3>
          <p>NTNU University Hackathon | 03.2023</p>
          <ul className="list-disc ml-5 mt-2">
            <li>Coordinated the technical aspects of NTNU&apos;s 5th Annual BRAIN Hackathon.</li>
            <li>Managed participant communication and event logistics.</li>
          </ul>
        </div>
      </section>

      <section className="mb-10">
        {/* <!-- Achievements Section --> */}
        <h2 className="mb-4">Achievements</h2>
        <ul className="list-disc ml-5">
          <li>Graduated top of the class from a coding bootcamp with First-Class Honors.</li>
          <li>Designed and implemented an admin application, streamlining onboarding processes.</li>
          <li>Key contributor to a kindergarten-focused educational platform.</li>
          <li>Led a team to modernize a 20-year-old insurance system, including backend integration and UI/UX transformation.</li>
        </ul>
      </section>

      <section className="mb-10">
        {/* <!-- Education Section --> */}
        <h2 className="mb-4">Education</h2>
        <p>
          <strong>Full-Stack Development</strong><br />
          Code Institute, Accredited by Edinburgh Napier University | 02.2020
        </p>
        <p className="mt-2">
          Completed an intensive bootcamp, earning a Diploma in Full-Stack Development with First-Class Honors.
        </p>
      </section>

      <section className="mb-10">
        {/* <!-- Footer --> */}
        <div className="text-center">
          <p>Feel free to download my resume or reach out for more details!</p>
        </div>
      </section>
    </main>
  );
}