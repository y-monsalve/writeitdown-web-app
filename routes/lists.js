var express = require("express");
var router = express.Router();
const db = require("../model/helper"); //use helper after set up

//GET all lists
router.get("/", async (req, res) => {
  try {
    const response = await db("SELECT * FROM lists");
    const lists = response.data;
    res.send({ lists });
  } catch (err) {
    res.status(500).send(err);
  }
});

//GET one list
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const response = await db(`SELECT * FROM lists WHERE id = ${id}`);
    const list = response.data[0];
    if (!list) {
      res.status(404).send({ message: "list not found" });
      return;
    }
    res.send({ list });
  } catch (err) {
    res.status(500).send(err);
  }
});

//CREATE one list
router.post("/", async (req, res) => {
  const name = req.body.name;
  const description = req.body.description;
  try {
    await db(
      `INSERT INTO lists (name, description) value ("${name}","${description}")`
    );
    res.status(200).send({ message: "list created" });
  } catch (err) {
    res.status(500).send(err);
  }
});

//DELETE one list (no function yet in frontend)
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const response = await db(`SELECT * FROM lists where id = ${id}`);
    const list = response.data[0];
    if (!list) {
      res.status(404).send({ message: "list not found" });
      return;
    }
    await db(`DELETE FROM lists WHERE id=${id}`);
    res.status(200).send({ message: "list deleted" });
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
