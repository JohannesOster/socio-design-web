/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts}"],
  theme: {
    extend: {
      maxWidth: {
        "1/3": "33.3%",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
  mode: "jit",
};
