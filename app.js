var createError = require("http-errors");
var express = require("express");
var path = require("path"); //what is this?
var cookieParser = require("cookie-parser"); //what is this?
//var logger = require("morgan"); // what is this?

// var indexRouter = require("./routes/index");
// var usersRouter = require("./routes/users"); //from express

const db = require("../model/helper"); //use helper after set up

var app = express();
//var router = express.Router();

// app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));

// app.use("/", indexRouter);
// app.use("/users", usersRouter);

// app.get("/", (req, res) => {
//   res.send("Welcome to the API");
// });

app.get("/", async (req, res) => {
  try {
    const response = await db("SELECT * FROM posts");
    const posts = response.data;
    res.send({ posts });
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post("/", async (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  //const createdAt = req.body.createdAt // this should get the timestamp and added to created_at
  try {
    await db(
      `INSERT INTO posts (title, description) value ('${title}',('${description}')`
    );
    res.status(200).send({ message: "post created" });
  } catch (err) {
    res.status(500).send(err);
  }
});

// // catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });

app.get;
// // error handler
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get("env") === "development" ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.send("error");
// });

module.exports = app;
