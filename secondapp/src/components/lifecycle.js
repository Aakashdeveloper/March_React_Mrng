// 1 GET  Default State
// 2 SET Initial State
// 3 Before get created
// 4 Render Jsx
// 5 After get created
import React, {Component} from 'react';

class Lifecycle extends Component {
    // 1 GET  Default State
    constructor(props){
        super(props)
        // 2 SET Initial State
        this.state = {
            title:'Lifecycle hooks'
        }
    }

    // 3 Before get created
    componentWillMount(){
        console.log(">>>>//3 Befor get created");
        this.setState({title:'My Lifecycle hooks'});
    }

    componentWillUpdate(){
        console.log(">>>>Will Update");
    }

    componentDidUpdate(){
        console.log(">>>> Did Update");
    }

    shouldComponentUpdate(nextProps,nextState){
        if(nextState.title === "something else"){
            return false
        }

        return true

    }

    // 4 Render Jsx
    render(){
        console.log(">>>> 4 Render JSX")
        return(
            <div>
                <h1>{this.state.title}</h1>
                <div onClick={() => this.setState({title:'something else1'})}>
                Change Me</div>
            </div>
        )
    }

    // 5 After get created
    componentDidMount(){
        console.log(">>>> 5 After get created");
        document.querySelector('h1').style.color = 'red'
        
    }

    componentWillUnmount(){
        this.setState({title:''})
        alert('do you want to leave')
    }

}

export default Lifecycle;