var express = require("express");
var router = express.Router();
const db = require("../model/helper"); //use helper after set up

//GET all posts
router.get("/", async (req, res) => {
  try {
    const response = await db("SELECT * FROM posts");
    const posts = response.data;
    res.send({ posts });
  } catch (err) {
    res.status(500).send(err);
  }
}); // i this working on top of the list route? we cannot access any post w/o list id

//GET post by id
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const response = await db(`SELECT * FROM posts WHERE id=${id}`);
    const post = response.data[0];
    if (!post) {
      res.status(404).send({ message: "post not found" });
      return;
    }
    res.send({ post });
  } catch (err) {
    res.status(500).send(err);
  }
});

//CREATE one post

router.post("/", async (req, res) => {
  const title = req.body.title;
  const text = req.body.text;
  //const createdAt = req.body.createdAt // this should get the timestamp and added to created_at
  try {
    await db(
      `INSERT INTO posts WHERE list_id=1 (title, text) value ("${title}","${text}")`
    );
    res.status(200).send({ message: "post created" });
  } catch (err) {
    res.status(500).send(err);
  }
});
module.exports = router;
