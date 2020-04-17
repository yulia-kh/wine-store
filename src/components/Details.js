import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { id, company, img, info, price, title} = value.detailProduct;
          return (
            <div className='container py-5'>
              <div className='row'>
                <div className='col-10 mx-auto text-center text-slanted text-blue my-5'>
                    <h1>{title}</h1>
                </div>
                <div className='col-10 mx-auto col-md-6 my-3'>
                  <img src={img} className='img-fluid' alt={title}/>
                </div>
                <div className='col-10 mx-auto col-md-6 my-3'>
                  <h4 className='text-title text-muted mt-3 mb-2'>
                    Made by: <span>{company}</span>
                  </h4>
                  <h4 className='text-blue'>
                    <strong>Price: <span>$</span>{price}</strong>
                  </h4>
                  <h5 className='text-capitalize font-weight-bold mt-3 mb-0'>
                    Details:
                  </h5>
                  <p className='text-muted lead'>{info}</p>
                  {/* buttons */}
                  <div>
                    <Link to='/'>
                      <ButtonContainer>Back to Products</ButtonContainer>
                    </Link>
                    <ButtonContainer cart onClick={() => {
                      value.addToCart(id);
                      value.openModal(id);
                    }}>
                      Add to Cart
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          )
        }}
      </ProductConsumer>
    )
  }
}