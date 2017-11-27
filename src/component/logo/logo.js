import React, { Component } from "react";
import logoImg from "./job.png";
import "./logo.css";


class Loge extends Component {
    render() {
        return (
            <div className="loge-container">
                <img src={logoImg} alt=""/>
            </div>
        )
    }
}

export default Loge 