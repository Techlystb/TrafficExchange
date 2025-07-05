function openWithdraw() {
  const amount = prompt("📤 কত কয়েন তুলতে চান? (১০০০ কয়েন = ১০০৳)");
  const user = firebase.auth().currentUser;
  if (!user || !amount) return;

  firebase.database().ref("users/" + user.uid).once("value").then(snap => {
    const coins = snap.val().coins || 0;
    if (coins < 1000 || amount > coins) {
      alert("❌ ন্যূনতম ১০০০ কয়েন লাগবে!");
    } else {
      const ref = firebase.database().ref("withdraws").push();
      ref.set({
        uid: user.uid,
        email: snap.val().email,
        amount: amount,
        timestamp: Date.now(),
        status: "pending"
      });
      alert("✅ উত্তোলনের অনুরোধ পাঠানো হয়েছে। Admin অনুমোদনের জন্য অপেক্ষা করুন।");
    }
  });
}
