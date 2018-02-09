import * as firebase from 'firebase'

const config = {
  apiKey: "AIzaSyCVtutGvK9l3rIMJpyG4VZt_6kX4hlegpA",
  authDomain: "todoapp-952aa.firebaseapp.com",
  databaseURL: "https://todoapp-952aa.firebaseio.com",
  projectId: "todoapp-952aa",
  storageBucket: "todoapp-952aa.appspot.com",
  messagingSenderId: "605529232991"
}

firebase.initializeApp(config)
export default firebase