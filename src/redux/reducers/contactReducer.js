import initialState from './initialState.json';
import * as actionTypes from "../../redux/actionTypes";

export default function contactReducer(state=initialState.contactSection,action){
    switch(action.type){
        case actionTypes.ADD_CONTACT:
            return{
                ...state,
                ...action.contactAction
            }
        default:
            return state;
    }
}