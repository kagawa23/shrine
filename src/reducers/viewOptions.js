import Constants from '../Constants';
import { combineReducers } from 'redux';

const viewType = (state=Constants.VIEW_TYPE.GRID_VIEW) => !state

const imageType = (state=Constants.IMAGE_TYPE.IMAGE,action) => {
    switch(action.type){
        case Constants.ACTION.SWITCH_IMAGE_TYPE:
           return action.imageType
        default:
            return state;
    }
};

const viewOptions = combineReducers({
    viewType,
    imageType,
});

export default viewOptions;
