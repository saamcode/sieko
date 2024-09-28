/** @type {import('tailwindcss').Config} */
export const content = [
  "./pages/**/*.{ts,tsx}",
  "./components/**/*.{ts,tsx}",
  "./app/**/*.{ts,tsx}",
  "./src/**/*.{ts,tsx}",
];
export const theme = {
  extend: {
    fontFamily: {
      brico: ["var(--font-brico)"],
      aeonik: ["var(--font-aeonik)"],
    },
    colors: {
      white: {
        1: "#F4F3F3",
        2: "#D4D4D4",
      },
      green: {
        1: "#00845F",
        2: "#09895B",
        3: "#1D9F55",
        4: "#1CCF64",
      },
      gray: {
        1: "#3A3939",
        2: "#4C4B4B",
      },
    },
    keyframes: {
      "accordion-down": {
        from: { height: "0" },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: "0" },
      },
    },
    animation: {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
    },
  },
};
export const plugins = [
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require("tailwindcss-animate"),
  "prettier-plugin-tailwindcss",
];
