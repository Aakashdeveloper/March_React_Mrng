import React from 'react';
import Banner from '../components/Banner';
import ArtistList from '../components/ArtistList';

const URL_ARTIST = 'http://localhost:8900/artists'

class Home extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            artists: ''
        }
    }

    componentDidMount(){
        fetch(URL_ARTIST,{
            method:'GET'
        })
        .then((response) => response.json())
        .then((data) =>{
            this.setState({
                artists:data
            })
        }) 

    }
    render(){
        console.log(">>>>render part")
        return(
            <div>
                <Banner></Banner>
                <ArtistList allArtist={this.state.artists}></ArtistList>
            </div>
        )
    }
}

export default Home;