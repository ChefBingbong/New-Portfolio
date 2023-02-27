const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }
    return `rgb(var(${variable}) / ${opacityValue})`;
  };
}

/** @type {import('tailwindcss').Config} \*/
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    boxShadow: {
      custom: "0 0 25px rgba(0, 0, 0, 0.2)",
    },

    colors: {
      // Override Tailwind CSS default colors
      primary: withOpacityValue("--primary-color"), // Use classes like `bg-primary/75`
      secondary: withOpacityValue("--secondary-color"),
      black: colors.black,
      white: colors.white,
      gray: colors.slate,
      green: colors.emerald,
      purple: colors.violet,
      yellow: colors.amber,
      pink: colors.fuchsia,
      red: colors.red,
      blue: colors.blue,
      transparent: "transparent",
      current: "currentColor",
      github: "var(--github-color)",
      linkedin: "var(--linkedin-color)",
      twitter: "var(--twitter-color)",
      facebook: "var(--facebook-color)",
      instagram: "var(--instagram-color)",
      hackerrank: "var(--hackerrank-color)",
      accent: "#DD3F7D",
      "accent-90": "#C43971",
      white: "#FAFAFA",
      "black-800": "#1C1D21",
      "black-700": "#25272C",
      "black-600": "#333333",
      "grey-500": "#666666",
      "gray-250": "#ced1d6",
      "grey-400": "#A3A3A3",
      "bg-grey": "rgb(237,242,248)",
      "bg-darkgrey": "rgb(367,272,278)",
    },
    animation: {
      flip: "flip 1s cubic-bezier(0, 0, 0.2, 1) infinite",
    },
    keyframes: {
      flip: {
        from: { transform: "rotateX(0deg)", transformOrigin: "50% bottom " },
        to: { transform: "rotateX(180deg)", transformOrigin: "50% bottom " },
      },
    },
    backgroundImage: {
      "section4-part1":
        'radial-gradient(555.04% 280.25% at 0% 0%, theme("colors.black-700") 31.88%, theme("colors.primary") 100%)',
      "section4-part2":
        'radial-gradient(555.04% 280.25% at 100% 0%, theme("colors.black-700") 31.88%, theme("colors.primary") 100%)',
      "section4-part3-web":
        'radial-gradient(100.69% 1520.93% at 50% 50%, #00000000 44.73%, theme("colors.primary") 100%), url("/svgs/section4-part3-web.svg")',
      "section4-part3-tablet":
        'radial-gradient(100.69% 1520.93% at 50% 50%, #00000000 44.73%, theme("colors.primary") 100%), url("/svgs/section4-part3-tablet.svg")',
      "section4-part3-mobile":
        'radial-gradient(100.69% 1520.93% at 50% 50%, #00000000 44.73%, theme("colors.primary") 100%), url("/svgs/section4-part3-mobile.svg")',
    },
    extend: {
      colors: {
        // Added some extra Tailwind CSS along with default colors
        blue: {
          950: "#17275c",
        },
      },
      fontFamily: {
        dmSans: ["var(--font-dmSans)", ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
