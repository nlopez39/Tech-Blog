const { Blog } = require("../models");
const blogdata = [
  {
    title: "Test1",
    content: "Some content in here",
  },
  {
    title: "Test2",
    content: "Some content in here",
  },
  {
    title: "Test3",
    content: "Some content in here",
  },
];
const seedBlog = async () => {
  await Blog.bulkCreate(blogdata);
};
module.exports = seedBlog;
