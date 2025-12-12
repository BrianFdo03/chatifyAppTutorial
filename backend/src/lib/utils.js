import jwt from "jsonwebtoken";

export function generateToken(userId, res) {
  const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: "7d", // 7 days
  });

  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    httpOnly: true, // prevent XSS attacks. cross-site scripting
    sameSite: "strict", // CSRF attacks. cross-site request forgery
    secure: process.env.NODE_ENV === "development" ? false : true, //
  });
}
