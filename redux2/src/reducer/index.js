import { combineReducers } from 'redux';
import articles from './article_reducer';
import galleries from './gallery_reducers';

const rootReducer = combineReducers({
    articles,
    galleries
})

export default rootReducer;