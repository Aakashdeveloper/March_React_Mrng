const defaultState = {
    data:[]
}
export default function(state=defaultState, action){
    switch(action.type){
        case 'GET_OPENHOUSE_DETAILS':
            return {...state,data:action.payload}
        default:
            return state;
    }
}