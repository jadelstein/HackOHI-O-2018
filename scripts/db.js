// Initialize Firebase
var config = {
  apiKey: "AIzaSyDhSofrE-tzn4O3wvQO0anASOueMiiEjag",
  authDomain: "trailz-af0c9.firebaseapp.com",
  databaseURL: "https://trailz-af0c9.firebaseio.com",
  projectId: "trailz-af0c9",
  storageBucket: "",
  messagingSenderId: "664147021433"
};
firebase.initializeApp(config);

// Useful references
var db = firebase.database();
var root = db.ref();

// These are automatically updated through the callback function
var users, hazards;
root.child('users').on('value', function(dbsnap) { users = dbsnap.val() });
root.child('hazards').on('value', function(dbsnap) { hazards = dbsnap.val() });