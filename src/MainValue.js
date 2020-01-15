import React, { Component } from "react";

class MainValue extends Component {
    render = () => {
        return (
            <div className="main__contents">
                <input
                    type="number"
                    className="content"
                    value={this.props.mainValue}
                    onChange={this.props.onChange}
                />
                <h1>EUR</h1>
            </div>
        );
    };
}

export default MainValue;
