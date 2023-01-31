var express = require("express");
var router = express.Router();
const db = require("../model/helper"); //use helper after set up

//GET posts
router.get("/", async (req, res) => {
  try {
    const response = await db("SELECT * FROM posts");
    const posts = response.data;
    res.send({ posts });
  } catch (err) {
    res.status(500).send(err);
  }
}); // i this working on top of the list route? we cannot access any post w/o list id

//GET POST by id
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const response = await db(`SELECT xxx`);
    const posts = response.data;
    res.send({ posts });
  } catch (err) {
    res.status(500).send(err);
  }
});
// router.post("/", async (req, res) => {
//   const title = req.body.title;
//   const description = req.body.description;
//   //const createdAt = req.body.createdAt // this should get the timestamp and added to created_at
//   try {
//     await db(
//       `INSERT INTO posts (title, description) value ('${title}',('${description}')`
//     );
//     res.status(200).send({ message: "post created" });
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });
module.exports = router;
