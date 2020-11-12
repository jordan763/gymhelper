const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "Type of exercise"
        },
        name: {
          type: String,
          trim: true,
          required: "Name an exercise name"
        },
        duration: {
          type: Number,
          required: "How long was the exercise?"
        },
        weight: {
          type: Number,
          required: "How heavy?"
        },
        reps: {
          type: Number,
          required: "How many reps?"
        },
        sets: {
          type: Number,
          required: "How many sets?"
        },
        distance: {
          type: Number,
          required: "How far?"
        }
      }
    ]
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);
workoutSchema.virtual("totalDuration").get(function() {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;

