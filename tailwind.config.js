import relumeTailwindPreset from "@relume_io/relume-tailwind";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./home/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}"
    ],
    presets: [relumeTailwindPreset],
    theme: {
        extend: {
            animation: {
                "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
            },
            keyframes: {
                "border-beam": {
                    "100%": {
                        "offset-distance": "100%",
                    },
                },
            },
        },
    },
};
