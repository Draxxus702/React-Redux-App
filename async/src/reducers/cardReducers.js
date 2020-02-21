import {FETCH_DATA, UPDATE_CARDS, SET_ERROR} from '../actions'

const initialState ={
    card: [],
    isFetchingData: false,
    err: ''
}


export const cardReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_DATA:
            return{
                ...state,
                isFetchingData: true,
                card:[]
            }
        case UPDATE_CARDS:
            return{
                ...state,
                card: action.payload,
                isFetchingData: false
            }
        case SET_ERROR:
            return{
                ...state,
                isFetchingData:false,
                error: action.payload
            }
        default:
            return state
    }
}