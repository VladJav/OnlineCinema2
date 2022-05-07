import themoviedb from "themoviedb-javascript-library";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import genresAddAction from "../../store/actionCreators/genresAction";
import "./Categories.css"

function Categories(){
    const dispatch = useDispatch();
    const genres = useSelector(state => state.genres.genres);
    const genresByID = useSelector(state => state.genres.genresByID);
    useEffect(()=>{
        if(!genres.length){
            themoviedb.genres.getMovieList({},(list=>{
                dispatch(genresAddAction(JSON.parse(list).genres))
            }),()=>{});
        }

    });
    return(
        <div className="categories">
            <div className="categories_logo">
                <p>Панель навігації</p>
            </div>
            <div className="categories_list">
                <p>Категорії</p>
                {genres.map((genres)=>{
                    return genres.id!==10770 ? <li key={genres.id}><a href={`http://localhost:3000/page/1/${genresByID[genres.id].toLowerCase()}`}>{genres.name}</a></li> : ""
                })}
            </div>
        </div>
    );
}
export default Categories;