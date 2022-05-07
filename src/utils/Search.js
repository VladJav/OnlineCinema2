import themoviedb from "themoviedb-javascript-library";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import moviesAction from "../store/actionCreators/moviesAction";
import moviesRequestValidator from "./moviesRequestValidator";


function Search(){
    const [value,setValue] = useState("");
    const dispatch = useDispatch();
    const genresById = useSelector(state => state.genres.genresByID);
    let searchFilm = (event) =>{

        // event.preventDefault();
        // themoviedb.search.getMovie({"query":value},
        //     (requestResult)=>{
        //         let resArr =JSON.parse(requestResult).results;
        //         dispatch(moviesAction(moviesRequestValidator(resArr,genresById)));
        //     },
        //     ()=>{}
        // )

    }
    return(
        <div>

                <input onChange={(event)=>setValue(event.target.value)} type="text"/>
                <button  onClick={searchFilm} id="search_button"><a href={`/page/1/search/${value}`}>ok</a></button>

        </div>
    );
}

export default Search;