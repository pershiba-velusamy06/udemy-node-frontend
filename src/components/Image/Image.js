import React from 'react';

import './Image.css';

const Image = props => (
  // console.log(props.imageUr,"props.imageUr")
  <div
    // className="image"
    // style={{
    //   backgroundImage: `url('${props.imageUrl}')`,
    //   backgroundSize: props.contain ? 'contain' : 'cover',
    //   backgroundPosition: props.left ? 'left' : 'center'
    // }}
  >

    <img src={props.imageUr} alt='76457689876'/>
  </div>
);

export default Image;
