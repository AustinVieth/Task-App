const mongoose = require("mongoose");

const taskSchema = mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
      trim: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: mongoose.SchemaTypes.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

// taskSchema.pre("save", async function (next) {
//   if (this.isModified("description")) {
//     this.description = this.description + "!";
//   }

//   next();
// });

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
