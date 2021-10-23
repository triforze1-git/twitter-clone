import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyATd7bNDhU6s4sh0qy1x7WheWheq0kw-aw",
  authDomain: "twitter-d81b1.firebaseapp.com",
  projectId: "twitter-d81b1",
  storageBucket: "twitter-d81b1.appspot.com",
  messagingSenderId: "62739218711",
  appId: "1:62739218711:web:3a9c397a867dee3c6ef752",
  measurementId: "G-EPJQEGM4XD"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;