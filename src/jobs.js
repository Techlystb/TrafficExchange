function loadJobs() {
  fetch("../jobs.json")
    .then(res => res.json())
    .then(jobs => {
      const list = document.getElementById("job-list");
      jobs.forEach(job => {
        const div = document.createElement("div");
        div.className = "job-card";
        div.innerHTML = `
          <h3>${job.title}</h3>
          <p>💰 ${job.reward} কয়েন</p>
          <button onclick="location.href='preview.html?id=${job.id}'">▶️ View & Earn</button>
        `;
        list.appendChild(div);
      });
    });
}

window.onload = loadJobs;
