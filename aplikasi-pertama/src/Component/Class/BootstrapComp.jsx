import React, { Component } from 'react';
import { Alert, Button, Table } from 'reactstrap';
class BootstrapComp extends Component {
    render() {
        return (
            <div>
                <Alert color="primary">
                    This is a primary alert with. Give it a click if you like.
                </Alert>

                <Button color="primary" size="lg" disabled>Primary button</Button>{' '}
                <Button color="secondary" size="lg" >Button</Button>{' '}
                <Button color="success" size="lg" >Button</Button>

                <Table striped>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        );

    }
}

export default BootstrapComp;