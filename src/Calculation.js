import React, { Component } from "react";
import MainValue from "./MainValue";
import SubValue from "./SubValue";
import ResetButton from "./ResetButton";

class Calculation extends Component {
    state = { mainValue: null, subValue: null };

    btnClick = () => {
        const e = document.getElementsByClassName("content");
        this.setState({
            mainValue: null,
            subValue: null
        });
        for (let index = 0; index < e.length; index++) {
            e[index].value = "";
        }
    };

    changeValue = e => {
        let mainValue = e.target.value;
        this.setState({ mainValue: mainValue });

        const data = document.getElementById("select__box");
        const valueOfKRW = String(this.props.valueOfKRW);
        const valueOfUSD = String(this.props.valueOfUSD);
        if (data.options[data.selectedIndex].value === valueOfKRW) {
            this.setState({
                subValue: valueOfKRW
            });
            this.setState({
                mainValue: e.target.value,
                subValue: parseInt(this.state.mainValue * this.props.valueOfKRW)
            });
        } else {
            this.setState({
                subValue: valueOfUSD
            });
            this.setState({
                mainValue: e.target.value,
                subValue: parseInt(this.state.mainValue * this.props.valueOfUSD)
            });
        }
    };

    render = () => {
        return (
            <div>
                <MainValue
                    mainValue={this.state.mainValue}
                    onChange={this.changeValue}
                ></MainValue>
                ;
                <SubValue
                    fristValue={this.props.KValue}
                    secondValue={this.props.UValue}
                    subValue={this.state.subValue}
                ></SubValue>
                <ResetButton event={this.btnClick}></ResetButton>
            </div>
        );
    };
}

export default Calculation;
