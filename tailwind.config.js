/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/tw-elements/dist/js/**/*.js",],
    theme: {
        extend: {
            boxShadow: {
                '6-strongB': '0px 25px 50px -12px rgba(0, 0, 20, 0.4)', // Ajustez cette valeur en fonction de l'intensité souhaitée
                '6-strongT': '0px -25px 50px -12px rgba(0, 0, 20, 0.4)', // Ajustez cette valeur en fonction de l'intensité souhaitée

            },
        },
    },
    plugins: [
        // eslint-disable-next-line no-undef
        require("tw-elements/dist/plugin")
    ],
};
