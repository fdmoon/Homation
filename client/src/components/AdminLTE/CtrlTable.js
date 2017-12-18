import React from "react";
import ToggleBtn from "../ToggleBtn";
import "./style.css"

export const CtrlTable = props => 
    <div className="box box-ex">
        <div className="box-header with-border">
            <h3 className="box-title">{props.title}</h3>
        </div>

        <div className="box-body">
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th className="th-center" style={{"width": "50px"}}>#</th>
                        <th>Name</th>
                        <th>Descriptioin</th>
                        <th className="th-center">Current Status</th>
                        <th className="th-center" style={{"width": "200px"}}>Control</th>
                    </tr>
                </thead>
                <tbody>
                {
                    props.args.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td className="td-text td-center">{index + 1}</td>
                                <td className="td-text">{item.name}</td>
                                <td className="td-text">{item.description}</td>
                                {
                                    item.value === 0 ?
                                        <td className="td-text td-center"><span className="st-text" style={{"backgroundColor": "#f2ece9"}}>OFF</span></td> :
                                        <td className="td-text td-center"><span className="bg-red st-text"> ON </span></td>
                                }
                                <td className="td-center">
                                    <ToggleBtn id={item._id} checked={item.value} handleControl={props.handleControl} />
                                </td>
                                {/* <td className="td-item td-center">
                                    <a id={item._id} className="btn btn-primary" onClick={() => props.handleControl(item._id, !item.value)}>
                                        <i className="fa fa-refresh fa-1x"></i>
                                    </a>
                                </td> */}
                            </tr>
                        );
                    })
                }
                </tbody>
            </table>
        </div>

        {/* <div className="box-footer clearfix">
            <ul className="pagination pagination-sm no-margin pull-right">
                <li><a href="#">&laquo;</a></li>
                <li><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">&raquo;</a></li>
            </ul>
        </div> */}
    </div>;

