import React from 'react';
import ReactDOM from 'react-dom';
import TextDisplay from './TextDisplay'
const App = () => {
    return (
        <div>
            <TextDisplay text='hello' />
            <TextDisplay text='world'/>
        </div>
      );
    
};

ReactDOM.render(<App/>, document.querySelector('#root'));


