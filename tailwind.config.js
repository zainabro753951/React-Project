/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      Barlow: ["Barlow", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        backLine:
          "radial-gradient(rgb(255, 255, 255, 0.9), rgba(255, 255, 255, 0.311))",
        ExpCard: "linear-gradient(to top, #161B28, #232834)",
        WorkLinear: "linear-gradient(to top, #3EAEFE , #3eaefe7c, #3eaefe13)",
        ServiceCard: "linear-gradient(to top, #192336, #303746)",
        ProBtn:
          "radial-gradient(circle, rgba(255,138,203,1) 0%, rgba(138,255,148,1) 96%, rgba(27,255,0,1) 100%)",
        Skills: "linear-gradient(to top, #1c232f, #143c41)",
        Blog: "linear-gradient(to right, #135380, #135380da, #3eafff00)",
      },
      screens: {
        xs: "258px",
      },
    },
  },
  plugins: [],
};
