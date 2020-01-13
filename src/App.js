import React from "react";
import axios from "axios";
import ChooseWorld from "./ChooseWorld";
import "./App.css";

class App extends React.Component {
    state = { datas: [], USD: 0, KRW: 0, mainValue: "", subValue: "" };

    btnClick = () => {
        const e = document.getElementsByClassName("contents");
        // eslint-disable-next-line
        for (let index of e) {
            e.value = "";
        }
        this.setState({ mainValue: "", subValue: "" });
    };

    changeValue = e => {
        const data = document.getElementById("select__box");
        const valueOfKRW = String(this.state.KRW);
        if (data.options[data.selectedIndex].value === valueOfKRW) {
            this.setState({
                mainValue: e.target.value,
                subValue: this.state.mainValue * this.state.KRW
            });
        } else {
            this.setState({
                mainValue: e.target.value,
                subValue: parseInt(this.state.mainValue * this.state.USD)
            });
        }

        console.log(this.state.mainValue);
        console.log(this.state.subValue);
    };

    inputChangedHandler = e => {
        const updatedKeyword = e.target.value;
        return updatedKeyword;
    };

    componentDidMount = async () => {
        const { data: datas } = await axios.get("https://api.exchangeratesapi.io/latest");
        this.setState({ datas });
        const EUR = this.state.datas.rates.KRW;
        const USD = this.state.datas.rates.USD;
        this.setState({ USD: USD });
        this.setState({ KRW: EUR });
    };

    render() {
        return (
            <div className="rate__main">
                <div className="main__contents">
                    <input type="number" className="contents" value={this.state.mainValue} onChange={this.changeValue} />
                    <h1>EUR</h1>
                </div>
                <div className="sub__contents">
                    <input type="number" className="contents" value={this.state.subValue} onChange={this.inputChangedHandler} />
                    <ChooseWorld
                        fristValue={this.state.KRW}
                        secondValue={this.state.USD}
                        fristCountry="KRW"
                        secondContry="USD"
                    ></ChooseWorld>
                </div>
                <button onClick={this.btnClick} className="reset__btn">
                    RESET
                </button>
            </div>
        );
    }
}

export default App;
