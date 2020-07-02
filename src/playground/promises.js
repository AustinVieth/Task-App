require("../db/mongoose");

const User = require("../models/user");

// User.updateOne(
//   {
//     _id: new ObjectId("5eee603a6494486ae8c8ef0f"),
//   },
//   { email: "AustinV@test2.com" },
//   (err, result) => {
//     if (err) {
//       return console.log(err);
//     }

//     return console.log(result.nModified);
//   }
// )
//   .then((result) => {
//     return User.find({ email: "AustinV@test2.com" });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => console.log(err));

const updateEmailAndCount = async (id, email) => {
  let message = "";
  const user = await User.findByIdAndUpdate({ _id: id }, { email });
  if (user) {
    message += "user found, ";
  }
  const count = await User.countDocuments({ email });
  if (count) {
    message += "Count found";
  }
  return { user, count, message };
};

updateEmailAndCount("5eee603a6494486ae8c8ef0f", "AustinVTest@gmail.com")
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
