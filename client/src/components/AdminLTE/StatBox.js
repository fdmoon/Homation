import React from "react";

export const StatBox = props =>
    <div className={`small-box ${props.bgColor}`}>
        <div className="inner">
            <p>{props.name}</p>
            {props.children}
        </div>
        <div className="icon">
            <i className={`ion ${props.ionName}`}></i>
        </div>
        <a href={props.link} className="small-box-footer">More info <i className="fa fa-arrow-circle-right"></i></a>
    </div>;

