import {FETCH_DOG_PIC} from "../actions/index"

const initialState={
    dogPicData:{}
}

export const reducer=(state= initialState,action)=>{
    switch(action.type){
        case (FETCH_DOG_PIC):
            return ({
                ...state, dogPicData:action.payload
            })
        default:
        return state;
    }
    
}