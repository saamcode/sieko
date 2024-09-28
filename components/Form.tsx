import React from "react";
import FooterLogoMbl from "@/public/images/footerLogoMbl.svg";
import FooterLogo from "@/public/images/footerLogo.svg";
import { Mail, Facebook, Instagram, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const Form = () => {
  return (
    <>
      <section className="col-sec">
        <div className="col-comp">
          <h1 className="h1 text-center text-gray-1">Hubungi Kami</h1>

          <div className="rounded-lg border border-green-1 p-5 md:p-7">
            <div className="forms flex flex-col gap-9 md:flex-row">
              <div className="form-card rounded-lg bg-green-1 p-4 md:p-7">
                <div className="md:hidden">
                  <FooterLogoMbl />
                </div>

                <div className="hidden md:block">
                  <FooterLogo />
                </div>

                <p className="mb-4 mt-6 font-aeonik text-lg font-bold text-white-1 md:text-3xl">
                  PT Sieko Membangun Indonesia
                </p>

                <p className="p3 mb-7 text-white-2 md:text-xl">
                  Jl. KH. Ahmad Dahlan, Dusun III, Dukuhwaluh, Kec. Kembaran,
                  Kabupaten Banyumas, Jawa Tengah 53182
                </p>

                <div className="flex flex-col gap-4 md:gap-6">
                  <div className="flex items-center gap-4">
                    <Mail className="h-7 w-7 text-white-1 md:h-10 md:w-10" />
                    <div className="flex flex-col gap-1">
                      <p className="font-aeonik text-lg font-bold text-white-1 md:text-xl">
                        Email
                      </p>

                      <p className="p3 md:p1 text-white-2">
                        siekoofc@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Facebook className="h-7 w-7 text-white-1 md:h-10 md:w-10" />
                    <div className="flex flex-col gap-1">
                      <p className="font-aeonik text-lg font-bold text-white-1 md:text-xl">
                        Facebook
                      </p>

                      <p className="p3 md:p1 text-white-2">
                        Sieko Membangun Indonesia
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Instagram className="h-7 w-7 text-white-1 md:h-10 md:w-10" />
                    <div className="flex flex-col gap-1">
                      <p className="font-aeonik text-lg font-bold text-white-1 md:text-xl">
                        Instagram
                      </p>

                      <p className="p3 md:p1 text-white-2">@sieko.id</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-input">
                <h5 className="h4 text-gray1 md:h3">Mari membangun koneksi</h5>

                <p className="p2 mb-4 text-gray-2 md:text-xl">
                  Sampaikan keluh kesahmu Mari kita selesaikan bersama
                </p>

                <form action="" className="flex flex-col gap-3">
                  <div className="flex flex-col gap-3 md:flex-row">
                    <input
                      type="text"
                      placeholder="Nama Depan"
                      className="p2 rounded-md border border-gray-2 bg-white-2 p-4 placeholder-gray-2"
                    />
                    <input
                      type="text"
                      placeholder="Nama Belakang"
                      className="p2 rounded-md border border-gray-2 bg-white-2 p-4 placeholder-gray-2"
                    />
                  </div>

                  <input
                    type="email"
                    placeholder="Email"
                    className="p2 rounded-md border border-gray-2 bg-white-2 p-4 placeholder-gray-2"
                  />

                  <input
                    type="number"
                    placeholder="Nomor Telephone"
                    className="p2 rounded-md border border-gray-2 bg-white-2 p-4 placeholder-gray-2"
                  />

                  <textarea
                    name="Pesan"
                    id="pesan"
                    placeholder="Pesan"
                    className="p2 h-28 rounded-md border border-gray-2 bg-white-2 p-4 placeholder-gray-2"
                  ></textarea>

                  <Button
                    variant="secondary"
                    className="flex items-center gap-2 bg-green-1 md:py-6"
                  >
                    <p className="font-aeonik text-base font-bold text-white-1 md:text-lg">
                      Sampaikan ke Sieko
                    </p>

                    <Send className="h-4 w-4 text-white-1" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Form;
