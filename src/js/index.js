// Import our custom CSS
import '../scss/common.scss'

// Import the CSS for the page
import '../scss/index.scss'

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in production mode!')
}

// Import all of Bootstrap's JS
// import * as bootstrap from 'bootstrap'