import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// require('dotenv').config();

const firebaseConfig = {
	apiKey: `${process.env.REACT_APP_FIREBASEAPIKEY}`,
	authDomain: 'clickology-63112.firebaseapp.com',
	projectId: 'clickology-63112',
	storageBucket: 'clickology-63112.appspot.com',
	messagingSenderId: '1058232006324',
	appId: '1:1058232006324:web:e6ae3a0832fe8a2e6ac9e1',
	measurementId: 'G-029C4LV2X3',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const dbase = firebaseApp.firestore();
const authen = firebase.auth();

export { authen, dbase };
