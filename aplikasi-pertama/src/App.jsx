import React from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import NavbarComp from './Component/Fungsional/NavbarComp';
import HomePage from './Component/Fungsional/HomePage';
import AboutComp from './Component/Fungsional/AboutComp';
import DetailComp from './Component/Fungsional/DetailComp';
import ListComp from './Component/Class/ListComp';
import TambahComp2 from './Component/Class/TambahComp2';
// import TambahComp from './Component/Class/TambahComp';
// import PostForm from './Component/Fungsional/PostForm';
// import BootstrapComp from './Component/Class/BootstrapComp';
// import Parent from './Component/Class/Parent';
// import Home from './Component/Fungsional/Home';


const App = ()=> {
  return (
                
      <BrowserRouter>
        <NavbarComp/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutComp} />
          <Route exact path="/detail/:id" component={DetailComp} />
          <Route exact path="/mahasiswa" component={ListComp} />
          <Route exact path="/mahasiswa/tambah" component={TambahComp2} />
        </Switch>
      </BrowserRouter>
    
    
  );
}

export default App;
