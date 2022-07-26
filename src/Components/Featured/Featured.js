import React, { useEffect, useState } from 'react'
import "./Featured.scss";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoIcon from '@mui/icons-material/Info';
import axios from 'axios';
import { Link } from "react-router-dom";

const Featured = ({ type, setGenre }) => {
    const [content, setContent] = useState({});

    useEffect(() => {
        const getRandomContent = async () => {
            try {
                const res = await axios.get(`https://netflixclonebyvignesh.herokuapp.com/api/movies/random?type=${type === undefined ? "series" : type}`,
                    {
                        headers: {
                            token:
                                "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
                        },
                    });

                setContent(res.data[0]);
            } catch (err) {
                console.log(err);
            }
        };

        getRandomContent();
    }, [type]);

    return (
        <div className='featured'>
            {type && (
                <div className='category'>
                    <span>{type === "movie" ? "Movies" : "Series"}</span>
                    <select name='genre' id='genre' onChange={(e) => setGenre(e.target.value)}>
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
            )}

            <img src={content.imgTitle} alt=""></img>

            <div className='info'>
                <p className='title'>{content.title}</p>
                <span className='desc'>{content.desc}</span>

                <div className='buttons'>
                    <button className='play'>
                        <Link to={{ pathname: "/watch", movie: content }}>
                            <PlayArrowIcon />
                            <span>Play</span>
                        </Link>
                    </button>

                    <button className='more'>
                        <InfoIcon />
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Featured;
