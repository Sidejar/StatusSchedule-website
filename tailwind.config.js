/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],

  theme: {
    extend: {
      colors: {
        White: "#FFFFFF",
        Black: "rgba(33, 33, 33, 1)",
        Purple: "rgba(90, 80, 216, 1)",
        PrimaryPurple: "rgba(90, 80, 216, 0.1)",
        "Grey-300": "rgba(233, 233, 233, 1)",
        "Grey-400": "rgba(96, 96, 96, 1)",
        "Grey-500": "rgba(255, 255, 255, 0.15)",
        "Blue-400": "rgba(199, 202, 205, 1)",
        "Green-400": "rgba(219, 244, 226, 1)",
        "Green-500": "rgba(15, 138, 49, 1)",
        "Blue-400": "rgba(210, 223, 246, 1)",
        "Misty-500": "rgba(0, 187, 249, 1)",

        "Blue-50": "rgba(241, 246, 253, 1)",
        "Blue-100": "rgba(224, 233, 250, 1)",
        "Blue-200": "rgba(189, 207, 244, 1)",
        // "Blue-400": "rgba(66, 133, 244, 1)",
        "Blue-500": "rgba(47, 103, 221, 1)",
        "Blue-700": "rgba(39, 76, 155, 1)",

        "Green-500": "rgba(94, 184, 70, 1)",
        "Red-500": "rgba(216, 72, 51, 1)",
        "Orange-500": "rgba(230, 140, 49, 1)",
        "Orange-200": "rgba(245, 209, 173, 1)",
      },

      boxShadow: {
        "small-shadow": "-20px 67px 80px 0px rgba(27, 20, 100, 0.03)",
        "medium-shadow": "0px 0px 0px 1px rgba(0, 0, 0, 0.34)",
      },

      screens: {
        xsm: "380px",
        sm: "640px",
        // @media (min-width: 640px) { ... }
        md: "768px",
        // @media (min-width: 768px) { ... }
        lg: "1024px",
        // @media (min-width: 1024px) { ... }
        xl: "	1280px",
        // @media (min-width: 1280px) { ... }
        "2xl": "1536px",
        // @media (min-width: 1536px) { ... }f
      },
    },
  },
  plugins: [],
}
