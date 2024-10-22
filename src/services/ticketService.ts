import Ticket from '../models/Ticket';

const timeDifferenceInMinutes = (date1: Date, date2: Date): number => {
  const diff = Math.abs(date2.getTime() - date1.getTime());
  return Math.ceil(diff / (1000 * 60)); 
};

export const createTicketService = async (userID: string, deviceID: string, queryText: string) => {
  const now = new Date();

  const lastTicket = await Ticket.findOne({ userID }).sort({ date: -1 });

  if (lastTicket) {
    const timeDiff = timeDifferenceInMinutes(now, lastTicket.date);

    if (timeDiff <= 30) {
      return { error: true, message: 'You have already placed a support ticket. Please wait at least 30 minutes before sending another request.' };
    }
  }

  const newTicket = new Ticket({ userID, deviceID, queryText });
  const savedTicket = await newTicket.save();

  return { error: false, ticketID: savedTicket._id };
};