  // Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";
  import { getDatabase, ref, push } from "firebase/database";
  // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDQ_G639ccdgNDdZJFHAIQyguilCNAaQA",
  authDomain: "logo-virtuoso-99556.firebaseapp.com",
  projectId: "logo-virtuoso-99556",
  storageBucket: "logo-virtuoso-99556.appspot.com",
  messagingSenderId: "100946937397",
  appId: "1:100946937397:web:cdb703dbbbc357a6b4937c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

var database = firebase.database();
  
  document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Get form values
    var email = document.getElementsByName("email")[0].value;
    var name = document.getElementsByName("name")[0].value;
    var subject = document.getElementsByName("subject")[0].value;
    var message = document.getElementsByName("message")[0].value;
  
    // Create a new customer object
    var newCustomer = {
      email: email,
      name: name,
      subject: subject,
      message: message
    };
  
    // Store customer data in Firebase
    database.ref("customers").push(newCustomer)
      .then(function() {
        // Data successfully stored in Firebase
        console.log("Data successfully stored.");
        // You can redirect to a success page or display a success message here if you like.
      })
      .catch(function(error) {
        // An error occurred while storing data in Firebase
        console.error("Error storing data:", error);
      });
  });
  