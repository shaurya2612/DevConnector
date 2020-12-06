const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = (req, res, next) => {
  //check for token
  const token = req.header("x-auth-token");
  if (!token)
    return res.status(401).json({ msg: "No token, authentication denied" });
  //verify the token
  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));
    req.user = decoded.user;
    next();
  } catch (err) {
    return res.status(401).json({ msg: "Token is not valid" });
  }
};
