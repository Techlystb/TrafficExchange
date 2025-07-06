const auth = firebase.auth();
const msg = document.getElementById("msg");

function login() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!/^\d{6}$/.test(password)) {
    msg.innerText = "❌ পাসওয়ার্ড ৬ সংখ্যার হতে হবে!";
    return;
  }

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      msg.innerText = "✅ লগইন সফল!";
      location.href = "dashboard.html";
    })
    .catch((error) => {
      msg.innerText = "❌ লগইন ব্যর্থ: " + error.message;
    });
}

function register() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!/^\d{6}$/.test(password)) {
    msg.innerText = "❌ পাসওয়ার্ড ৬ সংখ্যার হতে হবে!";
    return;
  }

  auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      msg.innerText = "✅ রেজিস্ট্রেশন সফল!";
      location.href = "dashboard.html";
    })
    .catch((error) => {
      msg.innerText = "❌ রেজিস্ট্রেশন ব্যর্থ: " + error.message;
    });
}
