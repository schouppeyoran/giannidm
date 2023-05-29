import React from 'react';
import './footer.css';
import {MdKeyboardDoubleArrowUp} from 'react-icons/md';
import { images } from '../../constants';

const Footer = () => {
  return (
    <section id='footer' className='container app__footer'>
      <a href="#">
        <MdKeyboardDoubleArrowUp/>
        <h2>Back to top</h2>
      </a>

      <a href="https://www.yoranschouppe.com/" target='_blank'>
        <img src={images.logo} alt="" />
        Website by <br /> Yoran Schouppe
      </a>
    </section>
  )
}

export default Footer