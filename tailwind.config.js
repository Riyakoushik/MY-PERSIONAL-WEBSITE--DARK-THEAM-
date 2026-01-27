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
            maxWidth: {
                container: "1280px",
            },
            animation: {
                "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
                marquee: 'marquee var(--duration) linear infinite',
                'marquee-reverse': 'marquee-reverse var(--duration) linear infinite',
            },
            keyframes: {
                "border-beam": {
                    "100%": {
                        "offset-distance": "100%",
                    },
                },
                marquee: {
                    from: { transform: 'translateX(0)' },
                    to: { transform: 'translateX(calc(-100% - var(--gap)))' }
                },
                'marquee-reverse': {
                    from: { transform: 'translateX(calc(-100% - var(--gap)))' },
                    to: { transform: 'translateX(0)' }
                }
            },
        },
    },
};
