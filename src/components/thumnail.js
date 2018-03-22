import React from 'react';

// let img1 = require('../res/grid_left/1.jpg');

// let str = 'test';

const Thumbnail = ({ src , text, onClick}) => (
    <div className="thumbnail">
        <img src={src} alt="img" />
        {text}
    </div>
)

export default Thumbnail;
