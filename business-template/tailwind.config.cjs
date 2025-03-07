/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                'primary': 'var(--primary-color)',    /* Dynamic theme color */
                'secondary': 'var(--secondary-color)',   /* Dynamic theme color */
                'accent': 'var(--accent-color)',      /* Dynamic theme color */
                'accent-dark': 'var(--accent-dark)', /* Dynamic theme color */
                'background': 'var(--background-color)',  /* Dynamic theme color */
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