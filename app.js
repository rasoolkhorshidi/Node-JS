const express = require("express");
const mongoose = require("mongoose");

const uri2 =
  "mongodb+srv://rasoolkhorshidi:1234@nodejslearning.4acpaoh.mongodb.net/learning?retryWrites=true&w=majority&appName=NodeJsLearning";
const app = express();

const port = process.env.PORT || 3000;
// Connect to MongoDB
mongoose
  .connect(uri2)
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
    console.log("Connected to MongoDB successfully!");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

// Middleware to serve static files
app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", "./pages");

app.get("/", (req, res) => {
  //decelaration data with api format
  const data = {
    name: "Rasooli",
    age: 37,
    job: "Web Developer",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind",
      "ReactJS",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
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
