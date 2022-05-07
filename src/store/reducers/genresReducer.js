import {GENRESSET} from "../actions/actions";
import initialState from "../initialState";

function genresReducer(state = initialState,action){
    switch (action.type){
        case GENRESSET:
            return { ...state,
                genres: action.payload}
        default:
            return state;
    }
}
export default genresReducer;