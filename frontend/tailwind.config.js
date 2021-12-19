module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: {
                'home-3': "url('/img/home-3-main-banner.jpg')"
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
