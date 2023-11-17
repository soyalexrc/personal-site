import type {Config} from 'tailwindcss'

const {nextui} = require("@nextui-org/react");

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            animation: {
                'infinite-scroll': 'infinite-scroll 40s linear infinite',
                'infinite-scroll-d2': 'infinite-scroll 40s 2s linear infinite',
                'infinite-scroll-d4': 'infinite-scroll 40s 4s linear infinite',
            },
            keyframes: {
                'infinite-scroll': {
                    from: { transform: 'translateX(0)' },
                    to: { transform: 'translateX(-100%)' },
                },
                'infinite-scroll-d2': {
                    from: { transform: 'translateX(0)' },
                    to: { transform: 'translateX(-100%)' },
                },
                'infinite-scroll-d4': {
                    from: { transform: 'translateX(0)' },
                    to: { transform: 'translateX(-100%)' },
                }
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [nextui({
        // defaultTheme: 'dark',
        themes: {
            light: {
                colors: {
                    background: "#f1f5f9"
                }
            },
            dark: {
                colors: {
                    background: "#0f172a"
                }
            }
        }
    })],
}
export default config
