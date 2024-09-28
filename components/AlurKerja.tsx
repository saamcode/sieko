"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";
import { alur1, alur2, alur3, alur4 } from "@/public/images";

const content = [
  {
    title: "Supplier",
    description:
      "Sieko mencari dan mengumpulkan para petani & peternak untuk menjadi supplier bagi para UMKM. Sehingga mereka bisa menjual hasil panennya dengan harga pasar, bukan harga tengkulak yang terlalu murah",
    content: (
      <div className="flex h-full w-full items-center justify-center">
        <Image
          src={alur1}
          className="w-[600px] rounded-lg md:w-[260px]"
          alt="blog1"
        />
      </div>
    ),
  },
  {
    title: "Sieko",
    description:
      "Sieko menjadi platform/wadah ekosistem wirausaha. Sieko ingin mewadahi serta memfasilitasi para petani dan peternak dan pelaku UMKM supaya bisa berwirausaha dengan efektif dan efisien",
    content: (
      <div className="flex h-full w-full items-center justify-center">
        <Image
          src={alur2}
          className="w-[600px] rounded-lg md:w-[260px]"
          alt="blog1"
        />
      </div>
    ),
  },
  {
    title: "UMKM",
    description:
      "Sieko mencari dan mengumpulkan para pelaku UMKM supaya mereka bisa mendapatkan bahan baku dengan mudah, murah, dan berkualitas. Sieko juga mempunyai aplikasi yang dapat mempermudah pemasaran",
    content: (
      <div className="flex h-full w-full items-center justify-center">
        <Image
          src={alur3}
          className="w-[600px] rounded-lg md:w-[260px]"
          alt="blog1"
        />
      </div>
    ),
  },
  {
    title: "Customer",
    description:
      "Customer juga bisa membeli bahan baku yang fresh dari para Supplier dengan harga eceran atau membeli produk siap saji dari para UMKM dengan harga yang lebih terjangkau, Customer juga bisa mencari penjual terdekat dari lokasi mereka",
    content: (
      <div className="flex h-full w-full items-center justify-center">
        <Image
          src={alur4}
          className="w-[600px] rounded-lg md:w-[260px]"
          alt="blog1"
        />
      </div>
    ),
  },
];
export function AlurKerja() {
  return (
    <div className="grid-mbl md:grid-desk col-sec col-comp">
      <h1 className="h1 text-center text-gray-1">
        Alur Kerja <br /> Ekosistem Sieko
      </h1>

      <StickyScroll content={content} />
    </div>
  );
}
