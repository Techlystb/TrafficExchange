function loadJob() {
  const params = new URLSearchParams(window.location.search);
  const jobId = params.get("id");

  fetch("../src/jobs.json")
    .then(res => res.json())
    .then(jobs => {
      const job = jobs.find(j => j.id === jobId);
      if (!job) return document.body.innerHTML = "<h2>❌ কাজ খুঁজে পাওয়া যায়নি</h2>";

      document.getElementById("job-title").textContent = job.title;
      const iframe = document.getElementById("preview-frame");
      iframe.src = job.url;

      document.getElementById("start-btn").onclick = () => {
        iframe.scrollIntoView({ behavior: "smooth" });
        setTimeout(() => {
          localStorage.setItem("jobDone", jobId);
          document.getElementById("done-btn").disabled = false;
        }, 10000); // ১০ সেকেন্ড পর enable
      };

      document.getElementById("done-btn").onclick = () => {
        collectCoin(jobId, job.reward);
      };
    });
}

function collectCoin(jobId, reward) {
  const user = firebase.auth().currentUser;
  if (!user) return alert("লগইন করুন");

  firebase.database().ref("completed/" + user.uid + "/" + jobId).once("value").then(snap => {
    if (snap.exists()) {
      alert("⛔ আপনি এই কাজটি ইতিমধ্যেই করেছেন");
    } else {
      firebase.database().ref("completed/" + user.uid + "/" + jobId).set(true);
      firebase.database().ref("users/" + user.uid + "/coins").transaction(c => (c || 0) + reward);
      alert("✅ সফলভাবে " + reward + " কয়েন অর্জন হয়েছে!");
      window.location.href = "dashboard.html";
    }
  });
}

window.onload = loadJob;
