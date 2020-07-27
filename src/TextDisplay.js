import React from 'react';

const TextDisplay = (props) => {
    return (
        <div  className='comment'>
            <div>{props.text}</div>
        </div>
    );
};

export default TextDisplay;