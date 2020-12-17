import React, { Component } from 'react';
import './Products.css';
import Buttons from './Buttons/Buttons'

class Products extends Component {

    render() {
        return (
            <div className='Container'>
            
                <Buttons />
                <div className='Slides'>Products Comp</div>
                
                
            </div>
        )
    }
    
}

export default Products;