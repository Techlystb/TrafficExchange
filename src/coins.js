firebase.auth().onAuthStateChanged(user => {
  if (user) {
    const coinRef = firebase.database().ref("users/" + user.uid + "/coins");
    coinRef.on("value", snap => {
      document.getElementById("coin-count").textContent = snap.val() || 0;
    });
  }
});
