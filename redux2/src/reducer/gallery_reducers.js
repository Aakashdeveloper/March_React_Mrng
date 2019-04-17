export default function(state={}, action){
    switch(action.type){
        case 'GET_GALLERIES':
            return {...state, galleries:action.payload}
        default:
            return state;
    }
}