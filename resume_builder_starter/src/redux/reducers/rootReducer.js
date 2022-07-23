import initialState from "./initialState.json";
import documentReducer from "./documentReducer";
import contactReducer from "./contactReducer";
import educationReducer from "./educationReducer"
import authReducer from "./authReducer";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

import { combineReducers } from "redux";
const rootReducer = combineReducers({
    documentReducer: documentReducer,
    contactReducer:contactReducer,
    educationReducer:educationReducer,
    authReducer:authReducer,
    firebase:firebaseReducer,
    firestore:firestoreReducer

})
export default rootReducer;
