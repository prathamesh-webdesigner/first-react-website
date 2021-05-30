import React, { Component } from 'react';

class Api extends Component {
    constructor() {
        super();
        this.state = {
            user: null
        }
    }
    componentDidMount() {
        fetch('https://reqres.in/api/users').then((resp) => {
            resp.json().then((result) => {
                // console.warn(result.data);
                this.setState({ users: result.data })
            })
        })
    }
    render() {
        return (
            <>
                <div className="my-5">
                    <h1 className='text-center font-weight-bold'>API</h1>
                </div>
                <div className='container'>
                    <div className='row'>
                        <table class="table table-dark table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">First Name</th>
                                    <th scope="col">Last Name</th>

                                </tr>
                            </thead>
                            {
                                this.state.users ?
                                    this.state.users.map((item, i) =>
                                        <tbody>
                                            <tr>
                                                <td>{i}</td>
                                                <td>{item.first_name}</td>
                                                <td>{item.last_name}</td>
                                            </tr>

                                        </tbody>
                                    )
                                    :
                                    null
                            }
                        </table>
                    </div>
                </div>
            </>
        );

    }
}

export default Api;