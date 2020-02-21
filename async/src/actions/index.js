import axios from 'axios'
import { bindActionCreators } from 'redux'

export const FETCH_DATA ='FETCH_DATA'
export const UPDATE_CARDS ='UPDATE_CARDS'
export const SET_ERROR ='SET_ERROR'

export const getData = () => dispatch => {
    dispatch({ type: FETCH_DATA })
    axios.get(`https://rickandmortyapi.com/api/character/`)
    .then(res =>{
        console.log('axios', res)
        dispatch({ type: UPDATE_CARDS, payload: res.data.results })
    })
    .catch(err => {
        console.log(`AN ERROR HAS OCCURED`, err)
        dispatch({ type: SET_ERROR, payload: `AN ERROR HAS OCCURED` })
    })
}