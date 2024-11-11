"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BurgerIcon, CloseIcon, GitHubIcon } from "./icons";
import Gradient from "./fancy/GradientFancy";
import { robotoCondense } from "../fonts";

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
    }
  ];

  return (
    <header>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
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
        </div>
        <div className="flex lg:hidden">
          <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" onClick={() => setOpen(true)}>
            <span className="sr-only">Open main menu</span>
            <BurgerIcon />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return <Link href={link.href} key={link.name} className={`uppercase tracking-widest hover:border-b-2 ${robotoCondense.className} ${isActive ? "border-b-2" : ""}`}>{link.name}</Link>
          })}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="https://github.com/leonxx-dev" rel="noopener noreferrer" target="_blank">
            <GitHubIcon />
          </Link>
        </div>
      </nav>
      {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
      {open && <div className="lg:hidden" role="dialog" aria-modal="true">
        {/* <!-- Background backdrop, show/hide based on slide-over state. --> */}
        <div className="fixed inset-0 z-10"></div>
        <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <Gradient />
          <div className="flex items-center justify-between">
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
            <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={() => setOpen(false)}>
              <span className="sr-only">Close menu</span>
              <CloseIcon />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-white-500/10">
              <div className="space-y-2 py-6">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href
                  return <Link href={link.href} key={link.name} className={`-mx-3 block px-3 py-2 uppercase tracking-widest hover:border-l-2 ${isActive ? "border-l-2" : ""}`}>{link.name}</Link>
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