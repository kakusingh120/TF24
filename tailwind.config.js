/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{html,jsx,tsx}"],
//   theme: {
//     extend: {
//       screens: {
//         'md-lg': "1245px"
//       }
//     }
//   },
//   plugins: [],
// }

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'md-lg': "1245px"
      }
    },
  },
  plugins: [],
};
