  import firebase from 'firebase';
  var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
    apiKey: "AIzaSyC4PSW9Ri2kbPhzaB42RpZBZhZ8xPFXp0U",
    authDomain: "todolist-c894f.firebaseapp.com",
    databaseURL: "https://todolist-c894f.firebaseio.com",
    projectId: "todolist-c894f",
    storageBucket: "todolist-c894f.appspot.com",
    messagingSenderId: "614959294297"
  };
  var fire = firebase.initializeApp(config);
  export default fire;