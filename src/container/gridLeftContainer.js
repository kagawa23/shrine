import { connect } from 'react-redux';
import { setImageType, getContent } from '../actions/gridView';
import leftGrid from '../components/leftGridPanel';


const mapStateToProps = (state, ownProps) =>({
    imageType: state.viewOptions.imageType,
})

const mapDispatchToProps = (dispatch) => ({
    onClick: (type) => {
        dispatch(setImageType(type));
        dispatch(getContent());
    }
})

const gLeftContainer = connect(
    mapDispatchToProps,
    mapDispatchToProps,
)(leftGrid);


export default gLeftContainer;
