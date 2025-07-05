// Placeholder for admin.js
firebase.auth().onAuthStateChanged(user => {
  if (user) {
    const userRef = firebase.database().ref("users/" + user.uid);
    userRef.once("value").then(snapshot => {
      if (!snapshot.val().isAdmin) return alert("⛔ Admin access only");

      // Load withdraws
      firebase.database().ref("withdraws").orderByChild("status").equalTo("pending").once("value")
      .then(snaps => {
        const list = document.getElementById("withdraw-list");
        list.innerHTML = "";
        snaps.forEach(child => {
          const data = child.val();
          const li = document.createElement("li");
          li.innerHTML = `🔔 ${data.email} | ${data.amount} কয়েন 
            <button onclick="approve('${child.key}', '${data.uid}', ${data.amount})">✅ Approve</button>`;
          list.appendChild(li);
        });
      });

      // Load all users
      firebase.database().ref("users").once("value").then(snaps => {
        const list = document.getElementById("user-list");
        list.innerHTML = "";
        snaps.forEach(child => {
          const d = child.val();
          const li = document.createElement("li");
          li.innerHTML = `👤 ${d.email} - ${d.coins} কয়েন`;
          list.appendChild(li);
        });
      });
    });
  }
});

function approve(id, uid, amount) {
  firebase.database().ref("withdraws/" + id).update({ status: "approved" });
  firebase.database().ref("users/" + uid + "/coins").transaction(c => (c || 0) - amount);
  alert("✅ Approved!");
}
