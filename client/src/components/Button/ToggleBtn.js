import React from "react";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
export const ToggleBtn = props => 
    <div className="checkbox">
        <label>
            <input type="checkbox" id={props.name} data-toggle="toggle" />
            <strong>{props.children}</strong>
        </label>
    </div>;

