/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            backgroundImage: {
                sigDark: "url('./images/signature_black.png')",
                sigLight: "url('./images/signature_White.png')",
            },
            screens: {
                sm: "386px",
                xxxs: "138px",
                xxs: "235px",
            },
        },
    },
    plugins: [],
};
