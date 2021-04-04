import Firebase from 'firebase';
let config = {
  apiKey: 'AIzaSyCK3c1MmbVSsYhPkIS-L6DRcKd5pXXtAYA',
  authDomain: 'doctor-healthcare-e07e1.firebaseapp.com',
  databaseURL: 'https://doctor-healthcare-e07e1.firebaseio.com',
  projectId: 'doctor-healthcare-e07e1',
  storageBucket: 'doctor-healthcare-e07e1.appspot.com',
  messagingSenderId: '985831706743'
};
let app = Firebase.initializeApp(config);
export const db = app.database();