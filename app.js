const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", "./pages");

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get("/", (req, res) => {
  //decelaration data whit api format
  const data = {
    name: "Rasooli",
    age: 37,
    job: "Web Developer",
    skills: ["HTML", "CSS", "JavaScript", "Tailwind", "ReactJS", "Node.js", "Express.js", "MongoDB"],
  };
  res.render("index", { title: "Home Page", data: data });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About Us" });
});
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

app.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact Us" });
});
app.use((req, res) => {
  res.render("404", { title: "Page Not Found" });
});
