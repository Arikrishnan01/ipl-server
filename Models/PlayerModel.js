import mongoose from "mongoose";

const BattingDetailsSchema = mongoose.Schema({
    battingStyle: {
      type: String,
      default: "right-hand",
    },
    avgStrikeRate: {
      type: String,
      required: 0,
    },
  });
  
  const BowlingDetailsSchema = mongoose.Schema({
    bowlingStyle: {
      type: String,
      default: "right-hand",
    },
    bowlingType: {
      type: String,
      default: "medium",
    },
    avgBowlingRate: {
      type: String,
      default: 0,
    },
  });
  
  const PlayerSchema = mongoose.Schema({
    playerName: {
      type: String,
      required: true,
    },
    playerProfilePicture: {
      type: String,
      required: false,
    },
    jerseyNumber: {
      type: String,
      required: true,
    },
    jerseySize: {
      type: String,
      required: true,
    },
    teamPlaying: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    primarySkill: {
      type: String,
      required: true,
    },
    actualSkills: {
      type: Array,
      default: ["fielding"],
    },
    battingDetails: {
      type: BattingDetailsSchema,
      required: false,
    },
    bowlerDetails: {
      type: BowlingDetailsSchema,
      required: false,
    },
  });
  
  export default mongoose.model("Player", PlayerSchema);