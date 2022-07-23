import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider, ReactReduxContext } from "react-redux";
// import store from "./redux/store";
import firebase from 'firebase/compat/app'
import{getFirebase} from 'react-redux-firebase';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from "redux-firestore";

import { createStore,applyMiddleware } from "redux";
import rootReducer from "./redux/reducers/rootReducer";
import thunk from 'redux-thunk'
import{reduxFirestore,getFirestore} from 'redux-firestore';
import { composeWithDevTools } from "redux-devtools-extension";


const firebaseConfig = {
  apiKey: "AIzaSyBarpJTm67Iyad3liWxqfe8jrD30rgQc14",
  authDomain: "resume-builder-74aec.firebaseapp.com",
  projectId: "resume-builder-74aec",
  storageBucket: "resume-builder-74aec.appspot.com",
  messagingSenderId: "626603214100",
  appId: "1:626603214100:web:47359d8f4e9795cb5cae01"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),reduxFirestore(firebase)));

ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
    <ReactReduxFirebaseProvider
     firebase={firebase}
     config={firebaseConfig}
     dispatch={store.dispatch}
     createFirestoreInstance={createFirestoreInstance}
    >
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>
  </BrowserRouter>
  ,
  document.getElementById('root')
);