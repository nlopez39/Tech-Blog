const loginFormHandler = async (event) => {
  event.preventDefault();
  const email = document.querySelector("#username-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  //check if we received both an email and password from the user
  if (email && password) {
    //then we want to hash it and make loggedin true?
    //we want to send a post requesti to the API endoint
    const response = await fetch("api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      //if successdul, redirect the browser to the home page
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
};
document
  .querySelector(".login-card")
  .addEventListener("submit", loginFormHandler);
