import Link from "next/link";
import { GitHubIcon, LinkedInIcon } from "./icons";
import config from "../config";

export default function Footer () {
  return (
    <footer className="py-8">
      <div className="max-w-7xl mx-auto px-6 flex justify-between">
        {/* <!-- Contact Section --> */}
        <div>
          <h3 className="mb-4">Contact Me</h3>
          <p>Email: <Link href={`mailto:${ config.personal.email }`} className="hover:text-orange-700">{ config.personal.email }</Link></p>
        </div>

        {/* <!-- Navigation Links --> */}
        <div>
          <h3 className="mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-orange-700">Home</Link></li>
            <li><Link href="/about" className="hover:text-orange-700">About</Link></li>
            <li><Link href="/portfolio" className="hover:text-orange-700">Portfolio</Link></li>
            <li><Link href="/contact" className="hover:text-orange-700">Contact</Link></li>
          </ul>
        </div>

        {/* <!-- Social Media --> */}
        <div>
          <h3 className="mb-4">Follow Me</h3>
          <div className="flex space-x-4">
            <Link href={`${ config.personal.links.github }`} target="_blank" rel="noopener noreferrer" className="hover:text-orange-700">
              <GitHubIcon />
            </Link>
            <Link href={`${ config.personal.links.linkedin }`} target="_blank" rel="noopener noreferrer" className="hover:text-orange-700">
              <LinkedInIcon />
            </Link>
          </div>
        </div>
      </div>

      {/* <!-- Copyright --> */}
      <div className="mt-8 text-center text-sm text-gray-500">
        © 2024 Jevgeni Glazunov. All rights reserved.
      </div>
    </footer>
  );
}