import constants from '../Constants';

const ACTION_CONST = constants.ACTION;
const imageType = constants.IMAGE_TYPE

let initState = [
    { count: 0, snapshots: [] }, // image
    { count: 0, snapshots: [] }, // hd
    { count: 0, snapshots: [] }, // navi
    { count: 0, snapshots: [] }, // aerial
]

export default (state = initState, action) => {
    switch (action.type) {
        case ACTION_CONST.DONE_LOADING: {
            let { data: { count, snapshots } } = action;
            state[action.idx] = {
                count, snapshots,
            };
            return state;
        }
        default:
            return state;
    }
}
