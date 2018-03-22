import React from 'react';
import PropTypes from 'prop-types';
import Thumbnail from './thumnail';

// const thumbnails = [
//     {
//         text:"普通渲染图",
//         src: require('../res/grid_left/1.jpg'),
//     },
//     {
//         text:"全景图",
//         src: require('../res/grid_left/1.jpg'),
//     },
//     {
//         text:"全屋漫游图",
//         src: require('../res/grid_left/1.jpg'),
//     },
//     {
//         text:"鸟瞰图",
//         src: require('../res/grid_left/1.jpg'),
//     },    {
//         text:"普通渲染图",
//         src: require('../res/grid_left/1.jpg'),
//     },
//     {
//         text:"全景图",
//         src: require('../res/grid_left/1.jpg'),
//     },
//     {
//         text:"全屋漫游图",
//         src: require('../res/grid_left/1.jpg'),
//     },
//     {
//         text:"鸟瞰图",
//         src: require('../res/grid_left/1.jpg'),
//     },
// ];

const RightGridPanel = ({ thumbnails }) => (
    <div className="rightGridPanel">
        {
            thumbnails.map(thumb => (
                <Thumbnail
                    {...thumb} />
            ))
        }
    </div>
);

export default RightGridPanel;
