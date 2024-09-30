import React from "react";
import {
  programBg,
  programImg,
  program1,
  program2,
  program3,
} from "@/public/images";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { AlurKerja } from "@/components/AlurKerja";
import Download from "@/components/Download";
import BlogItem from "@/components/BlogItem";

const Program = () => {
  return (
    <>
      <main className="grid-mbl md:grid-desk">
        <section
          style={{
            backgroundImage: `url(${programBg.src})`,
          }}
          className="grid-mbl md:grid-desk absolute left-0 right-0 top-0 min-h-svh bg-cover bg-center bg-no-repeat"
        >
          <h1 className="h1 mt-52 text-white-1 md:mt-64">
            Menjadi Pelopor Inovasi <br />
            Dalam Gerakan Peduli UMKM
          </h1>
        </section>

        <section className="tujuan-kami col-sec mt-[750px] md:mt-[850px] 2xl:mt-[1050px]">
          <div className="col-comp">
            <h3 className="h1 2xl:h1 text-center text-gray-1 md:text-7xl">
              Didorong oleh <span className="text-green-1">dampak.</span>
              <br />
              Diberdayakan oleh <span className="text-green-1">inovasi.</span>
              <br />
              Digerakan oleh <span className="text-green-1">kepedulian.</span>
            </h3>

            <div className="flex w-full flex-col items-center md:flex-row md:justify-between md:gap-10">
              <Image src={programImg} alt="img" className="flex-1" />

              <div className="p2 col-p md:p-desk mt-10 flex-1 text-gray-2 md:mt-0">
                <p>
                  Sieko bukan hanya perusahaan, kami adalah gerakan, bergabung
                  dengan kami bukan sekedar mencari gaji atau jabatan, inilah
                  kesempatan untuk menorehkan garis biru pada dunia.
                </p>
                <p>
                  Kami punya tujuan yang jelas, percaya kepada sesama, menjalin
                  hubungan yang harmonis dan kompak. Sebagai bagian dari
                  komunitas yang erat, kamu akan berkolaborasi, berinovasi, dan
                  belajar dalam solidaritas.
                </p>
                <p>
                  Mari bergabung dengan kami, menjadi bagian dari team yang akan
                  memajukan perokonomian bangsa, dan memberikan keadilan kepada
                  semua aspek, serta menciptakan masa depan yang lebih cerah.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="col-sec">
          <div className="col-comp">
            <h1 className="h1 text-gray-1">Program Sieko</h1>

            <div className="flex flex-col gap-6 md:flex-row md:justify-between">
              <div className="flex">
                <div className="item-1 flex flex-1 flex-col items-start justify-center rounded-l-lg bg-green-1 px-6 py-20">
                  <h4 className="h4 text-white-1">Pelatihan</h4>

                  <p className="p2 mb-4 text-white-2">
                    Program pembelajaran bisnis bagi UMKM
                  </p>

                  <Button
                    variant="secondary"
                    className="rounded-full bg-gray-1 font-aeonik text-base leading-[1] text-white-1"
                  >
                    Daftar Sekarang
                  </Button>
                </div>

                <Image
                  src={program1}
                  alt="program1"
                  className="w-[150px] rounded-r-lg 2xl:w-[300px]"
                />
              </div>

              <div className="flex">
                <div className="item-1 flex flex-1 flex-col items-start justify-center rounded-l-lg bg-green-1 px-6 py-20">
                  <h4 className="h4 text-white-1">Pendanaan</h4>

                  <p className="p2 mb-4 text-white-2">
                    Program pengajuan permodalan untuk UMKM
                  </p>

                  <Button
                    variant="secondary"
                    className="rounded-full bg-gray-1 font-aeonik text-base leading-[1] text-white-1"
                  >
                    Daftar Sekarang
                  </Button>
                </div>

                <Image
                  src={program2}
                  alt="program1"
                  className="w-[150px] rounded-r-lg 2xl:w-[300px]"
                />
              </div>

              <div className="flex">
                <div className="item-1 flex flex-1 flex-col items-start justify-center rounded-l-lg bg-green-1 px-6 py-20">
                  <h4 className="h4 text-white-1">Kemitraan</h4>

                  <p className="p2 mb-4 text-white-2">
                    Program kemitraan bagi para petani dan peternak
                  </p>

                  <Button
                    variant="secondary"
                    className="rounded-full bg-gray-1 font-aeonik text-base leading-[1] text-white-1"
                  >
                    Daftar Sekarang
                  </Button>
                </div>

                <Image
                  src={program3}
                  alt="program1"
                  className="w-[150px] rounded-r-lg 2xl:w-[300px]"
                />
              </div>
            </div>
          </div>
        </section>

        <AlurKerja />
        <Download />
        <BlogItem />
      </main>
    </>
  );
};

export default Program;
