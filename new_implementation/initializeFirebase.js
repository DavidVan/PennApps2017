/**
 * Created by Harold on 4/1/2017.
 */
var firebase = require('firebase');
// Initialize Firebase
var config = {
    apiKey: "AIzaSyAYUEHB6vhrYc3v-Ki5KeqPm7Snb32yWr8",
    authDomain: "pennapps2017-9e5ba.firebaseapp.com",
    databaseURL: "https://pennapps2017-9e5ba.firebaseio.com",
    projectId: "pennapps2017-9e5ba",
    storageBucket: "pennapps2017-9e5ba.appspot.com",
    messagingSenderId: "1063909059273"
  };
console.log("Initializing Firebase");

firebase.initializeApp(config);

function writeProducts(itemID, name, store, price, imageURL) {
    firebase.database().ref('products/' + itemID).set({
        itemName: name,
        itemStore: store, 
        itemPrice: price,
        itemImageURL: imageURL
    });
}

firebase.auth().signInAnonymously().catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});


console.log("Adding Item");

writeProducts(1234, "Nintendo Switch", "Walmart", 199.99, "");

console.log("Item Added");

console.log("Adding Item");

writeProducts(3434, "Nintendo Switch", "Best Buy", 198.99, "");

console.log("Item Added");

console.log("Adding Item");

writeProducts(1544, "Nintendo Switch", "Target", 199.98, "");

console.log("Item Added");

console.log("Adding Item");

writeProducts(1214, "Nintendo Switch", "Amazon", 169.99, "");

console.log("Item Added");

console.log("Firebase Initialized");
