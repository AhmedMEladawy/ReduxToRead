import { ADD_TO_FAVS } from "../constatns/ActionTypes";
import Data from "../constatns/MoviesData";
const initialState = {
    movies: Data,
    favoriteList: [],
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_FAVS:
            return {
                    movies: state.movies.map((mov)=>{
                        if(mov.id === action.payload.id){
                            return {...mov, favorited: true}
                        }
                        return mov;
                    }),
                    favoriteList: [...state.favoriteList, action.payload]
                }
        default:
            return state
    }
}

export default rootReducer;