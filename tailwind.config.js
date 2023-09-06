module.exports = {
  mode: 'jit',
  purge: [
    // Use *.tsx if using TypeScript
    './pages/**/*.tsx',
    './pages/**/*.js',
    './components/**/*.tsx',
    './components/**/*.js',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            pre: false,
            code: false,
            'pre code': false,
            'code::before': false,
            'code::after': false,
          },
        },
      },
      fontFamily: {
        'plex-mono': ['IBM Plex Mono'],
        'plex-sans': ['IBM Plex Sans'],
        martel: ['Martel'],
        'cormorant-garamond': ['Cormorant Garamond', 'serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
