import { createStore,applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer";
import thunk from 'redux-thunk'
import{reduxFirestore,getFirestore} from 'redux-firestore';
import{ReactReduxFirebaseProvider,getFirebase} from 'react-redux-firebase';
import { createFirestoreInstance } from "redux-firestore";
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
import 'firebase/compat/auth'

import { composeWithDevTools } from "redux-devtools-extension";
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),reduxFirestore(firebase)));
// console.log(store);
export default store;
