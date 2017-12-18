import React from "react";
import { Col, Row, Container } from "../../components/Grid";

const Carousel = () => {
    let imagelist = [
        ["http://placehold.it/900x500/39CCCC/ffffff&text=This+is+Hotomation.", "First slide"],
        ["http://placehold.it/900x500/3c8dbc/ffffff&text=You+can+protect+your+home.", "Second slide"],
        ["http://placehold.it/900x500/f39c12/ffffff&text=You+can+control+your+home.", "Third slide"]

    ];

    return (
        <Container>
            <Row>
                <Col size="md-12">
                    <div className="box box-solid">
                        {/* <div className="box-header with-border">
                            <h3 className="box-title">Carousel</h3>
                        </div> */}
                        <div className="box-body">
                            <div id="carousel-example-generic" className="carousel slide" data-ride="carousel" data-interval="false">
                                <ol className="carousel-indicators">
                                    {
                                        imagelist.map((item, index) => 
                                            <li data-target="#carousel-example-generic" data-slide-to={index} className={index === 0 ? "active" : ""}></li>
                                        )
                                    }
                                </ol>
                                <div className="carousel-inner">
                                    {
                                        imagelist.map((item, index) => 
                                            <div className={index === 0 ? "item active" : "item"}>
                                                <img src={item[0]} alt={item[1]} style={{"width": "100%"}} />
        
                                                <div className="carousel-caption">
                                                    {item[1]}
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                                <a className="left carousel-control" href="#carousel-example-generic" data-slide="prev">
                                    <span className="fa fa-angle-left"></span>
                                </a>
                                <a className="right carousel-control" href="#carousel-example-generic" data-slide="next">
                                    <span className="fa fa-angle-right"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Carousel;

