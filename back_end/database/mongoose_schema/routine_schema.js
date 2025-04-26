import mongoose, { Schema } from "mongoose";

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const periods = ["period1", "period2", "period3", "period4", "period5", "period6", "period7"];

// Generate the schedule sub-schema
const scheduleSchema = {};

days.forEach(day => {
  const daySchema = {};
  periods.forEach(period => {
    daySchema[period] = {
      subject: { type: String, default: "" },
      class_ko_name: { type: String, default: "" }
    };
  });
  scheduleSchema[day] = daySchema;
});

const routineSchema = new mongoose.Schema({
  teacherID: {
    type: Schema.Types.ObjectId,
    ref:"teachers",
    required: true,
    unique: true,
  },
  schedule: scheduleSchema
});

export default mongoose.model("routines", routineSchema);
