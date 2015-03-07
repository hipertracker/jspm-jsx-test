import React from 'react'
import App from './components/App'

// works with babel-polyfill.js
function* foo() {
    yield 1;
}

React.render(React.createElement(App), document.body);
