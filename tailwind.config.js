/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
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
        border: "var(--color-border)", // gray-200
        input: "var(--color-input)", // soft-neutral
        ring: "var(--color-ring)", // soft-periwinkle
        background: "var(--color-background)", // off-white
        foreground: "var(--color-foreground)", // charcoal
        primary: {
          DEFAULT: "var(--color-primary)", // soft-periwinkle
          foreground: "var(--color-primary-foreground)", // white
        },
        secondary: {
          DEFAULT: "var(--color-secondary)", // lighter-complement
          foreground: "var(--color-secondary-foreground)", // charcoal
        },
        destructive: {
          DEFAULT: "var(--color-destructive)", // muted-red
          foreground: "var(--color-destructive-foreground)", // white
        },
        muted: {
          DEFAULT: "var(--color-muted)", // soft-neutral
          foreground: "var(--color-muted-foreground)", // medium-gray
        },
        accent: {
          DEFAULT: "var(--color-accent)", // warm-coral
          foreground: "var(--color-accent-foreground)", // charcoal
        },
        popover: {
          DEFAULT: "var(--color-popover)", // white
          foreground: "var(--color-popover-foreground)", // charcoal
        },
        card: {
          DEFAULT: "var(--color-card)", // white
          foreground: "var(--color-card-foreground)", // charcoal
        },
        success: {
          DEFAULT: "var(--color-success)", // gentle-green
          foreground: "var(--color-success-foreground)", // white
        },
        warning: {
          DEFAULT: "var(--color-warning)", // soft-orange
          foreground: "var(--color-warning-foreground)", // charcoal
        },
        error: {
          DEFAULT: "var(--color-error)", // muted-red
          foreground: "var(--color-error-foreground)", // white
        },
        surface: "var(--color-surface)", // soft-neutral
        'text-primary': "var(--color-text-primary)", // charcoal
        'text-secondary': "var(--color-text-secondary)", // medium-gray
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        'heading': ['Inter', 'sans-serif'],
        'body': ['Source Sans 3', 'sans-serif'],
        'caption': ['Nunito Sans', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
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
        "breathe": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.02)" },
        },
        "gentle-pulse": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%": { transform: "translateY(-10px) rotate(1deg)" },
          "66%": { transform: "translateY(-5px) rotate(-1deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "breathe": "breathe 4s ease-in-out infinite",
        "gentle-pulse": "gentle-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
      },
      boxShadow: {
        'warm-sm': '0 1px 2px 0 rgba(139, 69, 19, 0.1)',
        'warm': '0 1px 3px 0 rgba(139, 69, 19, 0.1), 0 1px 2px -1px rgba(139, 69, 19, 0.1)',
        'warm-md': '0 4px 6px -1px rgba(139, 69, 19, 0.1), 0 2px 4px -2px rgba(139, 69, 19, 0.1)',
        'warm-lg': '0 10px 15px -3px rgba(139, 69, 19, 0.1), 0 4px 6px -4px rgba(139, 69, 19, 0.1)',
        'warm-xl': '0 20px 25px -5px rgba(139, 69, 19, 0.1), 0 8px 10px -6px rgba(139, 69, 19, 0.1)',
        'warm-2xl': '0 25px 50px -12px rgba(139, 69, 19, 0.1)',
      },
      backdropBlur: {
        xs: '2px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      minHeight: {
        '44': '44px', // Minimum touch target size
      },
      transitionDuration: {
        '400': '400ms',
        '500': '500ms',
      },
      transitionTimingFunction: {
        'gentle': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}