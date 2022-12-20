
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBrVc4_eqbeH3mJuyY_muS8Y44329gY9tA",
      authDomain: "kwitter-c-101.firebaseapp.com",
      databaseURL: "https://kwitter-c-101-default-rtdb.firebaseio.com",
      projectId: "kwitter-c-101",
      storageBucket: "kwitter-c-101.appspot.com",
      messagingSenderId: "597518627417",
      appId: "1:597518627417:web:17c0fbc9f238a7a5603748"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"
});
localStorage.setItem("room_name",room_name);
window.location="#";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name) { console.log(name);
       localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
       }
       
function logout(){
     
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}