/**
 * Created by Harold on 9/9/2017.
 */
var firebase = require('firebase')
// Initialize Firebase
var config = {
    apiKey: "AIzaSyAYUEHB6vhrYc3v-Ki5KeqPm7Snb32yWr8",
    authDomain: "pennapps2017-9e5ba.firebaseapp.com",
    databaseURL: "https://pennapps2017-9e5ba.firebaseio.com",
    projectId: "pennapps2017-9e5ba",
    storageBucket: "pennapps2017-9e5ba.appspot.com",
    messagingSenderId: "1063909059273"
  };
console.log("Initializing Firebase")

firebase.initializeApp(config);

console.log("Firebase Initialized!")

module.exports.getData = function(callback) {
    firebase.database().ref("/products/").once('value').then(function(snapshot, product){
    product = snapshot.val();
    //console.log(product)
    callback(product)
})};
