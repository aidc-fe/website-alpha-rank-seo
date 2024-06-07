import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./constants/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "white-15": "rgba(255,255,255,0.15)",
        second: "#595959",
        third: "#191919",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          30: "hsl(var(--primary) / 0.3)",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        "title-color": "rgba(20,20,20,1)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        scroll: {
          to: {
            transform: "translateY(calc(-50% - 0.5rem))",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      backgroundImage: {
        "main-gradient":
          "linear-gradient(109deg, #EE50D5 0%, #A53DED 21%, #6F2FFF 46%, #426BFF 82%, #60C3FF 100%), linear-gradient(-74deg, #74EBFF 0%, #3977FF 31%, #5C2FFF 60%, #EE50D5 100%), linear-gradient(-70deg, #AE5EFB 0%, #713CFF 30%, #65A4CE 81%, #56E4DE 100%)",
        "mask-gradient":
          "linear-gradient(to var(--direction), hsl(var(--background)) 0%, rgba(16, 13, 38, 0) 100%)",
        "display-card-light-gradient":
          "radial-gradient(circle at 1.3e+02% 1.5e+02%, rgba(64,213,255,0.00) 0%, rgba(255,255,255,0.50) 169%), radial-gradient(circle at 19% -5.4%, rgba(147,120,255,0.54) 0%, rgba(147,120,255,0.54) 24%, rgba(255,255,255,0.00) 79%);",
        "display-card-primary-gradient":
          "linear-gradient(180deg, rgba(81,80,232,0.30) 0%, #A188F5 100%)",
        "card-main":
          "radial-gradient(circle at 1.3e+02% 1.5e+02%, rgba(64,213,255,0.00) 0%, rgba(255,255,255,0.50) 169%), radial-gradient(circle at 19% -5.4%, rgba(147,120,255,0.54) 0%, rgba(147,120,255,0.54) 24%, rgba(255,255,255,0.00) 79%)",
        "box-gradient": "linear-gradient(180deg, #E3DEFB 0%, #ECE7FE 100%)",
        "metadata-gradient":
          "linear-gradient(146deg, #FFFFFF 43%, #E1C3FA 100%)",
      },
      boxShadow: {
        "main-gradient":
          "0 0 54px 0 rgba(113,101,255,0.40), inset 0 -5px 20px 0 rgba(255,255,255,0.80)",
        "table-gradient": "-28px 28px 42px 0 rgba(0,0,0,0.08)",
        "box-gradient": "0 0 4px 0 rgba(111,80,232,0.24)",
      },
      backgroundColor: {
        "white-50": "rgba(255, 255, 255, 0.5)",
      },
      backdropBlur: {
        "custom-blur": "10px",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addUtilities }: { addUtilities: Function }) {
      addUtilities({
        ".line-clamp-2": {
          display: "-webkit-box",
          "-webkit-box-orient": "vertical",
          "-webkit-line-clamp": "2",
          overflow: "hidden",
        },
      });
    },
  ],
} satisfies Config;

export default config;
