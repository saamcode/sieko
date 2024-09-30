"use client";

import React from "react";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Solusi", href: "/solusi" },
  { name: "Program", href: "/program" },
  { name: "Perusahaan", href: "/perusahaan" },
  { name: "Blog", href: "/blog" },
  { name: "Kontak", href: "/kontak" },
];

import Logo from "@/public/images/logo.svg";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const DesktopNavbar = () => {
  const [navbar, setNavbar] = useState(false);

  if (typeof window !== "undefined") {
    const changeBg = () => {
      if (window.scrollY >= 80) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };

    window.addEventListener("scroll", changeBg);
  }

  // active link
  const pathname = usePathname();

  return (
    <>
      <nav
        className={`navbar grid-desk sticky top-0 z-50 hidden items-center justify-between py-4 lg:flex ${navbar ? "border-b border-green-1 bg-gray-1 bg-opacity-50 backdrop-blur-sm" : "bg-transparent"}`}
      >
        <Link href="/">
          <Logo />
        </Link>

        <ul className="flex items-center gap-10 font-aeonik text-xl text-white-1">
          {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);

            return (
              <Link
                href={link.href}
                key={link.name}
                className={
                  isActive
                    ? "rounded-lg border-b-4 border-green-1"
                    : "text-white-1 hover:text-white-2"
                }
              >
                {link.name}
              </Link>
            );
          })}
        </ul>

        <div className="nav-cta text-white-1">
          <Link href="/login">
            <Button variant="link" className="font-aeonik text-xl">
              Sign up
            </Button>
          </Link>

          <Link href="/login">
            <Button className="rounded-full bg-green-1 px-8 py-6 font-aeonik text-xl">
              Login
            </Button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default DesktopNavbar;
