const firebaseConfig = {
    apiKey: "AIzaSyDojuD0FQNdFMoOeKpKyO2PhsCbVDOgVso",
    authDomain: "kwitter-project-e6da8.firebaseapp.com",
    projectId: "kwitter-project-e6da8",
    storageBucket: "kwitter-project-e6da8.appspot.com",
    messagingSenderId: "453208089072",
    appId: "1:453208089072:web:c648e427c4220555d1fd35",
    measurementId: "G-84M82CZTRB"
  };
  
  
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
