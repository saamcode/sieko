import React from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { ekofarm, ekoplier, ekoseller } from "@/public/images";

const KelolaBisnismu = () => {
  return (
    <>
      <section className="grid-mbl col-sec md:grid-desk">
        <div className="col-comp">
          <h3 className="h1 text-center text-gray-1">
            Kelola Bisnismu <br /> Dengan Lebih Mudah
          </h3>

          <div className="card flex flex-col items-center gap-5 md:flex-row md:items-stretch md:justify-between">
            <div className="item1 flex items-center justify-between gap-5 rounded-lg border border-gray-1 p-5 md:w-full md:items-start">
              <div className="flex-1">
                <div className="title">
                  <p className="md:h4 mb-4 font-aeonik text-lg font-bold text-gray-1">
                    ekoFarm
                  </p>
                </div>
                <div className="description">
                  <p className="p2 md:p1 mb-2 text-gray-2">
                    Membantu para petani & peternak mengelola tanaman dan
                    ternaknya. Mulai dari membeli pakan, pupuk, irigasi, sistem
                    monitoring panen dan kondisi tanaman atau ternak, hingga
                    platform untuk menjual hasil panen.
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <a href="/" className="p3 md:p2 text-green-1">
                    Baca lebih lanjut
                  </a>
                  <ChevronRight
                    className="h-[14px] w-[14px] md:h-[16px] md:w-[16px]"
                    color="#00845f"
                  />
                </div>
              </div>
              <div className="my-auto">
                <Image src={ekofarm} alt="img" className="w-20 md:w-24" />
              </div>
            </div>
            <div className="item2 flex items-center justify-between gap-5 rounded-lg border border-gray-1 p-5 md:w-full md:items-start">
              <div className="flex-1">
                <div className="title">
                  <p className="md:h4 mb-4 font-aeonik text-lg font-bold text-gray-1">
                    ekoPlier
                  </p>
                </div>
                <div className="description">
                  <p className="p2 md:p1 mb-2 text-gray-2">
                    Membantu para supplier mengelola stok produk, monitoring
                    masa kadaluwarsa produk, pengiriman barang dan memasarkan
                    produknya dengan strategi marketing yang benar.
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <a href="/" className="p3 md:p2 text-green-1">
                    Baca lebih lanjut
                  </a>
                  <ChevronRight
                    className="h-[14px] w-[14px] md:h-[16px] md:w-[16px]"
                    color="#00845f"
                  />
                </div>
              </div>
              <div className="relative my-auto">
                <Image src={ekoplier} alt="img" className="w-20 md:w-24" />
              </div>
            </div>
            <div className="item3 flex items-center justify-between gap-5 rounded-lg border border-gray-1 p-5 md:w-full md:items-start">
              <div className="flex-1">
                <div className="title">
                  <p className="md:h4 mb-4 font-aeonik text-lg font-bold text-gray-1">
                    ekoSeller
                  </p>
                </div>
                <div className="description">
                  <p className="p2 md:p1 mb-2 text-gray-2">
                    Membantu UMKM agar bisa menjadi first level buyer, sehingga
                    mereka bisa mendapatkan bahan baku dengan harga murah dan
                    kualitas yang terjaga. Ada juga fitur filter by location
                    yang mempermudah pencarian supplier terdekat.
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <a href="/" className="p3 md:p2 text-green-1">
                    Baca lebih lanjut
                  </a>
                  <ChevronRight
                    className="h-[14px] w-[14px] md:h-[16px] md:w-[16px]"
                    color="#00845f"
                  />
                </div>
              </div>
              <div className="relative my-auto">
                <Image src={ekoseller} alt="img" className="w-20 md:w-24" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default KelolaBisnismu;
