import React from "react";
import "./Header.scss";
import { Container, Col, Row } from "react-bootstrap";

const LogoContainer = () => {
    return (
        <Container className="logo-container">
            <Row>
                <Col><img src={require("../pictures/sky-blue-news-logo-design-template-w43dp6a61d351b.png")} id="logo"/></Col>
                <Col xs={8} className="weather-container">
                    <div className="weather-widget">Weather Widget</div>
                </Col>
            </Row>
        </Container>
    )
};

export default LogoContainer;
