import constants from '../Constants';
import FPMiddlewareService from '../io/request/fpMiddleware'

const IMAGE_TYPE = ['image', 'panorama', '', 'aerial' ];

export const setImageType = imageType => ({
    type: constants.ACTION.SWITCH_IMAGE_TYPE,
    imageType,
});

const setContent = (data, idx) => ({
    type: constants.ACTION.DONE_LOADING,
    data,
    idx,
});

export const getContent = () => async (dispatch, getState) => {
    try {
        let { viewOptions: { imageType: type } } = getState();
        let response = await FPMiddlewareService.getImageInfo(IMAGE_TYPE[type]);
        await dispatch(setContent(response, type));
    } catch (err) {
        console.log(err);
    }
};

export const addTodo = text => ({
    type: 'ADD_TODO',
    text,
});

export const setVisibility = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter,
});

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id,
});

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
};
