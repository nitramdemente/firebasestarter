  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCRG9h3gMgHyaLneBzqPXR_I-LvJ2goa5U",
    authDomain: "reportcollision-8bcc0.firebaseapp.com",
    databaseURL: "https://reportcollision-8bcc0.firebaseio.com",
    storageBucket: "reportcollision-8bcc0.appspot.com",
    messagingSenderId: "891773301982"
  };
  firebase.initializeApp(config);


  var bigOne=document.getElementById('BigOne');
  var dbRef = firebase.database().ref().child('accident');
  //dbRef.on('value',snap=>bigOne.innerText = snap.val());
  //dbRef.on('value',snap=>console.log(snap.val()));
  // dbRef.on('value', snap=>{
  //   bigOne.innerText=JSON.stringify(snap.val(),null,3);
  // });

  //dbRef.on('child_added',snap=>console.log(snap.val().latitude));
  
  dbRef.on('child_added',snap=>{
    var puntero = snap.val();
      console.log(snap.key+" latitude:"+puntero.latitude+" longitude:"+puntero.longitude);
      bigOne.innerText+='\n'+snap.key+" latitude:"+puntero.latitude+" longitude:"+puntero.longitude;
  });
