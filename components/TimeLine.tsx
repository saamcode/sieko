import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";
import {
  perjalanan1,
  perjalanan2,
  perjalanan3,
  perjalanan4,
} from "@/public/images";

export function TimeLine() {
  const data = [
    {
      title: "2021",
      content: (
        <div>
          <Image src={perjalanan1} alt="img" className="rounded-t-lg" />
          <h3 className="mt-6 font-aeonik text-lg font-bold text-gray-1 md:text-4xl">
            Awal berdirinya Sieko
          </h3>
          <p className="p2 md:p-desk mb-6 mt-2 text-gray-2 md:mt-4">
            Sieko didirikan oleh Ahmad Zuha, seorang software engineer sekaligus
            wirausahawan. Dia hidup dari keluarga petani, tetangga dan
            saudaranya pun mayoritas petani dan pelaku UMKM. Dia resah terhadap
            kondisi ekonomi masyarakat di lingkungannya, banyak dari mereka yang
            kehidupannya kurang memadai, bisnisnya pun tidak berkembang. Oleh
            karena itu dia menciptakan Sieko, yaitu sebuah platform yang
            mewadahi serta memfasilitasi para petani, peternak, dan umkm supaya
            bisnisnya bisa berkembang pesat.
          </p>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <Image src={perjalanan2} alt="img" className="rounded-t-lg" />
          <h3 className="mt-6 font-aeonik text-lg font-bold text-gray-1 md:text-4xl">
            Kantor pertama Sieko
          </h3>
          <p className="p2 md:p-desk mb-6 mt-2 text-gray-2 md:mt-4">
            Berawal dari garasi rumah teman, Zuha mulai merancang konsep Sieko
            bersama 2 temannya. Dalam tahun pertama Sieko hanya mendapatkan 3
            mitra dan 2 pelaku UMKM.
          </p>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <Image src={perjalanan3} alt="img" className="rounded-t-lg" />
          <h3 className="mt-6 font-aeonik text-lg font-bold text-gray-1 md:text-4xl">
            Awal keberhasilan Sieko
          </h3>
          <p className="p2 md:p-desk mb-6 mt-2 text-gray-2 md:mt-4">
            Sieko mendapatkan suntikan dana dari investor sebesar 20M. Dan kami
            memanfaatkan itu untuk membangun kantor, riset, dan promosi besar
            besaran. Pada tahun ini Sieko mendapatkan lebih dari 100 mitra dan
            2000 pelaku UMKM.
          </p>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <Image src={perjalanan4} alt="img" className="rounded-t-lg" />
          <h3 className="mt-6 font-aeonik text-lg font-bold text-gray-1 md:text-4xl">
            Perkembangan hingga 15x lipat
          </h3>
          <p className="p2 md:p-desk mb-6 mt-2 text-gray-2 md:mt-4">
            Pada Juni 2024 Sieko berhasil menggandeng lebih dari 1500 mitra dan
            30.000 pelaku UMKM. Sieko juga mendapatkan penghargaan medal
            “Startup dengan dampak terbesar terhadap para Petani & UMKM”.
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="grid-mbl md:grid-desk col-sec col-comp">
      <h1 className="h1 text-center text-gray-1">Perjalanan Sieko</h1>

      <Timeline data={data} />
    </div>
  );
}
