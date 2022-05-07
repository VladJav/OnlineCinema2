import MultiClamp from "react-multi-clamp";

function Movie(props){
    return(
        <div className="movie">
            <div className="movie_title">
                <strong><a href={`/watch/${props.movie.id}`}>{props.movie.title} ({new Date(props.movie.release_date).getFullYear()})</a></strong>
            </div>
            <div className="movie_info">
                <div className="movie_poster">
                    <img src={`https://image.tmdb.org/t/p/original${props.movie.poster_path}`}  alt=""/>
                </div>
                <div className="movie_details">
                    <p>Рік випуску: {new Date(props.movie.release_date).getFullYear()}</p>
                    <p>Реліз: {new Date(props.movie.release_date).toLocaleDateString()}</p>
                    <p>Рейтинг: {props.movie.vote_average}</p>
                    <MultiClamp ellipsis="..." clamp={4}>{props.movie.overview}</MultiClamp>
                </div>
            </div>
        </div>
    );
}
export default Movie;
