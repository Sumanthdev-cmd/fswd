/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        anton: ["Overlock SC", "sans-serif"],
      },
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
        glow: {
          from: { "box-shadow": "0 0 20px #3b82f6" },
          to: { "box-shadow": "0 0 30px #60a5fa" },
        },
      },
      animation: {
        "waving-hand": "wave 3s linear infinite",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      boxShadow: {
        custom: "0px 0px 30px 10px rgba(0, 0, 0, 0.3)",
      },
      transitionProperty: {
        all: "all",
      },
      transitionDuration: {
        300: "300ms",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      backdropBlur: {
        sm: "4px",
      },
      backgroundColor: {
        "black/30": "rgba(0, 0, 0, 0.3)",
        "custom-card": "rgba(30, 41, 59, 0.7)",
        "custom-container": "rgba(17, 24, 39, 0.8)",
      },
      colors: {
        "custom-dark": "#0B1120",
        "custom-darker": "#0A0F1C",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
