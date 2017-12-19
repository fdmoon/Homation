import React from "react";
import { Col, Row, Container } from "../../components/Grid";

const Carousel = () => {
    let imagelist = [
        ["/img/pptx/page-1.png", ""],
        ["/img/pptx/page-2.png", ""],
        ["/img/pptx/page-3.png", ""],
        ["/img/pptx/page-4.png", ""],
        ["/img/pptx/page-5.png", ""],
        ["/img/pptx/page-6.png", ""],
        ["/img/pptx/page-7.png", ""],
        ["/img/pptx/page-8.png", ""]
    ];

    return (
        <Container fluid>
            <Row>
                <Col size="md-2">&nbsp;</Col>
                <Col size="md-8">
                    <div className="box box-solid">
                        {/* <div className="box-header with-border">
                            <h3 className="box-title">Carousel</h3>
                        </div> */}
                        <div className="box-body" style={{"border": "5px solid #f4f4f4"}}>
                            <div id="carousel-example-generic" className="carousel slide" data-ride="carousel" data-interval="false" style={{"border": "3px solid #000"}}>
                                <ol className="carousel-indicators">
                                    {
                                        imagelist.map((item, index) => 
                                            <li key={index} data-target="#carousel-example-generic" data-slide-to={index} className={index === 0 ? "active" : ""}></li>
                                        )
                                    }
                                </ol>
                                <div className="carousel-inner">
                                    {
                                        imagelist.map((item, index) => 
                                            <div key={index} className={index === 0 ? "item active" : "item"}>
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
                <Col size="md-2">&nbsp;</Col>
            </Row>
        </Container>
    );
}

export default Carousel;

