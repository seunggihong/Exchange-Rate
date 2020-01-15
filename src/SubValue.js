import React, { Component } from "react";
import ChooseWorld from "./ChooseWorld";

class SubValue extends Component {
    render = () => {
        return (
            <div className="sub__contents">
                <input
                    type="number"
                    className="content"
                    value={this.props.subValue}
                />
                <ChooseWorld
                    fristValue={this.props.fristValue}
                    secondValue={this.props.secondValue}
                    fristCountry="KRW"
                    secondContry="USD"
                    id="select__box"
                ></ChooseWorld>
            </div>
        );
    };
}

export default SubValue;
