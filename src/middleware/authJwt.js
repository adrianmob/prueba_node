import jwt from "jsonwebtoken";
export const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];
    console.log(token);
    if (!token) return res.status(403).json({ message: "no token provided" });

    const decoded = jwt.verify(token, "api-auth");
    req.userId = decoded.id;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};
