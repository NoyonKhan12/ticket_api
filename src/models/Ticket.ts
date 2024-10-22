import mongoose, { Document, Schema } from 'mongoose';

export interface ISupportTicket extends Document {
  userID: string;
  date: Date;
  deviceID: string;
  queryText: string;
}

const ticketSchema: Schema = new Schema({
  userID: { type: String, required: true },
  date: { type: Date, default: Date.now },
  deviceID: { type: String, required: true },
  queryText: { type: String, required: true }
});

export default mongoose.model<ISupportTicket>('Ticket', ticketSchema);
