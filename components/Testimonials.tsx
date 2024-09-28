import React from "react";
import Testimoni from "./Testimoni";

import Marquee from "react-fast-marquee";

const Testimonials = () => {
  return (
    <>
      <section className="col-comp col-sec">
        <h1 className="h1 text-center text-gray-1">
          Apa Kata <br /> Client Sieko
        </h1>
        <Marquee pauseOnHover direction="left" pauseOnClick speed={100}>
          <Testimoni />
        </Marquee>
      </section>
    </>
  );
};

export default Testimonials;
