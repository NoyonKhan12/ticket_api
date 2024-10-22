import { Request, Response } from 'expressss
import asyncHandler from '../middleware/asyncHandler';
import { createTicketService } from '../services/ticketService';

export const createTicket = asyncHandler(async (req: Request, res: Response) => {
  const { userID, deviceID, queryText } = req.body;


  if (!userID || !deviceID || !queryText) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const result = await createTicketService(userID, deviceID, queryText);

  if (result.error) {
    return res.status(409).json({ message: result.message });
  }

  res.status(200).json({ data: { _id: result.ticketID } });
});