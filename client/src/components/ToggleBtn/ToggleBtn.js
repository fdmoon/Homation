import React, { Component } from "react";
// import { findDOMNode } from "react-dom";
// import $ from "jquery";
import ToggleSwitch from '@trendmicro/react-toggle-switch';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-toggle-switch/dist/react-toggle-switch.css';
import "./style.css";

class ToggleBtn extends Component {
    // componentDidMount() {
    //     const el = findDOMNode(this.refs.toggle);    // set ref="toggle" as a attribute in a specific tag
    //     $(el).on("click", event => {});
    // }

    state = {
        checked: this.props.checked === 0 ? false : true
    }

    render() {
        return (
            <div className="checkbox">
                <span className="unit" style={{"marginRight": "10px"}}>OFF</span>
                <ToggleSwitch
                    checked={this.state.checked}
                    onChange={(event) => {
                        let newChecked = !this.state.checked;
                        this.setState({ checked: newChecked });
                        this.props.handleControl(this.props.id, newChecked);
                    }}
                />
                <span className="unit">ON</span>
            </div>
        );
    }
}

export default ToggleBtn;

