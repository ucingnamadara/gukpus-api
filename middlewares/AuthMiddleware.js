function AuthMiddleware(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }
  try {
    // Verify the JWT token and decode the payload
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || "supercalifragilisticexpialidocious",
    );

    // Attach the decoded payload to the request object
    req.user = decoded;

    // Proceed to the next middleware or route handler
    next();
  } catch (err) {
    // Handle invalid or expired tokens
    return res.status(403).json({ error: "Invalid token" });
  }
}

module.exports = AuthMiddleware;
