import { getProperty } from './propertySearch';

export function propertyData(response){
    return {type:'GET_OPENHOUSE_DETAILS', payload:response}
}

const getPropertyList = () => async(dispatch) => {
    try{
        const response = await(getProperty());
        dispatch(propertyData(response))
    } catch(err){
        dispatch(propertyData([]))
    }
}

export const fetchProperty = {
    propertyData,
    getPropertyList
}