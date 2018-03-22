import React from 'react';
import PropTypes from 'prop-types';
import ImageButton from './imageButton';

const imgs = [
    {
        text: '普通渲染图',
        src: require('../res/grid_left/1.jpg'),
        type: 0,
    },
    {
        text: '全景图',
        src: require('../res/grid_left/1.jpg'),
        type: 1,
    },
    {
        text: '全屋漫游图',
        src: require('../res/grid_left/1.jpg'),
        type: 2,
    },
    {
        text: '鸟瞰图',
        src: require('../res/grid_left/1.jpg'),
        type: 3,
    },
]

const LeftGridPanel = ({ onClick }) => (
    <div className="leftGridPanel">
        <ul>
            {
                imgs.map(content => (
                    <ImageButton
                        key={content.type}
                        onClick={onClick}
                        {...content} />
                ))
            }
        </ul>
    </div>
);

LeftGridPanel.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default LeftGridPanel;