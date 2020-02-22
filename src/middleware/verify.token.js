import { decodeToken } from "../helpers/jwt";

export const verifyToken = async (req, res, next) => {
  const { accesstoken, authorization, "x-api-key": xApiKey } = req.headers;
  const accessToken = accesstoken || authorization || xApiKey;
  if (!accessToken) {
    res.status(401).json({ message: "Access Unauthorized" });
  }

  try {
    const decodedToken = await decodeToken(accessToken);
    req.customer_id = decodedToken.customer_id;
    return next();
  } catch (error) {
    return res.status(500).json({
      error: `${error.name}: ${error.message}`
    });
  }
};
