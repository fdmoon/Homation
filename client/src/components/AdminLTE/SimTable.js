import React from "react";
import "./style.css"

export const SimTable = props => 
    <div className="box">
        <div className="box-header with-border">
            <h3 className="box-title">{props.title}</h3>
        </div>

        <div className="box-body">
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th className="th-center" style={{"width": "40px"}}>#</th>
                        <th>Name</th>
                        <th>Descriptioin</th>
                        <th className="th-center" style={{"width": "130px"}}>Current Status</th>
                    </tr>
                </thead>
                <tbody>
                {
                    props.args.map((item, index) => {

                        return (
                            <tr>
                                <td className="td-text td-center">{index + 1}</td>
                                <td className="td-text">{item.name}</td>
                                <td className="td-text">{item.description}</td>
                                {
                                    item.value === 0 ? 
                                        <td className="td-text td-center"><span className="bg-red st-text">OFF</span></td> :
                                        <td className="td-text td-center"><span className="bg-green st-text">ON</span></td>
                                }
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

