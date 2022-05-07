import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import themoviedb from "themoviedb-javascript-library";
import moviesAction from "../../store/actionCreators/moviesAction";
import "./Movies.css";
import moviesRequestValidator from "../../utils/moviesRequestValidator";
import Movie from "../Movie/Movie";
import validateMainPath from "../../utils/validateMainPath";
import validateSearchPath from "../../utils/validateSearchPath";

function Movies(){

    const dispatcher = useDispatch();
    const movies = useSelector((state)=>state.movies.movies);
    const genresByName = useSelector((state)=>state.genres.genresByName);
    const genresById = useSelector((state)=>state.genres.genresByID);
    let pathArr = window.location.pathname.split("/");
    let genre = pathArr[3];

    useEffect(()=>{
        if(!movies.length){
            let genreId = genresByName[genre];


            if(validateSearchPath(pathArr)){
                themoviedb.search.getMovie({"query":pathArr[4],page:pathArr[2]},
                    (requestResult)=>{
                        let resArr =JSON.parse(requestResult).results;
                        dispatcher(moviesAction(moviesRequestValidator(resArr,genresById)));
                    },
                    ()=>{}
                )
            }
            else{
                themoviedb.discover.getMovies(
                    {
                        page : pathArr[2] ?? 1,
                        sort_by: "vote_count.desc",
                        with_genres: genreId ?? ""
                    },
                    (result)=>{
                        let resArr =JSON.parse(result).results;
                        dispatcher(moviesAction(moviesRequestValidator(resArr,genresById)));
                        },
                        ()=>{});
            }

            // if(!genre){
            //     themoviedb.discover.getMovies(
            //         {
            //             page : isNaN(Number(pathArr[2])) ? 1 : Number(pathArr[2]),
            //             sort_by: "vote_count.desc"
            //         },
            //         (result)=>{
            //             let resArr =JSON.parse(result).results;
            //             dispatcher(moviesAction(moviesRequestValidator(resArr,genresById)));
            //         },
            //         ()=>{});
            // }
            // else{
            //     let genreId = genresByName[genre];
            //     themoviedb.discover.getMovies(
            //         {
            //             page : isNaN(Number(pathArr[2])) ? 1 : Number(pathArr[2]),
            //             sort_by: "vote_count.desc",
            //             with_genres: genreId
            //         },
            //         (result)=>{
            //             let resArr =JSON.parse(result).results;
            //             dispatcher(moviesAction(moviesRequestValidator(resArr,genresById)));
            //         },
            //         ()=>{});
            // }
        }
    });

    return(

        <div className="movies">
            {movies.map((movie)=><Movie  movie= {movie}/>)}
            <div className="pages">
                <button><a href={`/page/1/${genre ? genre : ""}`}>Перша сторінка</a></button>
                <button><a href={`/page/${Number(pathArr[2])-1 > 0 ? Number(pathArr[2])-1 : 1}/${genre ? genre : ""}/${pathArr[4] ? pathArr[4] : ""}`}>Минула сторінка</a></button>
                <button><a href={`/page/${Number(pathArr[2])+1 > 0 ? Number(pathArr[2])+1 : 2}/${genre ? genre : ""}/${pathArr[4] ? pathArr[4] : ""}`}>Наступна сторінка</a></button>
            </div>
        </div>
    );
}
export default Movies;