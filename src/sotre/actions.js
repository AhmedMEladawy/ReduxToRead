import { ADD_TO_FAVS } from "../constatns/ActionTypes";

const AddToFavs = (movie)=>{
    return{
        type: ADD_TO_FAVS,
        payload: movie
    }
}

export {AddToFavs};