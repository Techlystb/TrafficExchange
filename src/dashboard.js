firebase.auth().onAuthStateChanged(user => {
  if (!user) return location.href = "login.html";

  const uid = user.uid;

  // কয়েন সংখ্যা
  firebase.database().ref("users/" + uid + "/coins").on("value", snap => {
    document.getElementById("coin-count").textContent = snap.val() || 0;
  });

  // কাজের সংখ্যা
  firebase.database().ref("completed/" + uid).on("value", snap => {
    document.getElementById("job-count").textContent = snap.exists() ? Object.keys(snap.val()).length : 0;
  });

  // Withdraw history
  firebase.database().ref("withdraws").orderByChild("uid").equalTo(uid).once("value", snap => {
    const count = snap.exists() ? Object.keys(snap.val()).length : 0;
    document.getElementById("withdraw-count").textContent = count;
  });
});
