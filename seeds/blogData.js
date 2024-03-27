const Blog = require("../models/Blog");
//leave curly brackets off for when you have one model

const blogdata = [
  {
    title: "Test1",
    content: "Some content in here",
  },
];
const seedBlog = () => Blog.bulkCreate(blogdata);

module.exports = seedBlog;
