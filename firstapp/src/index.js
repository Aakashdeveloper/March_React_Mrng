import React from 'react';
import ReactDOM from 'react-dom';

import Books from './books';

const Home = () => {
    return(
        <div>
            <h1>My First Page of React</h1>
            <h2>This is second tag</h2>
            <Books></Books>
        </div>
    )
}

ReactDOM.render(<Home/>,document.getElementById('root'))