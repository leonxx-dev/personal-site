"use client";

import Link from "next/link";
import { useState, Dispatch, SetStateAction } from "react";
import { usePathname } from "next/navigation";
import { BurgerIcon, CloseIcon } from "./icons";
import { CompanyLogo } from ".";

interface HeaderProps {
  navLinks: NavLink[]
}

interface NavLink {
  href: string
  name: string
}

interface NavbarProps {
  navLinks: NavLink[]
  pathname: string
  open?: boolean
  setOpen?: Dispatch<SetStateAction<boolean>>
}

export default function Header ({ navLinks }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navLinkBaseClass = "uppercase tracking-widest hover:border-orange-600";

  const isActiveLink = (pathname: string, href: string) => {
    if (href !== "/") {
      return pathname.includes(href);
    } else {
      return href === pathname;
    }
  };

  const DesktopNav = ({ navLinks, pathname }: NavbarProps) => (
    <div className="hidden lg:flex lg:gap-x-12">
      {navLinks.map((link) => {
        return (
          <Link
            href={link.href}
            key={link.name}
            aria-current={isActiveLink(pathname, link.href) ? "page" : undefined}
            className={`${navLinkBaseClass} hover:border-b-2 ${isActiveLink(pathname, link.href) ? "border-b-2 border-orange-600" : ""}`}
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );

  const MobileNav = ({ navLinks, pathname, open, setOpen }: NavbarProps) => (
    open && (
      <div className="lg:hidden" role="dialog" aria-modal="true">
        <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <CompanyLogo />
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => {
                if (setOpen) setOpen((prev) => !prev);
              }}
              aria-expanded={open}
              aria-label="Close main menu"
            >
              <CloseIcon />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="space-y-2 py-6">
              {navLinks.map((link) => {
                return (
                  <Link
                    href={link.href}
                    key={link.name}
                    aria-current={isActiveLink(pathname, link.href) ? "page" : undefined}
                    className={`${navLinkBaseClass} -mx-3 block px-3 py-2 hover:border-l-2 ${isActiveLink(pathname, link.href) ? "border-l-2 border-orange-600" : ""}`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    )
  );


  return (
    <header>
      <div className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <CompanyLogo />
        </div>
        <nav aria-label="Global">
          <DesktopNav navLinks={navLinks} pathname={pathname} />
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setOpen((prev) => !prev)}
              aria-expanded={open}
              aria-label="Open main menu"
            >
              <BurgerIcon />
            </button>
          </div>
        </nav>
      </div>
      <MobileNav navLinks={navLinks} pathname={pathname} open={open} setOpen={setOpen} />
    </header>
  );
}