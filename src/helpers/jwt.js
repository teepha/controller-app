import jwt from "jsonwebtoken";

export const generateToken = payload => {
  return jwt.sign(payload, process.env.JWT_KEY, { expiresIn: "24h" });
};

export const decodeToken = token => {
  return jwt.verify(token, process.env.JWT_KEY);
};
