import React, { useState, useEffect } from 'react';
import "./Listitem.scss";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import axios from 'axios';
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

const Listitem = ({ index, item }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [movie, setMovie] = useState({});

    useEffect(() => {
        const getMovie = async () => {
            try {
                const res = await axios.get(
                    `https://netflixclonebyvignesh.herokuapp.com/api/movies/find/` + item,
                    {
                        headers: {
                            token:
                                "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
                        },
                    },
                );
                setMovie(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getMovie();
    }, [item]);

    return (
        <Link to={{ pathname: "/watch", movie: movie }}>
            <div
                style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
                className='listItem'
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                {!isHovered && (
                    <>
                        <img src={movie?.imgSm} alt=''></img>
                    </>
                )}

                {isHovered && (
                    <>
                        <ReactPlayer
                            url={movie.trailer}
                            playing={true}
                            width="320px"
                            height="185px"
                            muted
                        />

                        <div className='itemInfo'>
                            <div className='icons'>
                                <PlayArrowIcon className='icon' />
                                <AddIcon className='icon' />
                                <ThumbUpOutlinedIcon className='icon' />
                                <ThumbDownOutlinedIcon className='icon' />
                            </div>

                            <div className='itemInfoTop'>
                                <span className='limit'>+{movie.limit}</span>
                                <span>{movie.year}</span>
                            </div>

                            <div className='desc'>
                                {movie.desc}
                            </div>

                            <div className='genre'>{movie.genre}</div>
                        </div>
                    </>
                )}
            </div>
            <p className='movie-title'>{movie.title}</p>
        </Link>
    );
};

export default Listitem;