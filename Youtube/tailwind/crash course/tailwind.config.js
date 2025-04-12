/** @type {import('tailwindcss').Config} */
module.exports = {
        content: ["./src/**/*.{html,js}"],
        darkMode: "class",//based on class we will be able to change the theme
        // if we don't specify that class the style will be based on user's system
        theme: {
          extend: {
                colors:{
                        chestnut:'#973f29'
                }
          },
        },
        plugins: [],
      }