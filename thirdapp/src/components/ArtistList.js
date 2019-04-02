import React, {Component} from 'react';
import { Link } from 'react-router-dom';

const ArtistList = (props) => {

    const renderArtist = ({allArtist}) => {
        console.log('allArtist>>>>',allArtist)
        if(allArtist){
            return allArtist.map((item)=>{
                const style = {
                    background:`url('/images/covers/${item.cover}.jpg') no-repeat`
                }
                return(
                    <Link to="/" key={item.id}
                    style={style}
                    className="artist_item">
                        <div>{item.name}</div>
                    </Link>
                )
            })
        }
        
    }

    return(
        <div className="artist_list">
            <h4>Artist List</h4>
            {renderArtist(props)}
        </div>
    )
}

export default ArtistList;