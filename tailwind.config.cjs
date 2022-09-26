/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],

  theme: {
    extend: {
      backdropBrightness: {
        25: ".25",
      },
      spacing: {
        30: "1.875rem",
      },
      "dm-sans": ["DM-Sans", "sans-serif"],
      "card-gradient":
        "linear-gradient(90deg, rgba(22,18,18,1) 0%, rgba(37,15,19,1) 35%, rgba(50,14,20,1) 100%);",
    },
  },
  plugins: [
    // ...
    require("tailwind-scrollbar"),
  ],
};
