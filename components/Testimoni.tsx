import React from "react";
import Image from "next/image";
import { testi1, testi2, testi3 } from "@/public/images";

const Testimoni = () => {
  return (
    <>
      <div className="flex flex-row">
        <div className="mx-6 flex w-[300px] flex-col gap-5 rounded-lg border border-green-1 p-4 md:mx-8 md:w-[800px] md:p-6">
          <p className="p2 md:p-desk text-gray-2">
            “Sieko sangat membuka pemikiran saya terkait dunia bisnis. Setelah
            ikut pelatihan saya jadi paham tentang marketing dan branding yang
            benar”
          </p>

          <div className="flex flex-col gap-4">
            <Image src={testi1} alt="profile" className="w-14 md:w-20" />

            <div className="flex flex-col gap-1">
              <p className="font-aeonik text-base font-bold text-gray-1 md:text-2xl">
                Aris Setiawan
              </p>

              <p className="p3 md:p1 text-gray-2">
                Pedagang keripik kentang asal Tasikmalaya
              </p>
            </div>
          </div>
        </div>

        <div className="mx-6 flex w-[300px] flex-col gap-5 rounded-lg border border-green-1 p-4 md:mx-8 md:w-[800px] md:p-6">
          <p className="p2 md:p-desk text-gray-2">
            “Sieko sangat mempermudah saya dalam mengelola stok produk dagangan
            saya. Aplikasinya sangat membantu dalam proses wirausaha”
          </p>

          <div className="flex flex-col gap-4">
            <Image src={testi2} alt="profile" className="w-14 md:w-20" />

            <div className="flex flex-col gap-1">
              <p className="font-aeonik text-base font-bold text-gray-1 md:text-2xl">
                Johan Veshnu
              </p>

              <p className="p3 md:p1 text-gray-2">
                Pedagang baju online asal Bandung
              </p>
            </div>
          </div>
        </div>

        <div className="mx-6 flex w-[300px] flex-col gap-5 rounded-lg border border-green-1 p-4 md:mx-8 md:w-[800px] md:p-6">
          <p className="p2 md:p-desk text-gray-2">
            “Aplikasi Sieko sangat mudah digunakan bagi orang tua seperti saya.
            Saya jadi bisa memasarkan biji kopi saya dengan mudah”
          </p>

          <div className="flex flex-col gap-4">
            <Image src={testi3} alt="profile" className="w-14 md:w-20" />

            <div className="flex flex-col gap-1">
              <p className="font-aeonik text-base font-bold text-gray-1 md:text-2xl">
                Eko Mulyono
              </p>

              <p className="p3 md:p1 text-gray-2">
                Petani kopi asal Banjarnegara
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimoni;
