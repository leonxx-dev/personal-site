"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BurgerIcon, CloseIcon, GitHubIcon } from "./icons";

export default function Navbar () {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    {
      href: "/",
      name: "Home",
    },
    {
      href: "/portfolio",
      name: "Portfolio"
    },
    {
      href: "/about",
      name: "About"
    },
    {
      href: "/blog",
      name: "Blog"
    },
    {
      href: "/contact",
      name: "Contact"
    }
  ];

  const CompanyLogo = () => {
    return (
      <Link href="#" className="-m-1.5 p-1.5">
        <span className="sr-only">Your Company</span>
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Brand Logo"
          width={120}
          height={30}
          priority
        />
      </Link>
    );
  };

  return (
    <header>
      <div className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <CompanyLogo />
        </div>
        <nav aria-label="Global">
          <div className="hidden lg:flex lg:gap-x-12">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return <Link href={link.href} key={link.name} className={`uppercase tracking-widest hover:border-b-2 hover:border-orange-600 ${isActive ? "border-b-2 border-orange-600" : ""}`}>{link.name}</Link>;
            })}
          </div>
          <div className="flex lg:hidden">
            <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" onClick={() => setOpen(true)}>
              <span className="sr-only">Open main menu</span>
              <BurgerIcon />
            </button>
          </div>
        </nav>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="https://github.com/leonxx-dev" rel="noopener noreferrer" target="_blank">
            <GitHubIcon />
          </Link>
        </div>
      </div>
      {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
      {open && <div className="lg:hidden" role="dialog" aria-modal="true">
        {/* <!-- Background backdrop, show/hide based on slide-over state. --> */}
        <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <CompanyLogo />
            <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={() => setOpen(false)}>
              <span className="sr-only">Close menu</span>
              <CloseIcon />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-white-500/10">
              <div className="space-y-2 py-6">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return <Link href={link.href} key={link.name} className={`-mx-3 block px-3 py-2 uppercase tracking-widest hover:border-l-2 hover:border-orange-600 ${isActive ? "border-l-2 border-orange-600" : ""}`}>{link.name}</Link>;
                })}
              </div>
              <div className="py-6">
                <Link href="https://github.com/leonxx-dev" rel="noopener noreferrer" target="_blank">
                  <GitHubIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>}
    </header>
  );
}