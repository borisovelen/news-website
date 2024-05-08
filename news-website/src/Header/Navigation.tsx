import React from "react"
import "./Header.scss";
import { Container, Col, Row } from "react-bootstrap";
import { FaSearch, FaUser } from "react-icons/fa";

const Navigation = () => {
    return (
        <Container fluid className="navigation-container">
            <Container>
                <Row>
                    <Col xs={10}>
                        <div className="navigation">
                            <a className="active" href="#">Home</a>
                            <a href="#">News</a>
                            <a href="#">Weather</a>
                            <a href="#">Profile</a>
                        </div>
                    </Col>
                    <Col>
                        <div className="profile-container">
                            <a><FaSearch color="#f5f5f5"/></a>
                            <a><FaUser color="#f5f5f5"/></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
};

export default Navigation;
