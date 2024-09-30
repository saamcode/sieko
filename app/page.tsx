import React from "react";
import Hero from "@/components/Hero";
import TujuanKami from "@/components/TujuanKami";
import KelolaBisnismu from "@/components/KelolaBisnismu";
import Download from "@/components/Download";
import { TimeLine } from "@/components/TimeLine";
import Testimonials from "@/components/Testimonials";
import BlogItem from "@/components/BlogItem";
import { AlurKerja } from "@/components/AlurKerja";
import { Globe } from "@/components/Globe";

const Home = () => {
  return (
    <>
      <main>
        <Hero />
        <TujuanKami />
        <Globe />
        <TimeLine />
        <KelolaBisnismu />
        <AlurKerja />
        <Testimonials />
        <Download />
        <BlogItem />
      </main>
    </>
  );
};

export default Home;
