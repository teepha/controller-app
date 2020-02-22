import mongoose from "mongoose";
import CustomerSchema from "./customer.schema";

const Customer = mongoose.model("Customer", CustomerSchema);

export default Customer;
