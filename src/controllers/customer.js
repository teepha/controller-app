import bcrypt from "bcrypt";
import Customer from "../database/customer.model";
import { generateToken } from "../helpers/jwt";

class CustomerController {
  static async create(req, res, next) {
    try {
      req.body.password = await bcrypt.hash(req.body.password, 10);
      const response = await Customer.create(req.body);

      const accessToken = generateToken({
        customer_id: response._id
      });
      return res.status(201).json({ accessToken });
    } catch (error) {
      next(error);
    }
  }

  static async login(req, res, next) {
    const { email, password } = req.body;

    try {
      const customer = await Customer.findOne({ email });
      if (!customer)
        return res.status(400).json({ error: "Invalid credentials!" });

      await bcrypt.compare(password, customer.password, (err, result) => {
        if (result) {
          const accessToken = generateToken({
            customer_id: customer._id
          });
          return res.status(200).json({ accessToken });
        }
        return res.status(400).json({
          error: "Invalid email or password!"
        });
      });
    } catch (error) {
      next(error);
    }
  }
}

export default CustomerController;
