import React, {Component} from 'react';
import Header from './Header';
import AlbumList from './albumList'

import './artist.css';

const Req_Url="http://localhost:8900/artists";

class Artist extends Component {
    constructor(props){
        super(props);

        this.state={
            artist: ''
        }
    }
    componentDidMount(){
        console.log(this.props)
        fetch(`${Req_Url}/${this.props.match.params.artistid}`,{
            method:'GET'
        }).then(response => response.json())
        .then(data => {
            console.log(">>>",data)
            this.setState({
                artist:data
            })
        })
    }

    render(){
        return(
            <div>
                <Header/>
                <div className="artist_bio">
                    <div className="artist_image">
                        <span style={{background:`url('/images/covers/${this.state.artist.cover}.jpg')
                            no-repeat`}}></span>
                    </div>
                    <div className="bio">
                        <h3>{this.state.artist.name}</h3>
                        <div className="bio_text">
                            {this.state.artist.bio}
                        </div>
                    </div>
                </div>
                <AlbumList albumList={this.state.artist.albums}/>
            </div>
        )
    }
}

export default Artist