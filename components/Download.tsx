import React from "react";
import Image from "next/image";
import { downloadImg } from "@/public/images";
import { qr, playstore, appstore } from "@/public/images";

const Download = () => {
  return (
    <>
      <section className="grid-mbl col-sec md:grid-desk 2xl:px-[300px]">
        <div className="col-comp">
          <h3 className="h1 text-center text-gray-1 md:hidden">
            Download Sekarang
          </h3>

          <div className="flex flex-col items-center md:flex-row md:justify-center md:gap-28">
            <Image
              src={downloadImg}
              alt="img"
              className="mx-auto mb-5 w-44 flex-1 md:mb-0 md:w-[346px]"
            />

            <div className="flex-1">
              <h3 className="h2 mb-4 hidden text-center text-gray-1 md:flex">
                Download Sekarang
              </h3>

              <p className="p2 md:p-desk text-gray-2">
                Sieko merupakan aplikasi super lengkap yang bisa bantu kembangin
                usaha kamu, mulai dari marketing, branding, selling, mengatur
                keuangan dan stok produk, hingga sistem monitoring kondisi
                ternak/tanaman, irigasi, dan masih banyak fitur canggih dan
                menarik lainnya.
              </p>

              <div className="mt-6 flex items-center justify-center gap-4 md:justify-start">
                <Image
                  src={qr}
                  alt="qr"
                  className="w-16 cursor-pointer md:w-28"
                />
                <div className="flex flex-col gap-4">
                  <Image
                    src={playstore}
                    alt="playstore"
                    className="w-20 cursor-pointer md:w-32"
                  />
                  <Image
                    src={appstore}
                    alt="apptore"
                    className="w-20 cursor-pointer md:w-32"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Download;
