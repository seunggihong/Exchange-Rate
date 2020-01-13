import React from "react";

class ChooseWorld extends React.Component {
    render() {
        return (
            <select className="choose__world" id="select__box">
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
