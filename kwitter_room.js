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

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome"+user_name+"!"

    function addRoom()
{
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log ("Room name -" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
      document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location="kwitter.html";
}