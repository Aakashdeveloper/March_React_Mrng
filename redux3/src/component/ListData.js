import React from 'react';

class ListData extends React.PureComponent{
    constructor(props){
        super(props);
        console.log('>>>>>',props)
    }

    componentDidMount(){
        this.props.fetchProperty();
    }

    render(){
        return(
            <h1>Property List</h1>
        )
    }
}


export default ListData;