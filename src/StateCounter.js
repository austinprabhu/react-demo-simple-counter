import React from "react";
import TextDisplay from "./TextDisplay"

class StateCounter extends React.Component{
    constructor(props){
        super(props);
        this.state= {count:0};
    }

    increment(){
        this.setState({count:this.state.count + 1});
    }

    render(){
        return (
            <div>
                Value: <TextDisplay text={this.state.count} />
                <button onClick={this.increment.bind(this)}>Increment</button>
            </div>
        );
    }
};

export default StateCounter;