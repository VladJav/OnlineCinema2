import {Fragment, useEffect, useState} from "react";
import themoviedb from "themoviedb-javascript-library";
import "./Player.css";
import {Helmet} from "react-helmet";
import getPlayer from "../../utils/api";

function Player(){
    const movieId = window.location.pathname.split("/")[2];
    const [movie, setMovie] = useState({});
    const [isMovieLoad, setIsMovieLoad] = useState(false);
    const [kpPlayer, setKpId] = useState("");
    useEffect(()=>{
        if(!isMovieLoad){
            themoviedb.movies.getById({"id":movieId}, (result)=>{
                setMovie(JSON.parse(result));
                setIsMovieLoad(true);
                getPlayer(JSON.parse(result).original_title,new Date(JSON.parse(result).release_date).getFullYear()).then(res => {
                    setKpId(
                        <Fragment>
                            <div style={{height: "100%"}} data-kinopoisk= {res} id="kinobd"></div>
                            <Helmet>
                                <script src="https://kinobd.ru/js/player_.js"></script>
                            </Helmet>
                        </Fragment>)
                });
            }, ()=>{});
        }
    });
    return(
        <div className="player">
            <div className="movie" style={{height:"100%"}}>
                <div className="movie_title">
                    <strong><a href={`/watch/${movie.id}`}>{movie.title} ({new Date(movie.release_date).getFullYear()})</a></strong>
                </div>
                <div className="movie_info">
                    <div className="movie_poster">
                        <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}  alt=""/>
                    </div>
                    <div className="movie_details">
                        <p>Рік випуску: {new Date(movie.release_date).getFullYear()}</p>
                        <p>Реліз: {new Date(movie.release_date).toLocaleDateString()}</p>
                        <p>Рейтинг: {movie.vote_average}</p>
                        <p>{movie.overview}</p>
                    </div>
                </div>
            </div>
            <div className="video">
                {kpPlayer}
            </div>
        </div>
    );
}
export default Player;
