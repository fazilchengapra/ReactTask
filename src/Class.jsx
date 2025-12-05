import { Component } from "react";

class World extends Component{
    render(){
        return(
            <div>
                <h1>{this.props.name}</h1>
            </div>
        )
    }
}

export default World