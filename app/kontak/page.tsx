import React from "react";
import Form from "@/components/Form";
import { kontakBg } from "@/public/images";

const Kontak = () => {
  return (
    <>
      <main className="grid-mbl md:grid-desk">
        <section
          style={{
            backgroundImage: `url(${kontakBg.src})`,
          }}
          className="grid-mbl md:grid-desk absolute left-0 right-0 top-0 min-h-svh bg-cover bg-center bg-no-repeat"
        >
          <h1 className="h1 mt-52 text-white-1 md:mt-64">
            Sampaikan Keluh Kesahmu Mari Kita Selesaikan Bersama
          </h1>
        </section>
        <div className="mt-[750px] md:mt-[850px] 2xl:mt-[1050px]"></div>
        <Form />
      </main>
    </>
  );
};

export default Kontak;
