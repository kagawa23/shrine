import { combineReducers } from 'redux';
import viewOptions from './viewOptions';
import content from './content';

const projectSummary = combineReducers({
    viewOptions,
    content,
});

export default projectSummary;
