var user;
function signin(){
	//create an instance of the google provider object
	var provider = new firebase.auth.GoogleAuthProvider();

	firebase.auth().signInWithRedirect(provider);
	firebase.auth().getRedirectResult().then(function(result) {
	  if (result.credential) {
	    // This gives you a Google Access Token. You can use it to access the Google API.
	    var token = result.credential.accessToken;
	    // ...
	  }
	  // The signed-in user info.
	  user = result.user;

	}).catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  // The email of the user's account used.
	  var email = error.email;
	  // The firebase.auth.AuthCredential type that was used.
	  var credential = error.credential;
	  // ...
	});
}

var authbtn = document.getElementById("gauth");
authbtn.addEventListener("click", signin);

var logout = document.getElementById("logout");
logout.addEventListener("click",signOut);

// Triggers when the auth state change for instance when the user signs-in or signs-out.
function authStateObserver(user) {
  if (user) { // User is signed in!
    document.getElementById("unauthed").setAttribute('hidden','true');
    document.getElementById("authed").removeAttribute('hidden');

  } else { // User is signed out!
    // Hide user's profile and sign-out button.
    document.getElementById("unauthed").removeAttribute('hidden');
    document.getElementById("authed").setAttribute('hidden', 'true');
  }
}

function initFirebaseAuth() {
  // Listen to auth state changes.
  firebase.auth().onAuthStateChanged(authStateObserver);

}

function signOut() {
  // Sign out of Firebase.
  firebase.auth().signOut();
}

// Returns true if a user is signed-in.
function isUserSignedIn() {
  return !!firebase.auth().currentUser;
}

initFirebaseAuth();