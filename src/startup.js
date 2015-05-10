import React from 'react/addons'
import App from './components/App.jsx!'

// works with babel-polyfill.js
function* foo() {
    yield 1;
}

// Babel experimental:
let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
//console.log('@Babel experimental:')
//console.log('@x:',x);
//console.log('@y:',y);
//console.log('@z:',z);

React.render(React.createElement(App), document.body);
