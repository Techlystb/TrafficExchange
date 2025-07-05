# 🚦 TrafficExchange | Techlystb

বাংলাদেশের ইউজারদের জন্য এক অনন্য Website Traffic Exchange প্ল্যাটফর্ম যেখানে:
- ✅ ইউজার রেজিস্ট্রেশন করে
- ✅ ওয়েব লিংক ভিজিট করে কয়েন আয় করে
- ✅ নির্দিষ্ট পরিমাণ কয়েন হলে bKash/Nagad-এ টাকা তুলতে পারে
- ✅ Admin panel দিয়ে Approve/Reject সিস্টেম

---

## 🛠️ টেকনোলজি

- 🔥 Firebase Authentication, Realtime Database, Hosting
- 🌐 HTML + CSS + JavaScript (Vanilla)
- ☁️ GitHub Actions দিয়ে Continuous Deployment

---

## 📁 ফোল্ডার স্ট্রাকচার

TrafficExchange/
├── public/
│ ├── index.html ← Login redirect
│ ├── register.html ← Sign up page
│ ├── dashboard.html ← ইউজার হোম ও কাজ
│ ├── withdraw.html ← উইথড্র রিকোয়েস্ট ফর্ম
│ ├── preview.html ← টাইমার সহ জব পেইজ
│ ├── admin.html ← Approve/Reject UI
│ ├── footer.html ← Fixed Footer Info
│ └── assets/
│ ├── styles.css
│ └── admin.css
│
├── src/
│ ├── firebase-config.js ← Firebase Init
│ ├── login.js ← Login/Register Logic
│ ├── dashboard.js ← কয়েন, কাজ, উইথড্র Summary
│ ├── jobs.js ← Job Fetcher
│ ├── preview.js ← Timer & Job Completion
│ ├── withdraw.js ← Withdraw Submissions
│ ├── referral.js ← Refer System
│ ├── admin.js ← Admin Panel Scripts
│ └── iplog.js ← IP Tracker Integration
│
├── jobs.json ← Static Job Data
├── firebase.json ← Firebase Config
├── .firebaserc ← Firebase Project Info
├── .github/workflows/firebase-hosting.yml
└── README.md




---

## 🔐 Firebase Setup নির্দেশিকা

### 1. Firebase Console:
- Create Project → `trafficexchange-stb`
- Enable Authentication → Email/Password
- Enable Realtime Database → Start in **Locked Mode**
- Add Web App → Get `firebaseConfig`

### 2. Realtime Database Structure:
```json
{
  "users": {
    "uid": {
      "email": "test@example.com",
      "coins": 0,
      "ref": "refcode"
    }
  },
  "withdraws": {
    "withdraw_id": {
      "uid": "abc123",
      "amount": 100,
      "status": "pending"
    }
  },
  "iplog": {
    "uid": {
      "ip": "103.xx.xx",
      "city": "Dhaka",
      ...
    }
  }
}


3. Firebase CLI Setup (Windows/Termux):

npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy


⚙️ কোড ব্যবহারের ধাপসমূহ
🔑 Firebase Config: src/firebase-config.js

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "yourapp.firebaseapp.com",
  projectId: "yourapp",
  storageBucket: "yourapp.appspot.com",
  messagingSenderId: "XXXX",
  appId: "1:xxx:web:xxx"
};
firebase.initializeApp(firebaseConfig);


🚀 Deploy
Step-by-step:

git clone https://github.com/Techlystb/TrafficExchange.git
cd TrafficExchange
firebase login
firebase init hosting
firebase deploy



| ফিচার                    | আছে ✅ |
| ------------------------ | ----- |
| Login/Register           | ✅     |
| Coin Balance View        | ✅     |
| Visit Job & Timer Earn   | ✅     |
| Withdraw Request Form    | ✅     |
| Admin Approve/Reject     | ✅     |
| Toast Notifications      | ✅     |
| Realtime IP Logging      | ✅     |
| Referral System (7 days) | ✅     |
| Live Support (Telegram)  | ✅     |



💬 যোগাযোগ
📧 Gmail: techlystb@gmail.com
💬 Telegram: @Techlystb

🅿️ License
This project is maintained by Techlystb.
© Techlystb {{YEAR}}


---

## 📌 আপনি যা করতে পারেন:

1. ফাইলটি `README.md` নামে আপনার GitHub রিপোজিটোরি রুটে দিন।
2. আপনি চাইলে `{{YEAR}}` অংশটিকে JavaScript দিয়ে ডাইনামিক করতে পারেন।

---

আরও প্রয়োজন হলে যেমন `.firebaserc`, Firebase Hosting Workflow, jobs.json ইত্যাদিও আমি দিতে পারি।

বললেই করে দিচ্ছি ভাই ❤️  
**আর কিছু দরকার?**

















