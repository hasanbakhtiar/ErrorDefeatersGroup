import firebase from 'firebase/app';
import 'firebase/database'; 

const firebaseConfig = {
    apiKey: "AIzaSyDiBsscyroowdYwEPtPp8s-RfHS8XXADr0",
    authDomain: "error-defeaters.firebaseapp.com",
    databaseURL: "https://error-defeaters-default-rtdb.firebaseio.com",
    projectId: "error-defeaters",
    storageBucket: "error-defeaters.appspot.com",
    messagingSenderId: "1011250040212",
    appId: "1:1011250040212:web:5429d64f744151b2115381"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export {database as default}