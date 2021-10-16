var firebaseConfig = {
      apiKey: "AIzaSyBMAj6aRj0LBg27rUX2ogQi3v95lCq812c",
      authDomain: "kwitternew-19bc5.firebaseapp.com",
      databaseURL: "https://kwitternew-19bc5-default-rtdb.firebaseio.com",
      projectId: "kwitternew-19bc5",
      storageBucket: "kwitternew-19bc5.appspot.com",
      messagingSenderId: "612241562456",
      appId: "1:612241562456:web:291e135b6dbc782d40e32d"
    };
    
    firebase.initializeApp(firebaseConfig);

function send()
{
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
