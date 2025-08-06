import aj from '../config/arcjet.js';

const arcjetMiddleware = async (req, res, next) => {
  try {
    const decision = await aj.protect(req, { requested: 1 });

    if (decision.isDenied) {
       // console.log("Arcjet decision:", decision.reason);
      if (decision.reason=== "RATE_LIMIT") {
        return res.status(429).send("Rate limit exceeded. Please try again later.");
      }

      if (decision.reason.isBot) {
        return res.status(403).send("Access denied for bots.");
      }

      return res.status(403).send("Access denied.");
    }

    next();
  } catch (error) {
    console.error("Arcjet middleware error:", error);
    next(error);
  }
};

export default arcjetMiddleware;