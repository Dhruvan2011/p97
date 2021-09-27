var firebaseConfig = {
      apiKey: "AIzaSyDUlYtHh_6vLL4st1lUElqpuaoH0xcYO1Q",
      authDomain: "p9394959697.firebaseapp.com",
      databaseURL: "https://p9394959697-default-rtdb.firebaseio.com",
      projectId: "p9394959697",
      storageBucket: "p9394959697.appspot.com",
      messagingSenderId: "140589435434",
      appId: "1:140589435434:web:e931283334facb73835153"
    };

firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML="WELCOME "+user_name+"!";

function addRoom()
{
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding-room-name"
      });
      localStorage.setItem("room_name",room_name);

 
      window.location="kwitter_page.html";
}

function getData() 
{firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML+=row;
      //End codeadding 
      });});}
getData();

function redirectToRoomName(name)
{
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

function logout()
{
     localStorage.removeItem("room_name");
     localStorage.removeItem("user_name");
     window.location="index.html";
}