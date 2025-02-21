import jwt from "jsonwebtoken";

export const generateTokenAndSetCookie = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // Only sends the cookie over HTTPS in production environments
    sameSite: "strict", // for preventing CSRF attacks 
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
};
