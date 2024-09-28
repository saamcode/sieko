import React from "react";

import { perusahaanBg } from "@/public/images";

import TujuanKami from "@/components/TujuanKami";
import { TimeLine } from "@/components/TimeLine";
import Download from "@/components/Download";
import BlogItem from "@/components/BlogItem";

const Perusahan = () => {
  return (
    <>
      <main className="grid-mbl md:grid-desk">
        <section
          style={{
            backgroundImage: `url(${perusahaanBg.src})`,
          }}
          className="grid-mbl md:grid-desk absolute left-0 right-0 top-0 min-h-svh bg-cover bg-center bg-no-repeat"
        >
          <h1 className="h1 mt-52 text-white-1 md:mt-64">
            Perjalanan Sieko Dalam Menghadapi Tantangan & Meraih Pencapaian
          </h1>
        </section>

        <TujuanKami />
        <div className="mt-[100px]"></div>
        <TimeLine />
        <Download />
        <BlogItem />
      </main>
    </>
  );
};

export default Perusahan;
