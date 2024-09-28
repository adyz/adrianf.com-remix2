import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        colorBorder: "var(--colorBorder)",
        colorBrown: "var(--colorBrown)",
        colorLightBrown: "var(--colorLightBrown)",
        colorLigherBrown: "var(--colorLigherBrown)",
        colorSuperLighterBrown: "var(--colorSuperLighterBrown)",
        colorBg: "var(--colorBg)",
        colorRed: "var(--colorRed)",
        colorGreen: "var(--colorGreen)",
        colorWhite: "var(--colorWhite)",
        colorLogoBody: "var(--colorLogoBody)",
        colorLogoLeg: "var(--colorLogoLeg)",
        colorLogoWing: "var(--colorLogoWing)",
      },
      fontFamily: {
        'serif': ['Georgia', 'Times New Roman', 'Times', 'serif'],
        'body': ['Roboto', 'Arial', 'Helvetica', 'sans-serif']
      },
      keyframes: {
        fadeInOut: {
          '0%': {
            opacity: '0',
          },
          '50%': {
            opacity: '1',
          },
          '100%': {
            opacity: '0',
          },
        },
        dropFade: {
          '0%': {
            opacity: '0',
            top: '0'
          },
          '100%': {
            opacity: '1',
            top: '100%'
          }
        }
      },
      animation: {
        fadeInOut: 'fadeInOut 2s 1.5s ease',
        dropFade: 'dropFade 2s 0.5s ease'
      },
      dropShadow: {
        'left-shadow': '-6px -9px 0 rgba(0,0,0,.05)',
      }
    },
  },
  plugins: [],
} satisfies Config;
