import React, { Component } from "react";

class ResetButton extends Component {
    render = () => {
        return (
            <button onClick={this.props.event} className="reset__btn">
                RESET
            </button>
        );
    };
}

export default ResetButton;
