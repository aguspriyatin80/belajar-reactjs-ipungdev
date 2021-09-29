import React, { Component } from 'react';
import axios from 'axios';
// import {Link} from 'react-router-dom';
import { Container, Col, Row, Form, FormGroup, Alert, Label, Input, Button } from 'reactstrap';
const api = 'https://gorest.co.in';
class TambahComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            gender: '',
            status: '',
            response: '',
            display: 'none'

        }
    }
    handleChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }
    
    handleSubmit=()=>{
       
        let mahasiswa = {
           name: this.state.name,
           email: this.state.email
        }
        axios.post(api+'public/v1/users', mahasiswa).then(response=>{ 
            console.log(response.data.data)
            
        });
     }
    render() {
        return (
            <Container>
                <br/>
                <h4>Form Tambah Data</h4>
                <Alert color="success" style={{display:this.state.display}}>
                    {this.state.response}
                </Alert>
                <br/>
                <Form className="form">
                    <Col>
                        <Label>Name</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="name" value={this.state.name} onChange = {this.handleChange} placeholder="input name"></Input>
                                </Col>
                            </Row>
                        </FormGroup>
                        <Label>Email</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="email" value={this.state.email} onChange = {this.handleChange} placeholder="input email"></Input>
                                </Col>
                            </Row>
                        </FormGroup>
                       
                        <Button onClick={this.handleSubmit}>Submit</Button>
                    </Col>
                </Form>
            </Container>
        );
    }
}

export default TambahComp;