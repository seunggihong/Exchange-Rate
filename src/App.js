import React from "react";
import axios from "axios";
import "./App.css";

class App extends React.Component {
    state = { datas: [], USD: 0, KRW: 0, mainValue: null, subValue: null };

    btnClick = () => {
        var e = document.getElementsByClassName("contents");
        for (var i = 0; i < e.length; i++) {
            e[i].value = "";
        }
        this.setState({ mainValue: null, subValue: null });
    };

    changeValue = e => {
        var data = document.getElementById("select__box");
        var contentsData = document.getElementsByClassName("contents");
        var valueOfKRW = String(this.state.KRW);

        if (contentsData !== null) {
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
        }

        console.log(this.state.mainValue);
        console.log(this.state.subValue);
    };

    inputChangedHandler = e => {
        const updatedKeyword = e.target.value;
        return updatedKeyword;
    };

    componentDidMount = async () => {
        var { data: datas } = await axios.get("https://api.exchangeratesapi.io/latest");
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
                    <input type="number" className="contents" onChange={this.changeValue} />
                    <h1>EUR</h1>
                </div>
                <div className="sub__contents">
                    <input type="number" className="contents" value={this.state.subValue} onChange={this.inputChangedHandler} />
                    <select className="choose__world" id="select__box">
                        <option className="world__value" value={this.state.KRW}>
                            KRW
                        </option>
                        <option className="world__value" value={this.state.USD}>
                            USD
                        </option>
                    </select>
                </div>

                <button onClick={this.btnClick} className="reset__btn">
                    RESET
                </button>
            </div>
        );
    }
}

export default App;
