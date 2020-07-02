require("../db/mongoose.js");

const Task = require("../models/task");

// Task.findByIdAndUpdate("5eee6d6c5746fb1fe88cd5b7", { completed: true })
//   .then((res) => {
//     console.log(res);
//     return Task.countDocuments({ completed: true });
//   })
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

const addTaskAndCount = async (task) => {
  await new Task(task).save();
  const count = await Task.countDocuments({});

  return count;
};

// addTaskAndCount({
//   description: "Practice creating RESTful APIs",
//   completed: false,
// })
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// deleteTaskAndCount("5eefe01d89afd8591022892c")
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));
