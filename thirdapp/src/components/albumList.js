import React from 'react';

const AlbumList = (props) => {
    const showAlbums = ({albumList}) => {
        if(albumList){
            return albumList.map((item,index) => {
                return(
                    <img key={index} src={`/images/albums/${item.cover}.jpg`}/>
                )
            })
        }

    }
    return(
        <div className="album_list">
            <h1>Albums</h1>
            {showAlbums(props)}
        </div>
    )
}

export default AlbumList;
