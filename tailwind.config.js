/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/tw-elements/dist/js/**/*.js",],
    theme: {
        extend: {},
    },
    plugins: [
        // eslint-disable-next-line no-undef
        require("tw-elements/dist/plugin")
    ],
};
