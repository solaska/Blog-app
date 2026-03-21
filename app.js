import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

let posts = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { posts: posts });
});

app.get("/new", (req, res) => {
  res.render("new");
});

app.post("/create", (req, res) => {
  const newPost = {
    id: Date.now(),
    title: req.body.title,
    content: req.body.content,
  };

  posts.push(newPost);
  res.redirect("/");
});

app.get("/edit/:id", (req, res) => {
  const id = Number(req.params.id);
  const post = posts.find((p) => p.id === id);

  res.render("edit", { post: post });
});

app.post("/update/:id", (req, res) => {
  const id = Number(req.params.id);
  const post = posts.find((p) => p.id === id);

  post.title = req.body.title;
  post.content = req.body.content;

  res.redirect("/");
});

app.get("/delete/:id", (req, res) => {
  const id = Number(req.params.id);

  posts = posts.filter((post) => post.id !== id);

  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
