import initialState from "./initialState.json";
import * as actionTypes from "../actionTypes";
export default function educationReducer(state = initialState.educationSection, action) {
    switch (action.type) {
        case actionTypes.ADD_EDUCATION:
            return {
                ...state,
                ...action.educationAction
            }
        default:
            return state;
    }
}