/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{ts,tsx}"],
    theme: {
        extend: {
            colors: {
                bg: "#0b0f17",
                panel: "#0f1420",
                ink: "#eaf0f8",
                muted: "#9aa7b3",
                accent: "#7dd3fc",
                accent2: "#c4b5fd",
            },
            boxShadow: { soft: "0 10px 40px rgba(0,0,0,.25)" },
            borderRadius: { "2xl": "1.25rem" },
        },
    },
    plugins: [import("@tailwindcss/typography")],
};
