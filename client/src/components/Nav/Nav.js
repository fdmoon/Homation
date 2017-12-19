import React from "react";

const Nav = () =>
    <div>
        <nav className="navbar navbar-inverse navbar-top">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="collapsed navbar-toggle" data-target="#navlist">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a href="/" className="navbar-brand">
                        Homation
                    </a>
                </div>
                <div className="navbar navbar-collapse collapse" style={{"border": "0", "marginBottom": "0"}} id="navlist">
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="#contactModal" data-toggle="modal">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>

        {/* Modal */}
        <div className="modal fade" id="contactModal" role="dialog">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title" style={{"fontSize": "1.5em"}}>Contact Information
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </h1>
                    </div>
                    <div className="modal-body">
                        <p><strong>Email:</strong></p>
                        <ul>
                            <li>Send Felix an email at <strong>daekeun.moon@gmail.com</strong>.</li>
                            <li>Send Neil an email at <strong>neil_dhand@baylor.edu</strong>.</li>
                        </ul>
                        <br />
                        <p><strong>LinkedIn:</strong></p>
                        <ul>
                            <li>Drop in on Felix's LinkedIn <a href="https://www.linkedin.com/in/felix-daekeun-moon/" target="_blank">here</a>.</li>
                            <li>Drop in on Neil's LinkedIn <a href="https://www.linkedin.com/in/neil-dhand/" target="_blank">here</a>.</li>
                        </ul>
                        <br />
                        <p><strong>GitHub:</strong></p>
                        <ul>
                            <li>Drop in on Felix's GitHub <a href="https://github.com/fdmoon/" target="_blank">here</a>.</li>
                            <li>Drop in on Neil's GitHub <a href="https://github.com/neildhand" target="_blank">here</a>.</li>
                        </ul>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div> 
    </div>;

export default Nav;

