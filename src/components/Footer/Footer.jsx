import React from 'react';
import './footer.css';
import {MdKeyboardDoubleArrowUp} from 'react-icons/md';

const Footer = () => {
  return (
    <section id='footer' className='container app__footer'>
      <a href="#">
        <MdKeyboardDoubleArrowUp/>
        <h2>Back to top</h2>
      </a>

      <a href="https://www.yoranschouppe.com/" target='_blank'>Website by Yoran Schouppe</a>
    </section>
  )
}

export default Footer