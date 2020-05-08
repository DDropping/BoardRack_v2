//middleware to check if header contains a token >> then validates it
const jwt = require("jsonwebtoken");

const authenticate = (handler) => {
  return (req, res) => {
    if (!("authorization" in req.headers)) {
      return res.status(401).send("No authorization token");
    }

    try {
      const decoded = jwt.verify(
        req.headers.authorization,
        process.env.JWT_SECRET
      );
      req.user = decoded.user;
    } catch (err) {
      res.status(403).send("Invalid Token");
    }
    return handler(req, res);
  };
};

export default authenticate;
