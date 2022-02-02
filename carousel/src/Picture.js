import { Component } from "react/cjs/react.production.min";
import React from "react";

class Picture extends Component {

    constructor(props) {
        super(props);
        this.state = {src: this.props.src, name: this.props.name}
    }

    render() {
        return (
            <div>
                <img src={this.state.src} alt="test" />
                <p className="legend">{this.state.name}</p>
            </div>
        )
    }

}

export default Picture;