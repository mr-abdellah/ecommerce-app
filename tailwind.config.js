/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        PoppinsThin: ["Poppins_100Thin"],
        PoppinsExtraLight: ["Poppins_200ExtraLight"],
        PoppinsLight: ["Poppins_300Light"],
        PoppinsRegular: ["Poppins_400Regular"],
        PoppinsMedium: ["Poppins_500Medium"],
        PoppinsSemiBold: ["Poppins_600SemiBold"],
        PoppinsBold: ["Poppins_700Bold"],
        PoppinsExtraBold: ["Poppins_800ExtraBold"],
        PoppinsBlack: ["Poppins_900Black"],
      },
      colors: {
        "green-light": "#06AB8D",
        "green-dark": "#06372E",
        "orange-primary": "#FF8933",
        "yellow-primary": "#FFB039",
        "gray-primary": "#8B9E9E",
      },
    },
  },
  plugins: [],
};
