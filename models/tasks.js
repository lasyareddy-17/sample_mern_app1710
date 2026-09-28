let mongoose = require("mongoose")
const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    taskname: {
      type: String,
      required: true
    },

    taskdesc: {
      type: String,
      required: true
    },

    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true
    },

    assignedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true
    },

    duedate: {
      type: Date,
      required: true
    },

    status: {
      type: String,
      enum: ["pending", "in-progress", "completed"],
      default: "pending"
    }
  },
  {
    timestamps: true
  });
const tasks = mongoose.model("tasks", taskSchema);
module.exports = { tasks };