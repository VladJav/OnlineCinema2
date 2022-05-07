import initialState from "../initialState";
import {MOVIESSET} from "../actions/actions";

function moviesReducer(state = initialState, action){
    switch (action.type){
        case MOVIESSET:
            return {...state,
                movies:action.payload}
        default:
            return state;
    }
}
export default moviesReducer;