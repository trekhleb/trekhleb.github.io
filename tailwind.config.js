// @see: https://tailwindcss.com/docs/configuration/
// @see: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js

// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  // Reminder! Tailwind can't recognize conditional classes when using purge.
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  // Dark mode is toggled with the `dark` class on <html> (set before paint by gatsby-ssr.tsx).
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        // The table of contents hangs in the margin beside the centred 860px article, so it can
        // only appear once the viewport is wide enough to hold it without pushing the page out.
        // 1440 covers the common laptop widths (1440, 1470, 1512) that xl/2xl would miss.
        toc: '1440px',
      },
      // Colours come from CSS variables in src/styles/global.css so light/dark share one palette.
      colors: {
        bg: 'rgb(var(--c-bg) / <alpha-value>)',
        subtle: 'rgb(var(--c-bg-subtle) / <alpha-value>)',
        fg: 'rgb(var(--c-fg) / <alpha-value>)',
        muted: 'rgb(var(--c-muted) / <alpha-value>)',
        accent: 'rgb(var(--c-accent) / <alpha-value>)',
        line: 'var(--line)',
        'line-strong': 'var(--line-strong)',
      },
      fontFamily: {
        sans: [
          'Inter',
          'Inter Fallback',
          ...defaultTheme.fontFamily.sans,
        ],
      },
      fontSize: {
        // Fluid display sizes (mobile → desktop).
        display: ['clamp(2.25rem, 1.6rem + 2.6vw, 3.25rem)', { lineHeight: '1.05', letterSpacing: '-0.025em', fontWeight: '700' }],
        h1: ['clamp(1.875rem, 1.45rem + 1.6vw, 2.5rem)', { lineHeight: '1.15', letterSpacing: '-0.022em', fontWeight: '700' }],
        h2: ['clamp(1.375rem, 1.2rem + 0.7vw, 1.625rem)', { lineHeight: '1.25', letterSpacing: '-0.015em', fontWeight: '650' }],
        h3: ['1.125rem', { lineHeight: '1.4', letterSpacing: '-0.01em', fontWeight: '600' }],
      },
      maxWidth: {
        page: '1280px',
        prose: '860px',
      },
      borderRadius: {
        xl2: '0.875rem',
      },
      boxShadow: {
        card: 'var(--shadow-card)',
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.2, 0.7, 0.2, 1)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        // Used only by small overlays (tooltip); page content itself never animates in.
        'fade-in': 'fade-in 0.15s ease-out both',
      },
      // Tailwind typography customization
      // @see: https://github.com/tailwindlabs/tailwindcss-typography#customization
      typography: {
        // Article text: 16px on phones, 17px from 640px up (`prose sm:prose-lg` in Post.tsx).
        // Inter runs larger than most text faces, so these read like 17/18px elsewhere.
        DEFAULT: {
          css: {
            maxWidth: 'none',
            fontSize: '1rem',
            lineHeight: '1.7',
            'h1, h2, h3, h4': {
              fontWeight: '650',
            },
            a: {
              fontWeight: '450',
            },
            'pre, code': {
              fontFeatureSettings: 'normal',
            },
          },
        },
        lg: {
          css: {
            fontSize: '1.0625rem',
            lineHeight: '1.75',
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // eslint-disable-next-line global-require
    require('@tailwindcss/typography'),
  ],
};
