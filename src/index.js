import React from 'react';
import ReactDOM from 'react-dom';
import StateCounter from './StateCounter'
import TextDisplay from "./TextDisplay"

const App = () => {
    return (
        <div>
            <TextDisplay text='Hello worl2d!!'></TextDisplay>
            <StateCounter></StateCounter>
        </div>
      );
    
};

ReactDOM.render(<App/>, document.querySelector('#root'));


