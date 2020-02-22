import Queue from "bull";
import config from "../config/config";

// Create a Queue
const sendMessageQueue = new Queue("sendMessage", {
  redis: config.redis
});

class MessageController {
  static async create(req, res, next) {
    const { customer_id } = req;

    try {
      await sendMessageQueue.add({ ...req.body, customer_id });
      return res.json({ message: "Message added to the queue!" });
    } catch (error) {
      next(error);
    }
  }
}

export default MessageController;
