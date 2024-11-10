"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AppNavbar () {
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
    <nav className="flex justify-between py-4">
      <div>
        <Link href="/">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Brand logo"
            width={120}
            height={30}
            priority
          />
        </Link>
      </div>
      <div className="flex gap-8">
        {navLinks.map((link) => {
          const isActive = pathname === link.href
          return <Link href={link.href} key={link.name} className={`px-4 ${isActive ? "border-b-2 border-red-700" : ""}`}>{link.name}</Link>
        })}
      </div>
    </nav>
  );
}