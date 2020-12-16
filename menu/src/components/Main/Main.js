import React from 'react';
import { Col, Row } from 'antd';
import Checkout from '../Checkout/Checkout';
import Products from '../Products/Products';

import './Main.css';

function Main() {
    return (
        <div>
            <div id="content">
                    <Products />
                    <Checkout />
            </div>        
        </div>
    )
}

export default Main;