import React from 'react';
import './Watch.scss';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useLocation, Link } from "react-router-dom";
import ReactPlayer from "react-player";

const Watch = () => {
    const location = useLocation();
    const movie = location.movie;

    return (
        <div className='watch' style={{ background: "black" }}>
            <Link to="/">
                <div className='back'>
                    <ArrowBackIcon /> &nbsp;
                    Home
                </div>
            </Link>

            <ReactPlayer
                url={movie.video}
                playing={false}
                width="99.2vw"
                height="99.4vh"
                controls={true}
            />
        </div>
    )
};

export default Watch;