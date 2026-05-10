import { Schema, model } from 'mongoose';

const noteSchema = new Schema(
  {
    title: { type: String, trim: true, required: true },
    content: {
      type: String,
      default: '',
      trim: true,
    },
    tag: {
      type: String,
      enum: [
        'Work',
        'Personal',
        'Meeting',
        'Shopping',
        'Ideas',
        'Travel',
        'Finance',
        'Health',
        'Important',
        'Todo',
      ],
      default: 'Todo',
    },
  },
  { timestamps: true },
);

export const Note = model('Note', noteSchema);
