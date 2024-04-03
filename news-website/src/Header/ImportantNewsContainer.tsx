import React from "react";
import "./Header.scss";
import { Container, Col, Row } from "react-bootstrap";
import { IoIosWarning } from "react-icons/io";

const ImportantNewsContainer = () => {
    return (
        <Container fluid className="important-news">
            <Container>
                <Row >
                    <Col xs={1}>
                        <IoIosWarning className="warningIcon" color="#f5f5f5" width="50px"/>
                    </Col>
                    <Col xs={10}>
                        <p id="important-message">Vladimir Putin announces plans to step down as President of Russia, citing the need for new leadership to address the country's evolving challenges.
                        Vladimir Putin announces plans to step down as President of Russia, citing the need for new leadership to address the country's evolving challenges.
                        </p>
                    </Col>
                    <Col xs={1}>
                        <IoIosWarning className="warningIcon" color="#f5f5f5" width="50px"/>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
};

export default ImportantNewsContainer;
