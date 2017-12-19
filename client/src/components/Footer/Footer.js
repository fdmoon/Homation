import React from "react";

const Footer = () => {
    let style = {
        "bottom": "0",
        "color": "#999",
        "backgroundColor": "#f7f7f7",
        "padding": "20px auto",
        "textAlign": "center",
        "height": "50px",
        "width": "100%",
        "paddingTop": "15px"
    };

    return (
        <footer style={style}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 myfooteritem">
                        {/* <ul className="list-inline text-center">
                            <li className="list-inline-item">
                                <a href="mailto:daekeun.moon@gmail.com">
                                    <span className="fa-stack fa-lg">
                                        <i className="fa fa-circle fa-stack-2x"></i>
                                        <i className="fa fa fa-envelope-o fa-stack-1x fa-inverse"></i>
                                    </span>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://www.linkedin.com/in/felix-daekeun-moon/" target="_blank">
                                    <span className="fa-stack fa-lg">
                                        <i className="fa fa-circle fa-stack-2x"></i>
                                        <i className="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                                    </span>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://github.com/fdmoon/" target="_blank">
                                    <span className="fa-stack fa-lg">
                                        <i className="fa fa-circle fa-stack-2x"></i>
                                        <i className="fa fa-github fa-stack-1x fa-inverse"></i>
                                    </span>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://stackoverflow.com/" target="_blank">
                                    <span className="fa-stack fa-lg">
                                        <i className="fa fa-circle fa-stack-2x"></i>
                                        <i className="fa fa fa-stack-overflow fa-stack-1x fa-inverse"></i>
                                    </span>
                                </a>
                            </li>
                        </ul> */}
                        <strong>Copyright &copy; 2017 Felix Moon | Neil Dhand</strong>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

