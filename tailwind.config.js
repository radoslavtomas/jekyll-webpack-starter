module.exports = {
    purge: {
        mode: 'layers',
        layers: ['components', 'utilities', 'utilities'],
        content: [
            '_includes/*.html',
            '_layouts/*.html'
        ]
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px'
        },
        extend: {
            fontFamily: {
                'sans': ["Poppins", "Arial", "sans-serif"],
                'mono': ['Source Code Pro', 'monospace']
            },
            cursor: {
                help: 'help',
                crosshair: 'crosshair',
                'zoom-in': 'zoom-in',
            }
        },
    },
    variants: {
        extend: {
            borderWidth: ['hover', 'focus'],
        },
    },
    plugins: [],
}
