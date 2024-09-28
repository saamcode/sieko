"use client";

import React from "react";
import { useState } from "react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import LogoMobile from "@/public/images/logoMbl.svg";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const MobileNavbar = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBg = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBg);

  return (
    <>
      <nav
        className={`grid-mbl p2 sticky top-0 z-50 flex items-center justify-between py-4 text-white-1 lg:hidden ${navbar ? "border-b border-green-1 bg-gray-1 bg-opacity-50 backdrop-blur-sm" : "bg-transparent"}`}
      >
        <Link href="/">
          <LogoMobile />
        </Link>

        <div className="flex items-center gap-5">
          <div className="nav-cta flex items-center">
            <Link href="/login">
              <Button variant="link" className="p3">
                Sign up
              </Button>
            </Link>

            <Link href="/login">
              <Button className="p3 rounded-full bg-green-1 px-5">Login</Button>
            </Link>
          </div>

          <Sheet>
            <SheetTrigger>
              <Menu className="text-white-1" size={32} />
            </SheetTrigger>
            <SheetContent side="top" className="text-white-1 backdrop-blur-sm">
              <ul className="p1 flex flex-col gap-4 text-white-1">
                <Link href="/solusi">Solusi</Link>
                <Link href="/program">Program</Link>
                <Link href="/perusahaan">Perusahaan</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/kontak">Kontak</Link>
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </>
  );
};

export default MobileNavbar;
