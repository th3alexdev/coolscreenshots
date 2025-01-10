import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        geist: ['Geist', 'sans-serif'],
      },
      colors: {
        'title-color-primary': '#2222',
        'main-color': '#0015FF',
        'main-color-hover': '#E0E7FF',
        'footer-background': '#F5F5F5',
      },
      backgroundImage: {
        'gradient-bg': "url('/svg/gradient-bg.svg')",
      },
      fontSize: {
        /* 10px */ '2xs': '0.625rem',
        /* 12px */ xs: '0.75rem',
        /* 14px */ sm: '0.875rem',
        /* 16px */ base: '1rem',
        /* 18px */ lg: '1.125rem',
        /* 20px */ xl: '1.25rem',
        /* 24px */ '2xl': '1.5rem',
        /* 30px */ '3xl': '1.875rem',
        /* 36px */ '4xl': '2.25rem',
        /* 48px */ '5xl': '3rem',
        /* 60px */ '6xl': '3.75rem',
      },
      screens: {
        /*    */ xs: '300px',
        /* */ '2xs': '380px',
        /* */ '3xs': '410px',
        /* */ '4xs': '450px',
        /* */ '5xs': '505px',
        /* */ '6xs': '540px',
        /* */ '7xs': '570px',
        /* */ '8xs': '585px',
        /*    */ sm: '640px',
        /* */ '2sm': '715px',
        /*    */ md: '768px',
        /* */ '2md': '810px',
        /* */ '3md': '890px',
        /*    */ lg: '1024px',
        /*    */ xl: '1280px',
        /* */ '2xl': '1440px',
      },
      animation: {
        scroll: 'scroll 55s linear infinite',
        slideDown: 'slideDown .3s ease-out forwards',
        slideUp: 'slideUp .3s ease-in forwards',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        slideDown: {
          '0%': { transform: 'translate(-50%, -10%)', opacity: '0' },
          '100%': { transform: 'translate(-50%, 0)', opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translate(-50%, 0)', opacity: '1' },
          '100%': { transform: 'translate(-50%, -10%)', opacity: '0' },
        },
      },
      transitionProperty: {
        transform: 'transform',
      },
    },
  },
  plugins: [],
};
