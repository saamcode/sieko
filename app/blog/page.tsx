import React from "react";
import { blogBg, blogImg } from "@/public/images";
import Image from "next/image";
import BlogItem from "@/components/BlogItem";
import { blog4, blog5, blog6 } from "@/public/images";
import Download from "@/components/Download";

const Blog = () => {
  return (
    <>
      <main className="grid-mbl md:grid-desk">
        <section
          style={{
            backgroundImage: `url(${blogBg.src})`,
          }}
          className="grid-mbl md:grid-desk absolute left-0 right-0 top-0 min-h-svh bg-cover bg-center bg-no-repeat"
        >
          <h1 className="h1 mt-52 text-white-1 md:mt-64">
            Info Seputar Pertanian, <br /> Peternakan, & UMKM
          </h1>
        </section>

        <div className="col-comp col-sec tujuan-kami mt-[750px] md:mt-[850px] 2xl:mt-[1050px]">
          <h1 className="h1 text-gray-1">Jelajahi Blog Terkait</h1>

          <div className="items-start gap-5 md:flex">
            <div className="image flex-1">
              <Image src={blogImg} alt="img" className="w-full" />
            </div>

            <div className="text flex-1">
              <p className="mt-2 font-aeonik text-base font-bold text-gray-2 md:text-2xl">
                UMKM | 15 April 2024
              </p>

              <h4 className="h4 md:h2 mt-3 text-gray-1">
                UMKM Menyumbang 8000T
              </h4>

              <p className="p2 md:p1 mt-2 text-gray-2">
                Berdasarkan data dari Kementerian Koperasi dan Usaha Kecil dan
                Menegah (Kemenkop UMKM) pada bulan Maret 2021, kontribusi UMKM
                terhadap PDB sebesar 61,07% atau senilai Rp8.573,89 triliun.
              </p>
            </div>
          </div>
        </div>

        <BlogItem />

        <div className="blog-items col-sec flex flex-col gap-10 px-4 md:flex-row md:items-stretch md:justify-between md:px-20">
          <div className="item1 blog peternakan flex-1">
            <Image src={blog4} alt="blog1" className="rounded-lg" />

            <p className="mb-2 mt-4 font-aeonik text-sm font-bold text-gray-2">
              PETERNAKAN | 4 April 2023
            </p>

            <h5 className="h5 md:h4 mb-1 text-gray-1">
              Mengenal Penyakit Kambing dan Cara Mengatasinya
            </h5>

            <p className="p2 md:p1 text-gray-2">
              Penyakit pada kambing merupakan hal yang umum terjadi dan dapat
              mengancam produktivitas peternakan.
            </p>
          </div>

          <div className="item2 blog umkm flex-1">
            <Image src={blog5} alt="blog2" className="rounded-lg" />

            <p className="mb-2 mt-4 font-aeonik text-sm font-bold text-gray-2">
              UMKM | 19 Maret 2023
            </p>

            <h5 className="h5 md:h4 mb-1 text-gray-1">
              Cara Menghitung Laba Dari Produk Minuman
            </h5>

            <p className="p2 md:p1 text-gray-2">
              Efisiensi dalam produksi dapat membantu mengurangi HPP dan
              meningkatkan laba.
            </p>
          </div>

          <div className="item3 blog pertanian flex-1">
            <Image src={blog6} alt="blog3" className="rounded-lg" />

            <p className="mb-2 mt-4 font-aeonik text-sm font-bold text-gray-2">
              PERTANIAN | 21 Januari 2022
            </p>

            <h5 className="h5 md:h4 mb-1 text-gray-1">
              Cara Membuat Pupuk Organik
            </h5>

            <p className="p2 md:p1 text-gray-2">
              Pupuk organik membantu memperbaiki struktur tanah, membuatnya
              lebih gembur, dan meningkatkan aerasi serta drainase tanah.
            </p>
          </div>
        </div>

        <Download />
      </main>
    </>
  );
};

export default Blog;
