

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
  
