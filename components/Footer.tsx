import React from "react";
import FooterLogoMbl from "@/public/images/footerLogoMbl.svg";
import FooterLogo from "@/public/images/footerLogo.svg";
import { Copyright, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <>
      <section className="grid-mbl md:grid-desk bg-green-1 py-4 md:py-10">
        <div className="items-start justify-between md:flex">
          <div>
            <div className="md:hidden">
              <FooterLogoMbl />
            </div>
            <div className="hidden md:block">
              <FooterLogo />
            </div>

            <p className="md:h3 mt-6 font-aeonik text-xl font-bold text-white-1">
              PT Sieko Membangun Indonesia
            </p>

            <p className="p2 md:p1 mt-4 text-white-2">
              Jl. KH. Ahmad Dahlan, Dusun III, Dukuhwaluh, <br /> Kec. Kembaran,
              Kabupaten Banyumas, Jawa Tengah 53182
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-baseline gap-8 md:mt-0 md:gap-14">
            <div className="flex flex-col justify-center gap-2 md:gap-6">
              <p className="md:h4 font-aeonik text-lg font-bold text-white-1">
                Perusahaan
              </p>

              <ul className="p2 md:p1 flex flex-col justify-center gap-1 text-white-2 md:gap-4">
                <li>
                  <a href="/perusahaan">Tentang Kami</a>
                </li>
                <li>
                  <a href="/blog">Blog</a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-center gap-2 md:gap-6">
              <p className="md:h4 font-aeonik text-lg font-bold text-white-1">
                Solusi
              </p>

              <ul className="p2 md:p1 flex flex-col justify-center gap-1 text-white-2 md:gap-4">
                <li>
                  <a href="/solusi">ekoFarm</a>
                </li>
                <li>
                  <a href="/solusi">ekoPlier</a>
                </li>
                <li>
                  <a href="/solusi">ekoSeller</a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-center gap-2 md:gap-6">
              <p className="md:h4 font-aeonik text-lg font-bold text-white-1">
                Program
              </p>

              <ul className="p2 md:p1 flex flex-col justify-center gap-1 text-white-2 md:gap-4">
                <li>
                  <a href="/program">Pelatihan</a>
                </li>
                <li>
                  <a href="/program">Pendanaan</a>
                </li>
                <li>
                  <a href="/program">Kemitraan</a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-center gap-2 md:gap-6">
              <p className="md:h4 font-aeonik text-lg font-bold text-white-1">
                Hubungi Kami
              </p>

              <ul className="p2 md:p1 flex flex-col justify-center gap-1 text-white-2">
                <li>
                  <a href="/kontak">Kontak</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="copyright mt-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Copyright className="text-white-1" size={18} />
            <p className="font-aeonik text-sm font-bold text-white-1 md:text-base">
              2024 Sieko, Inc
            </p>
          </div>
          <div className="flex items-center gap-2 text-white-1">
            <a href="/" className="cursor-pointer">
              <Facebook size={18} />
            </a>
            <a href="/" className="cursor-pointer">
              <Instagram size={18} />
            </a>
            <a href="/" className="cursor-pointer">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
