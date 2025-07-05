// Placeholder for bonus.js
function claimBonus() {
  const user = firebase.auth().currentUser;
  if (!user) return;

  const bonusRef = firebase.database().ref("bonus/" + user.uid);
  bonusRef.once("value").then(snapshot => {
    const lastClaim = snapshot.val() || 0;
    if (Date.now() - lastClaim < 86400000) {
      alert("⛔ বোনাস একবারই নেওয়া যাবে প্রতি ২৪ ঘণ্টায়");
    } else {
      const userRef = firebase.database().ref("users/" + user.uid);
      userRef.child("coins").transaction(c => (c || 0) + 10);
      bonusRef.set(Date.now());
      alert("✅ আপনি ১০ বোনাস কয়েন পেয়েছেন!");
    }
  });
}
