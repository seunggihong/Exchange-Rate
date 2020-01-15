import React, { Component } from "react";
import axios from "axios";
import Calculation from "./Calculation";
import "./App.css";

class App extends Component {
    state = { datas: [], USD: 0, KRW: 0 };
    componentDidMount = async () => {
        const { data: datas } = await axios.get(
            "https://api.exchangeratesapi.io/latest"
        );
        this.setState({ datas });
        const EUR = this.state.datas.rates.KRW;
        const USD = this.state.datas.rates.USD;
        this.setState({ USD: USD });
        this.setState({ KRW: EUR });
    };

    render = () => {
        return (
            <div className="rate__main">
                <Calculation
                    valueOfKRW={this.state.KRW}
                    valueOfUSD={this.state.USD}
                    KValue={this.state.KRW}
                    UValue={this.state.USD}
                ></Calculation>
            </div>
        );
    };
}

export default App;
