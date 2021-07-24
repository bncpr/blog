module.exports = {
  mode: "jit",
  purge: [
    // Use *.tsx if using TypeScript
    "./pages/**/*.tsx",
    "./pages/**/*.js",
    "./components/**/*.tsx",
    "./components/**/*.js",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        "plex-mono": ["IBM Plex Mono"],
        "plex-sans": ["IBM Plex Sans"],
        martel: ["Martel"],
        "cormorant-garamond": ["Cormorant Garamond", "serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
