

    
var header = document.getElementById("myHeader");


function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


// sidenav js

function openNav() {
document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
document.getElementById("mySidenav").style.width = "0";
}



function home() {
    window.location.assign("home.html");
}

function chat() {
    window.location.assign("chat.html"); 
}
function video() {
    window.location.assign("video.html");
}
function test() {
    window.location.assign("test.html");
}
function news() {
    window.location.assign("news.html");
}
function panel() {
    window.location.assign("panel.html");
}
function about() {
    window.location.assign("about.html");
}
function logout() {
    window.location.assign("index.html");
}





/// news update code 


        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        const firebaseConfig = {
            apiKey: "AIzaSyBmuATPx4LbQAPWyIdbRcqpkgn8nsUB8hw",
            authDomain: "lok-db.firebaseapp.com",
            databaseURL: "https://lok-db-default-rtdb.firebaseio.com",
            projectId: "lok-db",
            storageBucket: " ",
            messagingSenderId: "803437560630",
            appId: "1:803437560630:web:6ceeee89f0052d41dea997",
            measurementId: "G-GLVY4H3X97"
          };
          
          firebase.initializeApp(firebaseConfig);
          
          
          
          
          // code starts from here
       
         