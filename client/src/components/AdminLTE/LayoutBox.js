import React from "react";

export const LayoutBox = props =>
    <div className="box">
        <div className="box-header with-border">
            <h3 className="box-title">{props.title}</h3>

            {/* <div className="box-tools pull-right">
                <button type="button" className="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip" title="Collapse">
                <i className="fa fa-minus"></i></button>
                <button type="button" className="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" title="Remove">
                <i className="fa fa-times"></i></button>
            </div> */}
        </div>
        <div className="box-body">
            {props.children}
        </div>
        {/* <div className="box-footer">
            Footer
        </div> */}
    </div>;

