import type { Config } from "tailwindcss";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#FFD3B6",
                primaryText: "#3A3939",
                background: "#FCF8F3",
                secondary: "#669988",
            },
            borderRadius: {
                hero: "80px",
            },
        },
    },
    plugins: [],
} satisfies Config;
