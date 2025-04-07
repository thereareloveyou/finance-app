/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      beige: {
        100: "#F8F4F0",
        500: "#98908B",
      },
      grey: {
        100: "#F2F2F2",
        300: "#B3B3B3",
        500: "#696868",
        900: "#201F24",
      },
      purple: {
        100: "#AF81BA",
        300: "#826CB0",
      },
      green: "#277C78",
      yellow: "#F2CDAC",
      cyan: "#82C9D7",
      navy: "#626070",
      red: "#C94736",
      turquoise: "#597C7C",
      brown: "#93674F",
      magenta: "#934F6F",
      blue: "#3F82B2",
      navyGray: "#97A0AC",
      army: "#7F9161",
      gold: "#CAB361",
      orange: "#BE6C49",
      white: "#FFFFFF",
    },
    fontFamily: {
      regular: ["PublicSans-Regular", "sans-serif"],
      bold: ["PublicSans-Bold", "sans-serif"],
    },
    extend: {
      dropShadow: {
        block: "0 4px 4px rgba(0, 0, 0, 0.15)",
      }
    },
  },
  plugins: [],
};
