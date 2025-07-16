const { fontFamily } = require("tailwindcss/defaultTheme");
const svgToDataUri = require("mini-svg-data-uri");

const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}",
    "components/**/*.{ts,tsx, js, jsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '280': '280px',
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
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
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        "ease-out": {
          from: { opacity: "0", transform: "translateY(-10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "flip-y": {
          "0%": { transform: "rotateY(0deg)" },
          "50%": { transform: "rotateY(90deg) scale(1.1)" },
          "100%": { transform: "rotateY(0deg)" },
        },
        "flash": {
          "0%, 100%": { opacity: "0" },
          "50%": { opacity: "1" },
        },
        "float": {
          "0%, 100%": { 
            transform: "translateY(0px) translateX(0px) rotate(0deg)",
            opacity: "0.4"
          },
          "33%": { 
            transform: "translateY(-20px) translateX(10px) rotate(120deg)",
            opacity: "1"
          },
          "66%": { 
            transform: "translateY(-10px) translateX(-15px) rotate(240deg)",
            opacity: "0.6"
          },
        },
        "cosmic-drift": {
          "0%": { transform: "translateX(-100px) translateY(-50px)" },
          "100%": { transform: "translateX(calc(100vw + 100px)) translateY(50px)" },
        },
        "glow-pulse": {
          "0%, 100%": { filter: "brightness(1) blur(0px)" },
          "50%": { filter: "brightness(1.5) blur(2px)" },
        },
        "hologram": {
          "0%": { transform: "skewX(0deg)" },
          "25%": { transform: "skewX(1deg)" },
          "50%": { transform: "skewX(0deg)" },
          "75%": { transform: "skewX(-1deg)" },
          "100%": { transform: "skewX(0deg)" },
        },
        "orb-pulse": {
          "0%, 100%": { 
            transform: "scale(1)", 
            boxShadow: "0 0 20px currentColor" 
          },
          "50%": { 
            transform: "scale(1.05)", 
            boxShadow: "0 0 40px currentColor" 
          },
        },
        "particle-drift": {
          "0%": { 
            transform: "translateY(0px) rotate(0deg)",
            opacity: "0" 
          },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { 
            transform: "translateY(-100px) rotate(360deg)",
            opacity: "0" 
          },
        },
        "emotional-shift": {
          "0%": { transform: "scale(1) rotate(0deg)" },
          "25%": { transform: "scale(1.1) rotate(5deg)" },
          "50%": { transform: "scale(1.05) rotate(-3deg)" },
          "75%": { transform: "scale(1.08) rotate(2deg)" },
          "100%": { transform: "scale(1) rotate(0deg)" },
        },
        "golden-shimmer": {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        "time-pulse": {
          "0%, 100%": { opacity: "0.5", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.1)" },
        },
        "admin-pulse": {
          "0%, 100%": { 
            transform: "scale(1)", 
            boxShadow: "0 0 20px rgba(96, 165, 250, 0.3)" 
          },
          "50%": { 
            transform: "scale(1.05)", 
            boxShadow: "0 0 40px rgba(96, 165, 250, 0.5)" 
          },
        },
        "system-glow": {
          "0%, 100%": { filter: "brightness(1) blur(0px)" },
          "50%": { filter: "brightness(1.3) blur(1px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "ease-out": "ease-out 0.5s ease-out",
        "flip-y": "flip-y 0.6s ease-in-out",
        "flash": "flash 0.5s ease-in-out",
        "float": "float 6s ease-in-out infinite",
        "cosmic-drift": "cosmic-drift 20s linear infinite",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "hologram": "hologram 4s ease-in-out infinite",
        "orb-pulse": "orb-pulse 3s ease-in-out infinite",
        "particle-drift": "particle-drift 8s linear infinite",
        "emotional-shift": "emotional-shift 2s ease-in-out",
        "golden-shimmer": "golden-shimmer 3s ease-in-out infinite",
        "time-pulse": "time-pulse 2s ease-in-out infinite",
        "admin-pulse": "admin-pulse 3s ease-in-out infinite",
        "system-glow": "system-glow 2s ease-in-out infinite",
      },

      fontFamily: {
        sans: ["Klav", ...fontFamily.sans],
        mono: ["Klav", ...fontFamily.mono],
      },

      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
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
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Admin color scheme
        admin: {
          black: '#000000',
          white: '#ffffff',
          blue: {
            50: '#eff6ff',
            100: '#dbeafe',
            200: '#bfdbfe',
            300: '#93c5fd',
            400: '#60a5fa',
            500: '#3b82f6',
            600: '#2563eb',
            700: '#1d4ed8',
            800: '#1e40af',
            900: '#1e3a8a',
          },
          green: {
            50: '#f0fdf4',
            100: '#dcfce7',
            200: '#bbf7d0',
            300: '#86efac',
            400: '#4ade80',
            500: '#22c55e',
            600: '#16a34a',
            700: '#15803d',
            800: '#166534',
            900: '#14532d',
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      textShadow: {
        'admin-glow': '0 0 10px rgba(96, 165, 250, 0.5)',
        'system-glow': '0 0 15px rgba(34, 197, 94, 0.5)',
      },
      boxShadow: {
        '3xl': '0 35px 60px -12px rgba(0, 0, 0, 0.25)',
        'admin-glow': '0 0 30px rgba(96, 165, 250, 0.3)',
        'system-glow': '0 0 30px rgba(34, 197, 94, 0.3)',
      },
    },
  },
  plugins: [
    addVariablesForColors,
    require("tailwindcss-animate"),
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "bg-grid": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`,
            )}")`,
          }),
          "bg-grid-small": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`,
            )}")`,
          }),
          "bg-dot": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`,
            )}")`,
          }),
        },
        {
          values: flattenColorPalette(theme("backgroundColor")),
          type: "color",
        },
      );
    },
    function ({ addUtilities }) {
      addUtilities({
        '.text-admin-glow': {
          textShadow: '0 0 15px rgba(96, 165, 250, 0.7), 0 0 30px rgba(96, 165, 250, 0.5)',
        },
        '.text-system-glow': {
          textShadow: '0 0 15px rgba(34, 197, 94, 0.7), 0 0 30px rgba(34, 197, 94, 0.5)',
        },
        '.admin-glass': {
          background: 'rgba(0, 0, 0, 0.2)',
          backdropFilter: 'blur(15px)',
          border: '1px solid rgba(96, 165, 250, 0.2)',
        },
        '.system-glass': {
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(15px)',
          border: '1px solid rgba(34, 197, 94, 0.2)',
        },
      });
    },
  ],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );

  addBase({
    ":root": newVars,
  });
}
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );

  addBase({
    ":root": newVars,
  });
}
