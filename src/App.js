import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import PageNotFound from './components/PageNotFound';


class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <ProductList />
        <Details />
        <Cart />
        <PageNotFound />
      </>
    );
  }
}
  
export default App;
