import localFont from "next/font/local";

const Brico = localFont({
  src: [{ path: "../public/fonts/brico/brico.ttf" }],
  variable: "--font-brico",
});

const Aeonik = localFont({
  src: [
    {
      path: "../public/fonts/aeonik/aeonik-regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/aeonik/aeonik-bold.otf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-aeonik",
});

export { Brico, Aeonik };
