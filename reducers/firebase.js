import { createSlice } from 'redux-starter-kit';
import * as firebaseLibrary from 'firebase/app';

// import 'firebase/auth';

// let firebaseApp;

// const makeFirebase = function(){

//   firebaseApp = firebase.initializeApp(firebaseConfig, 'JamTunes');
//   return firebaseApp
// }

// export function getFirebase(){
//   return firebaseApp;
// }



const firebaseConfig = {
    apiKey: "AIzaSyC8_3C1T8D3W71fxKXPj6QUQa1bjxomqCE",
    authDomain: "jamtunes-e3127.firebaseapp.com",
    databaseURL: "https://jamtunes-e3127.firebaseio.com",
    projectId: "jamtunes-e3127",
    storageBucket: "",
    messagingSenderId: "258995087036",
    appId: "1:258995087036:web:e14afc26b6b2c25e"
};


let fb = firebaseLibrary.initializeApp(firebaseConfig, 'JamTunes');

export function getFb() {
    return fb;
}

export function destroyFb(cb) {
    fb.delete().then(function () {
        console.log('Successfully Deleted Firebase')
        const newFb = firebaseLibrary.initializeApp(firebaseConfig, 'JamTunes');
        fb = newFb;
        cb(newFb);
    });
}

export const firebase = createSlice({
    slice: 'firebase',
    initialState: true,
    reducers: {
        logOut: state => {
            console.log('Called logout action');
            state = !state;
        }
    }
});

export default firebase.reducer