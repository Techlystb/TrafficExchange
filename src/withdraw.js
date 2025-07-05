// Placeholder for withdraw.js
function openWithdraw() {
  const amount = parseInt(prompt("📤 কত কয়েন তুলতে চান? (১০০০ কয়েন = ১০০৳)"));
  const user = firebase.auth().currentUser;
  if (!user || !amount || amount < 1000) return alert("❌ ন্যূনতম ১০০০ কয়েন তুলতে হবে।");

  firebase.database().ref("users/" + user.uid).once("value").then(snapshot => {
    const coins = snapshot.val().coins || 0;
    if (coins < amount) {
      alert("❌ আপনার কাছে যথেষ্ট কয়েন নেই।");
    } else {
      const
