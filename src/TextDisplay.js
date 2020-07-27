import React from 'react';

class TextDisplay extends React.Component{
    render(){
        return(
            <div  className='comment'>
            <div>{this.props.text}</div>
            </div>
        );
    }
}



export default TextDisplay;