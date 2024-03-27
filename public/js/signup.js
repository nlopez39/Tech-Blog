const signupEventHandler = async (event) => {
  event.preventDefault();
  const email = document.querySelector("#username-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  //if email and password were filled in then save by sending it to signup API endpoint
  if (email && password) {
    const response = await fetch("api/users", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      console.log(response);
      alert(response.statusText);
    }
  }
};

document
  .querySelector(".signup-card")
  .addEventListener("submit", signupEventHandler);
