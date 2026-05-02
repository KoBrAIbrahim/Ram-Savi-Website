/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#FF0000',
                    light:   '#FF3333',
                    dark:    '#CC0000',
                    50:  '#fff0f0',
                    100: '#ffd6d6',
                    200: '#ffaaaa',
                    300: '#ff7777',
                    400: '#ff4444',
                    500: '#FF0000',
                    600: '#CC0000',
                    700: '#990000',
                    800: '#660000',
                    900: '#330000',
                },
                dark: {
                    DEFAULT: '#07080F',
                    1: '#07080F',
                    2: '#0F1018',
                    3: '#161722',
                    4: '#1E1F2E',
                },
            },
            fontFamily: {
                sans: ['Cairo', 'system-ui', 'sans-serif'],
            },
            boxShadow: {
                'glow-sm': '0 0 16px rgba(255, 0, 0, 0.35)',
                'glow':    '0 0 32px rgba(255, 0, 0, 0.42), 0 0 64px rgba(255, 0, 0, 0.14)',
                'glow-lg': '0 0 64px rgba(255, 0, 0, 0.52), 0 0 120px rgba(255, 0, 0, 0.22)',
                'card':    '0 4px 24px rgba(0,0,0,0.055)',
                'card-lg': '0 16px 56px rgba(0,0,0,0.10)',
            },
            borderRadius: {
                '4xl': '2rem',
                '5xl': '2.75rem',
            },
            animation: {
                'float-slow':  'floatSlow 7s ease-in-out infinite',
                'float-blob':  'floatBlob 9s ease-in-out infinite',
                'pulse-glow':  'pulseGlow 2.8s ease-in-out infinite',
                'rotate-slow': 'rotateSlow 22s linear infinite',
            },
        },
    },
    plugins: [],
}