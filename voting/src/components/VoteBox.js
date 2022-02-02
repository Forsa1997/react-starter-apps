import React from "react";
import { Component } from "react/cjs/react.development";


class VoteBox extends Component {

    constructor(props) {
        super(props);
        this.state.name = props.name;
    }

    state = {
        voteCount: 0,
        name: ""
    }

    increaseVoteCount = () => {
        console.log("increaseVoteCount")
        this.setState({ voteCount: this.state.voteCount + 1 })
    }



    render() {
        return (
            <div className="container">
                <div className="list-group">
                    <div className="list-group-item">
                        <div className="row">
                            <div className="col-md-2">{this.state.voteCount}</div>
                            <div className="col-md-8">{this.state.name}</div>
                            <div className="col-md-2"><button onClick={this.increaseVoteCount}>Vote &#8623;</button></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default VoteBox;