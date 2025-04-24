import mongoose from "mongoose";

const execsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  studentId: { type: String, required: true },
  position: {
    type: String,
    enum: [
      "Executive President",
      "Vice President",
      "General Secretary",
      "Assistant General Secretary",
      "Financial Secretary",
      "Sport Director",
      "Software Director 1",
      "Software Director 2",
      "Social Director 1",
      "Social Director 2",
      "Public Relations Officer",
      "Welfare Secretary",
      "Treasurer",
    ],
    required: true,
  },
  session: { type: String, required: true },
  imageUrl: { type: String, required: true },
});

execsSchema.index({ studentId: 1, session: 1 }, { unique: true });
execsSchema.index({ email: 1, session: 1 }, { unique: true });

execsSchema.statics.findByMatricNumber = function (matricNumber) {
  return this.findOne({ studentId: matricNumber })
    .select("imageUrl -_id")
    .lean()
    .exec();
};

// Define the order of positions
const positionOrder = [
  "Executive President",
  "Vice President",
  "General Secretary",
  "Assistant General Secretary",
  "Financial Secretary",
  "Sport Director",
  "Software Director 1",
  "Software Director 2",
  "Social Director 1",
  "Social Director 2",
  "Public Relations Officer",
  "Welfare Secretary",
  "Treasurer",
];

const positionPriority = new Map(
  positionOrder.map((position, index) => [position.toLowerCase(), index])
);

const sortExecutives = (a, b) => {
  const priorityA =
    positionPriority.get(a.position.toLowerCase()) ?? positionOrder.length;
  const priorityB =
    positionPriority.get(b.position.toLowerCase()) ?? positionOrder.length;
  return priorityA - priorityB;
};

execsSchema.statics.findBySession = async function (session) {
  try {
    const executives = await this.find({ session })
      .select("-_id -__v")
      .lean()
      .exec();
    return executives.sort(sortExecutives);
  } catch (error) {
    throw error;
  }
};

const Execs = mongoose.model("Executives", execsSchema);

export default Execs;
