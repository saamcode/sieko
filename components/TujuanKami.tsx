import React from "react";
import Image from "next/image";
import { tujuanKamiImg } from "@/public/images";

const TujuanKami = () => {
  return (
    <>
      <section className="tujuan-kami mt-[750px] md:mt-[850px] 2xl:mt-[1050px]">
        <div className="col-comp">
          <h3 className="h1 text-center text-gray-1">Tujuan Kami</h3>

          <div className="flex flex-col items-center md:flex-row md:gap-10">
            <Image src={tujuanKamiImg} alt="img" />

            <div className="p2 col-p md:p-desk mt-10 text-gray-2 md:mt-0">
              <p>
                Berdasarkan data dari Kementerian Koperasi dan Usaha Kecil dan
                Menegah (Kemenkop UMKM) pada bulan Maret 2021, kontribusi UMKM
                terhadap PDB sebesar 61,07% atau senilai Rp8.573,89 triliun.
              </p>
              <p>
                UMKM sangat berperan penting bagi perekonomian Indonesia, namun
                masih banyak pelaku UMKM yang masih belum terlalu paham mengenai
                ilmu bisnis.
              </p>
              <p>
                Oleh karena itu, sieko ingin mengedukasi serta memfasilitasi
                para pelaku UMKM agar bisa mengembangkan bisnisnya dengan
                efektif dan efisien.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TujuanKami;
