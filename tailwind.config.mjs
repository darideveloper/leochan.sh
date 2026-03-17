/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        surface: 'var(--surface)',
        primary: 'var(--primary)',
        'primary-light': 'var(--primary-light)',
        secondary: 'var(--secondary)',
        tertiary: 'var(--tertiary)',
        foreground: 'var(--foreground)',
        muted: 'var(--muted)',
        'border-subtle': 'var(--border-subtle)',
      },
      fontFamily: {
        vcr: ["VCR OSD MONO", "monospace"],
        mono: ["JetBrains Mono", "Courier New", "ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "Liberation Mono", "monospace"],
        sans: ["Montserrat Variable", "-apple-system", "system-ui", "sans-serif"],
      },
      keyframes: {
        scaleAnim: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        },
        'heart-pulse': {
          '0%': { transform: 'scale(1)' },
          '25%': { transform: 'scale(1.1)' },
          '50%': { transform: 'scale(1)' },
          '75%': { transform: 'scale(1.06)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        scale: 'scaleAnim 300ms ease-in-out',
        'heart-pulse': 'heart-pulse 0.6s ease-in-out',
      },
    },
  },
  plugins: [],
};
