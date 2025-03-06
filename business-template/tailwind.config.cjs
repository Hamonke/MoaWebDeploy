/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                'primary': '#283618',    /* Blue */
                'secondary': '#606c38',   /* Emerald */
                'accent': '#dda15e',      /* Amber */
                'accent-dark': '#bc6c25', /* Darker Amber */
                'background': '#fefae0',  /* White */
                'gray': {
                    300: '#D1D5DB',
                    400: '#9CA3AF',
                    500: '#6B7280',
                    600: '#4B5563',
                    700: '#374151',
                    800: '#1F2937',
                    900: '#111827',
                }
            },
            backgroundColor: theme => ({
                ...theme('colors'),
            }),
            textColor: theme => ({
                ...theme('colors'),
            }),
            borderColor: theme => ({
                ...theme('colors'),
            }),
        },
    },
    plugins: [require('@tailwindcss/forms')],
} 