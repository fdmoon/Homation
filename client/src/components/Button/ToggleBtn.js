import React from "react";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
export const ToggleBtn = props => 
    <div className="checkbox td-center">
        <label>
            {
                props.initval == "0" ? 
                    <input type="checkbox" id={props.id} data-toggle="toggle" data-size="small" /> : 
                    <input type="checkbox" id={props.id} data-toggle="toggle" data-size="small" checked />
            }
        </label>
    </div>;

