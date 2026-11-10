import { model, models, Schema, type InferSchemaType } from "mongoose";

const leadSchema = new Schema(
  {
    name: { type: String, required: true, maxlength: 100 },
    email: { type: String, required: true, maxlength: 254 },
    company: { type: String, default: "", maxlength: 120 },
    service: { type: String, required: true, maxlength: 100 },
    project: { type: String, required: true, maxlength: 5000 },
    budget: { type: String, default: "", maxlength: 80 },
    timeline: { type: String, default: "", maxlength: 80 },
    status: { type: String, enum: ["new", "in-progress", "completed"], default: "new" },
    owner: { type: String, default: "", maxlength: 100 },
    note: { type: String, default: "", maxlength: 3000 },
  },
  { timestamps: true },
);
leadSchema.index({ createdAt: -1 });

export type LeadDocument = InferSchemaType<typeof leadSchema>;

const Lead = models.Lead ?? model("Lead", leadSchema);

export default Lead;
