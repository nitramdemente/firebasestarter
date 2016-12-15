 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyARvxLPIBbC-2mENvecGwzz_7XmSN38Qx4",
    authDomain: "web-quickstart-6a108.firebaseapp.com",
    databaseURL: "https://web-quickstart-6a108.firebaseio.com",
    storageBucket: "web-quickstart-6a108.appspot.com",
    messagingSenderId: "916377875213"
  };
  firebase.initializeApp(config);


  const bigOne=document.getElementById('BigOne');
  const dbRef = firebase.database().ref().child('text');
  dbRef.on('value',snap=>bigOne.innerText = snap.val());
