const express = require("express");
require("./db/mongoose");

// Express setup
const app = express();

// Middleware Setup
// app.use((req, res, next) => {
//   if (req.method === "GET") {
//     res
//       .status(503)
//       .send({ errorCode: 503, message: "Error, GET Requests are disabled" });
//   } else {
//     next();
//   }
// });

app.use(express.json());

// Port definition
const port = process.env.PORT || 3000;

// Routers
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

// Hook-Up Routers to Express
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("listening on port " + port);
});

// const multer = require("multer");
// const upload = multer({
//   dest: "images/",
//   limits: {
//     fileSize: 1000000,
//   },
//   fileFilter(req, file, cb) {
//     if (!file.originalname.match(/\.(doc|docx)$/)) {
//       return cb(new Error("Please upload a word document"));
//     }

//     cb(undefined, true);
//   },
// });

// app.post(
//   "/upload",
//   upload.single("upload"),
//   (req, res) => {
//     res.send();
//   },
//   (error, req, res, next) => {
//     res.status(400).send({ error: error.message });
//   }
// );

// const jwt = require("jsonwebtoken");

// const myFunc = async () => {
//   const token = jwt.sign({ _id: "My users Id" }, "thisisMySectret", {
//     expiresIn: "10 days",
//   });

//   const data = jwt.verify(token, "thisisMySectret");

//   console.log(data);
// };

// const main = async () => {
//   // const task = await Task.findById("5ef2143948b60d503847bbcf");
//   // await task.populate("owner").execPopulate();
//   // console.log(task);

//   const user = await User.findById("5ef213b6a1602251408f3b2c");
//   await user.populate("tasks").execPopulate();

//   console.log(user.tasks);
// };

// main();
