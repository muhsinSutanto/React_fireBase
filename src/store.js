import {createStore, combineReducers, compose} from 'redux'
import firebase from 'firebase'
import 'firebase/firestore'
import {reactReduxFirebase, firebaseReducer} from 'react-redux-firebase'
import {reduxFirestore, firestoreReducer} from 'redux-firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDYPWAcxNdWNlJ5Es5TM1IvOKX2SfSzE0I",
    authDomain: "reactclientpanel-ab31a.firebaseapp.com",
    databaseURL: "https://reactclientpanel-ab31a.firebaseio.com",
    projectId: "reactclientpanel-ab31a",
    storageBucket: "reactclientpanel-ab31a.appspot.com",
    messagingSenderId: "773424979316"
}

//react-redux-firebase config
const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
  }

//init firebase instance
firebase.initializeApp(firebaseConfig);
//init firestore
const firestore = firebase.firestore()

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
    reduxFirestore(firebase) // <- needed if using firestore
  )(createStore);

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer // <- needed if using firestore
  })

//create initial state
const initialState = {}

//create store
const store = createStoreWithFirebase(rootReducer, initialState, compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

export default store