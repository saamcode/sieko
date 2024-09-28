import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Handshake, ShieldCheck, Smartphone, NotebookPen } from "lucide-react";

const HeroFeatures = () => {
  return (
    <>
      <section className="grid-mbl lg:grid-desk">
        <Accordion
          type="single"
          collapsible
          className="mt-10 flex flex-col items-baseline gap-4 lg:flex-row lg:justify-between lg:gap-5"
        >
          <AccordionItem
            value="item-1"
            className="border-white2 w-full rounded-lg border px-4"
          >
            <AccordionTrigger className="text-white-1">
              <div className="flex items-center gap-2">
                <Handshake size={36} className="rounded-full bg-green-1 p-2" />

                <p className="p2 md:p1">Kemitraan</p>
              </div>
            </AccordionTrigger>

            <AccordionContent>
              <p className="p3 md:p2 text-white-2">
                Sieko mempunyai lebih dari 30.000 mitra yang saling terhubung
                dalam satu ekosistem
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-2"
            className="border-white2 w-full rounded-lg border px-4"
          >
            <AccordionTrigger className="text-white-1">
              <div className="flex items-center gap-2">
                <ShieldCheck
                  size={36}
                  className="rounded-full bg-green-1 p-2"
                />

                <p className="p2 md:p1">Keamanan</p>
              </div>
            </AccordionTrigger>

            <AccordionContent>
              <p className="p3 md:p2 text-white-2">
                Sieko mempunyai sistem yang aman dan dilindungi badan hukum yang
                sah
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-3"
            className="border-white2 w-full rounded-lg border px-4"
          >
            <AccordionTrigger className="text-white-1">
              <div className="flex items-center gap-2">
                <Smartphone size={36} className="rounded-full bg-green-1 p-2" />

                <p className="p2 md:p1">Aplikasi</p>
              </div>
            </AccordionTrigger>

            <AccordionContent>
              <p className="p3 md:p2 text-white-2">
                Sieko mempunyai aplikasi yang dapat mempermudah proses berbisnis
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-4"
            className="border-white2 w-full rounded-lg border px-4"
          >
            <AccordionTrigger className="text-white-1">
              <div className="flex items-center gap-2">
                <NotebookPen
                  size={36}
                  className="rounded-full bg-green-1 p-2"
                />

                <p className="p2 md:p1">Pelatihan</p>
              </div>
            </AccordionTrigger>

            <AccordionContent>
              <p className="p3 md:p2 text-white-2">
                Sieko mempunyai program pelatihan wirausaha bagi UMKM
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </>
  );
};

export default HeroFeatures;
