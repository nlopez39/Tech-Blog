//get the title, and content
const createBlogHandler = async (event) => {
  event.preventDefault();
  console.log("Button was clicked");
  //grab both title and content from  createBlog handlebar.js form
  const title = document.querySelector("#blog-title").value.trim();
  const content = document.querySelector("#blog-content").value.trim();
  //check if both parameters from the create form are filled in by the user
  if (title && content) {
    console.log("Hi this worked");
    //if they were fiilled in then send a POST method to the server
    const response = await fetch("api/posts", {
      method: "POST",
      body: JSON.stringify({ title, content }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    //if the response is successful then go back to the dashboard
    if (response.ok) {
      console.log("This worked");
      document.location.replace("/dashboard");
    } else {
      alert("Failed to create project");
      console.log("This didn't work");
    }
  } else {
    console.log("This is not working");
  }
};
document
  .querySelector(".new-project-form")
  .addEventListener("submit", createBlogHandler);
