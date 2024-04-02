import React from "react"
import "./Header.scss";
import { Col, Container, Row } from "react-bootstrap";

const Header = () => {
    return (
        <Container>
            <Row>
                <Col><img src={require("../pictures/Weather-Report-Transparent.png")} width={"200px"}/></Col>
                <Col xs={8}>
                    <div className="navigation">
                        <a href="#">Home</a>
                        <a href="#">News</a>
                        <a href="#">Weather</a>
                        <a href="#">Profile</a>
                    </div>
                </Col>
            </Row>
        </Container>
    )
};

export default Header;
