import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { loginImg } from "@/public/images";
import Google from "@/public/images/google.svg";
import Link from "next/link";

const Login = () => {
  return (
    <>
      <main className="grid-mbl md:grid-desk">
        <section className="col-sec">
          <div className="mt-20">
            <div className="rounded-lg border border-green-1 p-5 md:p-7">
              <div className="forms flex flex-col items-center gap-9 md:flex-row md:justify-center">
                <div className="image">
                  <Image src={loginImg} alt="img" className="rounded-lg" />
                </div>

                <div className="form-input">
                  <h5 className="h4 text-gray1 md:h3">
                    Mari menjadi bagian Sieko
                  </h5>

                  <p className="p2 mb-4 text-gray-2 md:text-xl">
                    Memberikan manfaat demi kepentingan bersama & memajukan
                    perekonomian bangsa
                  </p>

                  <form action="" className="flex flex-col gap-3">
                    <div className="flex flex-col gap-3 md:flex-row md:justify-between">
                      <input
                        type="text"
                        placeholder="Nama Depan"
                        className="p2 w-full rounded-md border border-gray-2 bg-white-2 p-4 placeholder-gray-2"
                      />
                      <input
                        type="text"
                        placeholder="Nama Belakang"
                        className="p2 w-full rounded-md border border-gray-2 bg-white-2 p-4 placeholder-gray-2"
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

                    <Button
                      variant="secondary"
                      className="flex items-center gap-2 bg-green-1 md:py-6"
                    >
                      <Link
                        href="/"
                        className="font-aeonik text-base font-bold text-white-1 md:text-lg"
                      >
                        Login
                      </Link>
                    </Button>

                    <Button
                      variant="secondary"
                      className="flex items-center gap-2 border border-green-1 md:py-6"
                    >
                      <Link
                        href="/"
                        className="font-aeonik text-base font-bold text-green-1 md:text-lg"
                      >
                        Sign up
                      </Link>
                    </Button>

                    <Button
                      variant="secondary"
                      className="flex items-center gap-1 border border-gray-1 md:py-6"
                    >
                      <Google />

                      <Link
                        href="/"
                        className="font-aeonik text-base text-gray-1 md:text-lg"
                      >
                        Login dengan google
                      </Link>
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Login;
