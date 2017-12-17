import React from "react";

export const ToggleBtn = props => 
    <div className="checkbox disabled">
        <label>
            {
                props.checked === 0 ? 
                    <input type="checkbox" data-toggle="toggle" data-size="small" data-onstyle="danger" disabled /> : 
                    <input type="checkbox" data-toggle="toggle" data-size="small" data-onstyle="danger" checked disabled />
            }
        </label>
    </div>;

