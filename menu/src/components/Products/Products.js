import React, { Component } from 'react';
import './Products.css';
import Buttons from './Buttons/Buttons'

class Products extends Component {

    render() {
        return (
            <div className='Container'>
            
                <Buttons />
                <div className='Slides'>Slide Show for Menu</div>
                
                
            </div>
        )
    }
    
}

export default Products;