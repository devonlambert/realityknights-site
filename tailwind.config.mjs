/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'rk-bg':      '#0A0A0F',
        'rk-surface': '#13131C',
        'rk-border':  '#1E1E2E',
        'rk-accent':  '#7C3AED',
        'rk-glow':    '#A78BFA',
        'rk-accent2': '#06B6D4',
        'rk-text':    '#F1F0F5',
        'rk-muted':   '#6B7280',
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        inter:  ['Inter', 'sans-serif'],
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%':      { opacity: '1',   transform: 'scale(1.08)' },
        },
      },
      animation: {
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
