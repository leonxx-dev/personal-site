import Link from "next/link";
import { EnvelopeIcon, LinkedInIcon, TelegramIcon } from "@/app/components/icons";
import { ContactMeIllustration } from "@/app/components/illustrations";
import config from "@/app/config";

export default function ContactPage() {
  return (
    <main  className="flex flex-col max-w-4xl p-4 mx-auto items-center">
      <section className="flex flex-col items-center my-4 md:my-10 relative">
        <div className="absolute w-full h-full bg-gradient-to-br from-sky-500 to-transparent opacity-40 rounded-full blur-2xl -z-10"></div>
        {/* One dot gradient */}
        {/* <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-gradient-to-tr from-blue-500 to-transparent opacity-40 rounded-full blur-2xl -z-10"></div> */}
        <ContactMeIllustration />
      </section>
      <section className="my-4 md:my-10">
        <h1 className="mb-8">Contact Me</h1>
        <div className="flex flex-col space-y-4">
          <Link href={`mailto:${ config.personal.email }`} className="flex flex-row items-center px-6 py-3 gap-4 rounded-lg text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-300">
            <EnvelopeIcon />
            <div className="font-heading text-2xl uppercase tracking-widest">E-mail</div>
          </Link>
          <Link href={`${ config.personal.links.telegram }`} target="_blank" rel="noopener noreferrer" className="flex flex-row items-center px-6 py-3 gap-4 text-orange-600 border border-orange-600 rounded-lg hover:bg-orange-100 focus:outline-none focus:ring focus:ring-orange-300">
            <TelegramIcon />
            <div className="font-heading text-2xl uppercase tracking-widest">Telegram</div>
          </Link>
          <Link href={`${ config.personal.links.linkedin }`} target="_blank" rel="noopener noreferrer" className="flex flex-row items-center px-6 py-3 gap-4 text-orange-600 border border-orange-600 rounded-lg hover:bg-orange-100 focus:outline-none focus:ring focus:ring-orange-300">
            <LinkedInIcon />
            <div className="font-heading text-2xl uppercase tracking-widest">Linked In</div>
          </Link>
        </div>
      </section>
    </main>
  );
}