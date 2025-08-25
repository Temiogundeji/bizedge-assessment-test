// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bizedge-blue-500": "#4069D0",
        "bizedge-blue-50": "#EBEFFA",
      },
      boxShadow: {
        timeoff: "0px 1px 4px rgba(0,0,0,0.08), 0px 2px 6px rgba(0,0,0,0.05)",
      },
    },
  },
  plugins: [],
};
