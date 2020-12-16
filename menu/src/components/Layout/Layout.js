import React from "react";
import Main from "../Main/Main";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import classes from "./Layout.css";

import Aux from '../../hoc/Auxi'

const layout = (props) => (
  <Aux >
    <div className='Content'>
      <Navbar />
      <Main />
      <Footer />
    </div>
    <main>{props.children}</main>
  </Aux>
);

export default layout;
