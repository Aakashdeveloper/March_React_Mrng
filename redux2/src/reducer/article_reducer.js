export default function(state={}, action){
    switch(action.type){
        case 'GET_LATEST':
            return {...state, latest:action.payload}
        case 'GET_ARTICLE':
            return {...state, articles:action.payload}
        case 'GET_SELCETED_NEWS':
            return {...state, selected:action.payload}
        case 'CLEAR_SELCETED_NEWS':
            return {...state, selected:action.payload}
        case 'HANDLE_LIKES_ARTICLE':
            return {...state, selected:[action.payload]}
        default:
            return state;
    }
}