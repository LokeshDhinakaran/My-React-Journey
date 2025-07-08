import React from 'react';
import ReactDOM from 'react-dom/client';

import { createRoot } from 'react-dom/client';
import App from './App.jsx';

function MyApp() {
    return (
        <div>
            <h1>Lokesh</h1>
        </div>
    );
}
const reactelement = {
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    content:'Click me to redirect'
}
const ele = (
    <a href="https://google.com">lokik</a>
)
const areact = React.createElement(
    'a',
    {href : 'https://google.com' , target : '_blank'},
    'Click me to go to google'
)
ReactDOM.createRoot(document.getElementById('root')).render(

    areact

)
