"use client";

import React from "react";
import { blog1, blog2, blog3 } from "@/public/images";
import Image from "next/image";

const showAll = function () {
  const blog = document.querySelectorAll(".blog");

  for (let i = 0; i < blog.length; i++) {
    blog[i].classList.remove("hidden");
  }
};

const showUMKM = function () {
  const umkm = document.querySelectorAll(".umkm");
  const pertanian = document.querySelectorAll(".pertanian");
  const peternakan = document.querySelectorAll(".peternakan");

  for (let i = 0; i < umkm.length; i++) {
    umkm[i].classList.remove("hidden");
  }
  for (let i = 0; i < pertanian.length; i++) {
    pertanian[i].classList.add("hidden");
  }
  for (let i = 0; i < peternakan.length; i++) {
    peternakan[i].classList.add("hidden");
  }
};

const showPertanian = function () {
  const pertanian = document.querySelectorAll(".pertanian");
  const umkm = document.querySelectorAll(".umkm");
  const peternakan = document.querySelectorAll(".peternakan");

  for (let i = 0; i < pertanian.length; i++) {
    pertanian[i].classList.remove("hidden");
  }
  for (let i = 0; i < umkm.length; i++) {
    umkm[i].classList.add("hidden");
  }
  for (let i = 0; i < peternakan.length; i++) {
    peternakan[i].classList.add("hidden");
  }
};

const showPeternakan = function () {
  const pertanian = document.querySelectorAll(".pertanian");
  const umkm = document.querySelectorAll(".umkm");
  const peternakan = document.querySelectorAll(".peternakan");

  for (let i = 0; i < peternakan.length; i++) {
    peternakan[i].classList.remove("hidden");
  }
  for (let i = 0; i < umkm.length; i++) {
    umkm[i].classList.add("hidden");
  }
  for (let i = 0; i < pertanian.length; i++) {
    pertanian[i].classList.add("hidden");
  }
};

const BlogItem = () => {
  return (
    <>
      <section className="grid-mbl md:grid-desk col-sec col-comp">
        <h1 className="h1 text-center text-gray-1">Jelajahi Blog Terkait</h1>

        <div>
          <div className="mb-10 flex flex-row gap-4">
            <button onClick={showAll}>
              <p className="font-aeonik text-sm font-bold text-gray-1">Semua</p>
            </button>
            <button onClick={showPertanian}>
              <p className="font-aeonik text-sm font-bold text-gray-1">
                Pertanian
              </p>
            </button>
            <button onClick={showPeternakan}>
              <p className="font-aeonik text-sm font-bold text-gray-1">
                Peternakan
              </p>
            </button>
            <button onClick={showUMKM}>
              <p className="font-aeonik text-sm font-bold text-gray-1">UMKM</p>
            </button>
          </div>

          <div className="blog-items flex flex-col gap-10 md:flex-row md:items-stretch md:justify-between">
            <div className="item1 blog umkm flex-1">
              <Image src={blog1} alt="blog1" className="rounded-lg" />

              <p className="mb-2 mt-4 font-aeonik text-sm font-bold text-gray-2">
                UMKM | 21 Juni 2022
              </p>

              <h5 className="h5 md:h4 mb-1 text-gray-1">4 Level Marketing</h5>

              <p className="p2 md:p1 text-gray-2">
                Tujuan utama dari marketing adalah meningkatkan penjualan.
                Dengan strategi marketing yang tepat, kita bisa menarik lebih
                banyak pelanggan dan meningkatkan omset bisnis.
              </p>
            </div>

            <div className="item2 blog pertanian flex-1">
              <Image src={blog2} alt="blog2" className="rounded-lg" />

              <p className="mb-2 mt-4 font-aeonik text-sm font-bold text-gray-2">
                PERTANIAN | 7 Maret 2023
              </p>

              <h5 className="h5 md:h4 mb-1 text-gray-1">
                Cara Memilih Benih Berkualitas
              </h5>

              <p className="p2 md:p1 text-gray-2">
                Benih berkualitas memiliki daya kecambah yang tinggi dan
                pertumbuhan yang seragam. Ini berarti tanaman akan tumbuh lebih
                cepat dan lebih sehat.
              </p>
            </div>

            <div className="item3 blog peternakan flex-1">
              <Image src={blog3} alt="blog3" className="rounded-lg" />

              <p className="mb-2 mt-4 font-aeonik text-sm font-bold text-gray-2">
                PETERNAKAN | 15 April 2024
              </p>

              <h5 className="h5 md:h4 mb-1 text-gray-1">
                Desain Ideal Kandang Sapi
              </h5>

              <p className="p2 md:p1 text-gray-2">
                Kandang yang dirancang dengan baik akan memberikan kenyamanan
                bagi sapi, sehingga mereka dapat tumbuh sehat dan produktif.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default BlogItem;
