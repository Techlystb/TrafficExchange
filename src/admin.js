firebase.auth().onAuthStateChanged(user => {
  if (!user) return location.href = "login.html";

  const list = document.getElementById("request-list");
  const ref = firebase.database().ref("withdraws");

  ref.on("value", snapshot => {
    list.innerHTML = "";
    snapshot.forEach(child => {
      const data = child.val();
      const div = document.createElement("div");
      div.className = "request";
      div.innerHTML = `
        <p>UID: ${data.uid}</p>
        <p>Amount: ${data.amount}</p>
        <p>Status: ${data.status}</p>
        <button onclick="updateStatus('${child.key}', 'approved')">✅ Approve</button>
        <button onclick="updateStatus('${child.key}', 'rejected')">❌ Reject</button>
      `;
      list.appendChild(div);
    });
  });
});

function updateStatus(id, status) {
  firebase.database().ref("withdraws/" + id + "/status").set(status);
  showToast("🔔 Request " + status);
}

function showToast(msg) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}
