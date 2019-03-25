import React from 'react';

const NewsList = (props) => {
    console.log("in newslist", props)

    const displayItem = props.news.map((data) => {
        return(
            <div>
                <h3>{data.title}</h3>
                <div>
                    {data.feed}
                </div>
            </div>
        )
    })

    return(
        <div>
            {displayItem}
        </div>
    )
}

export default NewsList;