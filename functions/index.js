const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

exports.addReferralBonus = functions.database
  .ref("/users/{userId}")
  .onCreate((snapshot, context) => {
    const data = snapshot.val();
    const referredBy = data.referredBy;

    if (!referredBy) return null;

    const refPath = admin.database().ref("users");
    return refPath
      .orderByChild("referralCode")
      .equalTo(referredBy)
      .once("value")
      .then((snap) => {
        if (!snap.exists()) return null;

        const refUserKey = Object.keys(snap.val())[0];
        return admin
          .database()
          .ref("users/" + refUserKey + "/coins")
          .transaction((c) => (c || 0) + 7);
      });
  });
