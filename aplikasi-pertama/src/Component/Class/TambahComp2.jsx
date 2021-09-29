import React, { useEffect, useState } from 'react';
import { Container, Col, Row, Form, FormGroup, Alert, Label, Input, Button } from 'reactstrap';
export default function TambahComp2() {
    const [user, setUser] = useState({
        name: '',
        gender: '',
        email: '',
        status: '',
    });

    //   const [loading, setLoading] = useState(false);

    // const onChangeName = (value) => {
    //     setUser({ ...user, name: value });
    // };

    // const onChangeGender = (value) => {
    //     setUser({ ...user, gender: value });
    // };

    // const onChangeEmail = (value) => {
    //     setUser({ ...user, email: value });
    // };

    const onChangeStatus = (value) => {
        setUser({ ...user, status: value });
    };
    const handleChange = (e) => {
        this.setState({[e.target.name]:[e.target.value]})
    }

    const saveData = (() => {
    
        const requestOptions = {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            // headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
            body: {
                name: user.name,
                email: user.email,
                gender: user.gender,
                status: user.status
            }
        };
        fetch('https://gorest.co.in/public/v1/users', requestOptions)
            .then(response => response.json())
            .then(user => setUser(user.id));
    }) 

    useEffect(() => {
        // POST request using fetch inside useEffect React hook        
        saveData()            
        console.log('saving')
            // empty dependency array means this effect will only run once (like componentDidMount in classes)    
}, []);
     



    return (
        <Container>
            <br />
            <h4>Form Tambah Data</h4>
            {/* <Alert color="success" style={{display:this.state.display}}>
                    {this.state.response}
                </Alert> */}
            <br />
            <Form className="form">
                <Col>
                    <Label>Name</Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Input type="text" name="name" onChange={(value) => handleChange(value)} placeholder="input name"></Input>
                            </Col>
                        </Row>
                    </FormGroup>
                    <Label>Email</Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Input type="text" name="email" onChange={(value) => handleChange(value)} placeholder="input email"></Input>
                            </Col>
                        </Row>
                    </FormGroup>
                    <Label>Gender</Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Input type="text" name="gender" onChange={(value) => handleChange(value)} placeholder="input gender"></Input>
                            </Col>
                        </Row>
                    </FormGroup>
                    <Label>Status</Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Input type="text" name="status" onChange={(value) => handleChange(value)} placeholder="input status"></Input>
                            </Col>
                        </Row>
                    </FormGroup>
                    <Button onClick={saveData}>Submit</Button>
                </Col>
            </Form>
        </Container>
    );
}


