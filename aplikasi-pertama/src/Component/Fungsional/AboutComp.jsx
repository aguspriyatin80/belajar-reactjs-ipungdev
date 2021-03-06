import React from 'react';

import {Jumbotron, Button, Container, Row, Col}  from 'reactstrap';
import CardComp from './CardComp';
const AboutComp = () => {
    return (
        <div>
            <Jumbotron fluid>
                <Container fluid>
                    <h1 className="display-3">About</h1>
                    <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr className="my-2" />
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <p className="lead">
                        <Button className="btn btn-danger" color="primary">Learn More</Button>
                    </p>
                </Container>
            </Jumbotron>
            <Container>
                <Row>
                    <Col><CardComp id="1" judul="Belajar React" tanggal="12/11/2020" ></CardComp></Col>
                    <Col><CardComp id="2" judul="Belajar Nodejs" tanggal="13/12/2020" ></CardComp></Col>
                    <Col><CardComp id="3" judul="Belajar Vue" tanggal="12/01/2021" ></CardComp></Col>
                </Row>
            </Container>
        </div>
    );
}

export default AboutComp;