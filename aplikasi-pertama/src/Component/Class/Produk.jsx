import React, { Component } from 'react';

import ProdukStyle from './CSS/produk-style.css';

class Produk extends Component {
    constructor(props){
        super(props)
        this.state = {
            stock: this.props.stock,
            sub: "Beli",
            status: "Tersedia",
            disabled: false

        }

    }

    ButtonBeli = () =>{
        this.setState({
            stock: this.state.stock - 1
        })
        if(this.state.stock === 1) {
            this.setState({
                status: "Habis",
                disabled: true
            })
        }
    }
    render() {
        return (
            <div style={ProdukStyle} className="box-stock">
                <h2>{this.props.nama}</h2>
                <img src="https://placeimg.com/640/480/tech" alt="" />
                <p>Harga : {this.props.harga}</p>
                <p>Stock : {this.state.stock}</p>
                <button className="btn-click" onClick={this.ButtonBeli} disabled={this.state.disabled}>Beli</button>
                <p>{this.state.status}</p>
            </div>
        );
    }
}

export default Produk;