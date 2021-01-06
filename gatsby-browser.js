import './src/index.css'
import './src/vendor/modernizr-custom'

if (document) { document.documentElement.classList.remove('no-js') }

if (window && window.Modernizr) { document.querySelector('html').classList.add('webp') }
