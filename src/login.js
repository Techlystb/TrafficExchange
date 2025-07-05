// Placeholder for login.js
function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => window.location.href = 'dashboard.html')
    .catch(error => document.getElementById('msg').textContent = error.message);
}

function register() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const referralCode = new URLSearchParams(window.location.search).get('ref') || "";
  const uniqueCode = Math.floor(100000 + Math.random() * 900000).toString();

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(userCredential => {
      const user = userCredential.user;
      firebase.database().ref("users/" + user.uid).set({
        email: user.email,
        uid: user.uid,
        coins: 0,
        referralCode: uniqueCode,
        referredBy: referralCode,
        joined: Date.now()
      });
      window.location.href = 'dashboard.html';
    })
    .catch(error => document.getElementById('msg').textContent = error.message);
}
