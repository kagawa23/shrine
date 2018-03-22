import { connect } from 'react-redux';
// import { setImageType, getContent } from '../actions/gridView';
import rightGrid from '../components/rightGridPanel';

const mapStateToProps = (state, ownProps) => {
    let { viewOptions: { imageType }, content } = state;
    let { snapshots } = content[imageType];
    return {
        thumbnails: snapshots.map(snapshot => ({
            text: '',
            src: snapshot.url,
        })),
    };
};

const mapDispatchToProps = (dispatch) => ({
    onClick: () => {
        // dispatch(setImageType(type)); //set image type
        // dispatch(getContent());       // set right panel content
    }
})

const gRightContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(rightGrid);

export default gRightContainer;
