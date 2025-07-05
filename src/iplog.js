fetch('https://ipapi.co/json/')
  .then(res => res.json())
  .then(data => {
    const uid = firebase.auth().currentUser?.uid;
    if (uid) {
      firebase.database().ref("iplog/" + uid).set({
        ip: data.ip,
        city: data.city,
        region: data.region,
        country: data.country_name,
        time: new Date().toLocaleString()
      });
    }
  });
