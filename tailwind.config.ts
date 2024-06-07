import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

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
      },
      boxShadow: {
        "main-gradient":
          "0 0 54px 0 rgba(113,101,255,0.40), inset 0 -5px 20px 0 rgba(255,255,255,0.80)",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(function ({ addUtilities }: { addUtilities: Function }) {
      addUtilities({
        ".mask-image": {
          "-webkit-mask-image":
            'url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27currentColor%27 strokeWidth=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 class=%27lucide lucide-diamond-plus%27%3E%3Cpath d=%27M12 8v8%27/%3E%3Cpath d=%27M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z%27/%3E%3Cpath d=%27M8 12h8%27/%3E%3C/svg%3E")',
          "mask-image":
            'url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27currentColor%27 strokeWidth=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 class=%27lucide lucide-diamond-plus%27%3E%3Cpath d=%27M12 8v8%27/%3E%3Cpath d=%27M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z%27/%3E%3Cpath d=%27M8 12h8%27/%3E%3C/svg%3E")',
        },
      });
    }),
  ],
} satisfies Config;

export default config;
