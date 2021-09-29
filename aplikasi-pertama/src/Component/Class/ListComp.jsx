import React, { Component } from 'react';
import axios from 'axios';
// import qs from 'querystring';
import {Table, Container, NavLink, Button} from 'reactstrap';
const api = 'https://gorest.co.in';


class ListComp extends Component {
    constructor(props){
        super(props)
        this.state = {
            mahasiswa: [],
            response: '',
            display: 'none'
        }
    }

    componentDidMount(){
        axios.get(api+'/public/v1/users').then(res=>{
            this.setState({
                mahasiswa: res.data.data
            })
        })        
    }
    render() {
        return (
            <Container>
                <h2>Data Mahasiswa</h2>
                <NavLink href="/mahasiswa/tambah"><Button color="primary">Tambah</Button></NavLink>
                <hr/>
                <Table dark>
                    <thead>
                        <tr>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>GENDER</th>
                            <th>STATUS</th>
                            <th>aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.mahasiswa.map(mahasiswa =>
                            <tr key={mahasiswa.id}>
                                <td>{mahasiswa.name}</td>
                                <td>{mahasiswa.email}</td>
                                <td>{mahasiswa.gender}</td>
                                <td>{mahasiswa.status}</td>
                                <td>edit | hapus</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </Container>
        );
    }
}
export default ListComp;