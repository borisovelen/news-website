import React from "react"
import "./Header.scss";
import { Col, Row } from "react-bootstrap";

const Header = () => {
    return (
        <Row>
            <Col><img src={require("../pictures/Weather-Report-Transparent.png")} id="logo"/></Col>
            <Col xs={8}>
                <div className="navigation">
                    <a className="active" href="#">Home</a>
                    <a href="#">News</a>
                    <a href="#">Weather</a>
                    <a href="#">Profile</a>
                </div>
            </Col>
        </Row>
    )
};

export default Header;
