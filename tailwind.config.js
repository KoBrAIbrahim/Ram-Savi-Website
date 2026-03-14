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
                    DEFAULT: '#E80010',
                    light:   '#FF3545',
                    dark:    '#A3000B',
                    50:  '#fff0f0',
                    100: '#ffdddd',
                    200: '#ffb3b8',
                    300: '#ff7880',
                    400: '#ff3545',
                    500: '#E80010',
                    600: '#CC000E',
                    700: '#A3000B',
                    800: '#7a0009',
                    900: '#580008',
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
                'glow-sm': '0 0 16px rgba(232, 0, 16, 0.35)',
                'glow':    '0 0 32px rgba(232, 0, 16, 0.42), 0 0 64px rgba(232, 0, 16, 0.14)',
                'glow-lg': '0 0 64px rgba(232, 0, 16, 0.52), 0 0 120px rgba(232, 0, 16, 0.22)',
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