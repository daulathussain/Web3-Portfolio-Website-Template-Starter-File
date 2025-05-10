/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#6366f1",
        secondary: "#14b8a6",
        accent: "#f59e0b",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        gradient: "gradient 15s ease infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-primary": "linear-gradient(135deg, #6366f1 0%, #14b8a6 100%)",
        "gradient-secondary":
          "linear-gradient(135deg, #14b8a6 0%, #f59e0b 100%)",
      },
      boxShadow: {
        glow: "0 0 20px rgba(99, 102, 241, 0.5)",
        "glow-teal": "0 0 20px rgba(20, 184, 166, 0.5)",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#e2e8f0",
            a: {
              color: "#6366f1",
              "&:hover": {
                color: "#4f46e5",
              },
            },
            h1: {
              color: "#f8fafc",
            },
            h2: {
              color: "#f8fafc",
            },
            h3: {
              color: "#f8fafc",
            },
            h4: {
              color: "#f8fafc",
            },
            code: {
              color: "#14b8a6",
            },
            "blockquote p:first-of-type::before": {
              content: "none",
            },
            "blockquote p:first-of-type::after": {
              content: "none",
            },
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
