import React from "react";
import { Tag } from "antd";

const TvShowCard = ({show}) => {
    return <div className="Card">

        {/*Title (Year), Genre, Rating, Description, Cast, Banner*/}
        <div className="Content">
            <div className="Information">
                <h1>{show.title} ({show.year})</h1>
                <div className="Tags">
                    <div>
                        {show.genre.split(",").map((tag) => (
                            <Tag>{tag}</Tag>
                        ))}
                    </div>
                    <div>
                        <span className="Star">{show.rating}</span>
                    </div> 
                </div>  
                <p><span><b>Description:</b> {show.description} </span></p>
                <p><span><b>Cast:</b> {show.cast} </span></p>

            </div>

            <div className="Banner">
                <img src={show.banner} alt="banner"/>
            </div>
        </div>

        {/*Trailer*/}
        <div className="Trailer">
            <iframe width="780" height="390" src={show.trailer} frameborder="0" allowFullScreen title="trailer"></iframe>
        </div>

    </div>
}

export default TvShowCard;