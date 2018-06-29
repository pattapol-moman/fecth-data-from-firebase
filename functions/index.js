'use strict'
const cors = require('cors')({origin: true});
const functions = require('firebase-functions');

//The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

// Get a database reference to our posts
var db = admin.database();
exports.portfolio = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    if(request.method === 'GET'){
      var ref = db.ref("profile");
      ref.once("value", function(snapshot) {
        response.contentType('application/json');
 
       
        // let contentsList = [];
     
        // snapshot.forEach((child) => {
        //   let slide = child.val()
        //   slide._key = child.key
        //   contentsList.push(slide);
        //  });
 
        response.send(JSON.stringify(snapshot));
      });
   }
  })
});