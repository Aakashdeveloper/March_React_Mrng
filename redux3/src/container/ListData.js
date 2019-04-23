import { connect } from 'react-redux';
import { fetchProperty } from '../actions';
import ListData from '../component/ListData';

export const mapStateToProps = (state) => {
    console.log('>>>>>',state)
    return{
        list:state.propertyReducer.data
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        fetchProperty: () => {
            return dispatch(fetchProperty.getPropertyList());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ListData)