// Placeholder for referral.js
firebase.auth().onAuthStateChanged(user => {
  if (user) {
    const ref = firebase.database().ref("users/" + user.uid);
    ref.once("value").then(snapshot => {
      const data = snapshot.val();
      document.getElementById("username").textContent = data.email || "User";
      document.getElementById("ref-code").textContent = data.referralCode || "---";

      firebase.database().ref("users").once("value").then(all => {
        let count = 0;
        all.forEach(child => {
          if (child.val().referredBy === data.referralCode) count++;
        });
        document.getElementById("ref-count").textContent = count;
      });
    });
  }
});
