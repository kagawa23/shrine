import React,{Component,PropTypes} from 'react';

const ImageButton = ({ type, src, text , onClick}) => (
    <li>
        <img src={src} alt="img" onClick={(e)=>{
                e.stopPropagation();
                onClick(type);
            }} />
        {text}
    </li>
);

export default ImageButton;
