import React from "react";
import { heroBg } from "@/public/images";
import { Button } from "@/components/ui/button";
import HeroFeatures from "./HeroFeatures";

import NumberTicker from "@/components/ui/number-ticker";

const Hero = () => {
  return (
    <>
      <section
        style={{
          backgroundImage: `url(${heroBg.src})`,
        }}
        className="hero-section grid-mbl absolute left-0 right-0 top-0 min-h-svh bg-cover bg-top bg-no-repeat"
      >
        <h1 className="h1 mt-20 text-center text-white-1 md:mt-36">
          Bantu UMKM <br /> kembangin bisnisnya <br /> sampe sukses
        </h1>

        <p className="md:h2 mt-1 text-center font-aeonik text-base font-bold text-white-2 lg:py-3">
          Telah membantu lebih dari {""}
          <NumberTicker
            value={30000}
            className="md:h2 font-aeonik text-base font-bold text-white-2"
          />
          {""} UMKM
        </p>

        <div className="hero-cta mt-4 text-center lg:pb-3">
          <Button
            variant="secondary"
            className="p2 bg-green-1 py-4 text-white-1 md:px-7 md:py-6 md:text-2xl"
          >
            Gabung Sekarang
          </Button>

          <Button
            variant="link"
            className="font-aeonik text-sm font-bold text-white-1 md:text-lg"
          >
            Apa itu Sieko?
          </Button>
        </div>

        <HeroFeatures />
      </section>
    </>
  );
};

export default Hero;
