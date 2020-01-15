import React, { Component } from "react";

class ChooseWorld extends Component {
    render() {
        return (
            <select className="choose__world" id={this.props.id}>
                <option className="world__value" value={this.props.fristValue}>
                    {this.props.fristCountry}
                </option>
                <option className="world__value" value={this.props.secondValue}>
                    {this.props.secondContry}
                </option>
            </select>
        );
    }
}

export default ChooseWorld;
