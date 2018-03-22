import React from 'react';
import PropTypes from 'prop-types';
import LeftGridPanel from '../container/gridLeftContainer';
import RightGridPanel from '../container/girdRightContainer';
import '../style/gridView.css';

const GridView = () => {
    return (    
        <div className="panelGridView">
            <LeftGridPanel />
            <RightGridPanel />
        </div>
    );
};

export default GridView;