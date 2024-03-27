//get the title, and content
const createBlogHandler = async (event) => {
  event.preventDefault();
  //grab both title and content from  createBlog handlebar.js form
  const title = document.querySelector("#blog-title").value.trim();
  const content = document.querySelector("#blog-content").value.trim();
  //check if both parameters from the create form are filled in by the user
  if (title && content) {
    //if they were fiilled in then send a POST method to the server
    const response = await fetch("api/createBlog", {
      method: "POST",
      body: JSON.stringify({ title, content }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    //if the response is successful then go back to the dashboard
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to create project");
    }
  }
};
document
  .querySelector("#new-post")
  .addEventListener("submit", createBlogHandler);
