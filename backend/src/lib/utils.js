import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("jwt", token, {
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  httpOnly: true,
  secure: process.env.NODE_ENV !== "development", // only secure in prod
  sameSite: process.env.NODE_ENV === "development" ? "Lax" : "None", // lax for dev, none for prod w/ https
});


  return token;
};