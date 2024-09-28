import React from "react";
import { solusiBg, solusiImg } from "@/public/images";
import Image from "next/image";
import KelolaBisnismu from "@/components/KelolaBisnismu";
import Download from "@/components/Download";
import BlogItem from "@/components/BlogItem";

const Solusi = () => {
  return (
    <>
      <main>
        <section
          style={{
            backgroundImage: `url(${solusiBg.src})`,
          }}
          className="grid-mbl md:grid-desk absolute left-0 right-0 top-0 min-h-svh bg-cover bg-center bg-no-repeat"
        >
          <h1 className="h1 mt-52 text-white-1 md:mt-64">
            Membangun Ekosistem <br /> UMKM Terpadu <br /> Melalui Teknologi
          </h1>
        </section>

        <section className="tujuan-kami grid-mbl md:grid-desk col-sec mt-[750px] md:mt-[850px] 2xl:mt-[1050px]">
          <div className="col-comp">
            <h3 className="h1 text-center text-gray-1">
              Memberdayakan Kemajuan <br />
              Melalui Teknologi
            </h3>

            <div className="flex flex-col items-center md:flex-row md:gap-10">
              <Image src={solusiImg} alt="img" />

              <div className="p2 col-p md:p-desk mt-10 text-gray-2 md:mt-0">
                <p>
                  Indonesia merupakan negara agraris terbesar ke 2 di dunia. Ada
                  3 fase perekonomian yang harus dilewati agar suatu negara bisa
                  maju. Fase pertanian, fase manufaktur, dan fase jasa. Pada
                  fase pertama saja Indonesia sudah gagal, banyak Petani yang
                  hidupnya jauh dari kata sejahtera, banyak sekali permasalahan
                  yang dihadapi para Petani di Indonesia, mulai dari pupuk
                  hingga para mafia.
                </p>
                <p>
                  Tantangan inilah yang mendorong Sieko menciptakan solusi
                  sistematis dan inovatif yang memfasilitasi seluruh Petani di
                  Indonesia. Produk dan layanan Sieko bertujuan memberikan
                  dukungan penuh kepada para Petani dalam memajukan bisnis dan
                  proses pertaniannya.
                </p>
                <p>
                  Kami ingin agar para Petani bisa mendapatkan hak-nya secara
                  utuh.
                </p>
              </div>
            </div>
          </div>
        </section>

        <KelolaBisnismu />
        <Download />
        <BlogItem />
      </main>
    </>
  );
};

export default Solusi;
