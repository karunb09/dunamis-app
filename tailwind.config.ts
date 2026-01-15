// @type {import('tailwindcss').Config}
module.exports = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            keyframes: {
                "loading-bar": {
                    "0%": { transform: "translateX(-100%)" },
                    "100%": { transform: "translateX(100%)" },
                },
            },
            animation: {
                "loading-bar": "loading-bar 1.2s ease-in-out infinite",
            },
        },
    },
    plugins: [],
};