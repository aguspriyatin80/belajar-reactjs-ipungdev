import React from 'react';
// import Beranda from '../Class/Beranda';
import Produk from '../Class/Produk';
// import Blog from './Blog';

const Home = () => {
    return <div>
        <Produk nama="Macbook 2020" stock="50" harga="33000000"/>
        <Produk nama="Macbook 2021" stock="40" harga="30000000"/>
        <Produk nama="Macbook 2019" stock="30" harga="25000000"/>
        <Produk nama="Macbook 2018" stock="20" harga="30000000"/>
        <Produk nama="Macbook 2017" stock="10" harga="17000000"/>
        <Produk nama="Macbook 2016" stock="10" harga="17000000"/>
        {/* <Beranda />
        <Blog tanggal="1 Januari 2020" judul="Belajar React.js" summary="Belajar React.js Mudah" />
        <Blog tanggal="1 Januari 2021" judul="Belajar Node.js" summary="Belajar Node.js Mudah" /> */}
    </div>
}

export default Home;