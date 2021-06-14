import { withSentry, captureException } from "@sentry/nextjs";
import * as superagent from "superagent";

class ShoeException extends Error {
  constructor(message) {
    super(message);
    this.name = new.target.prototype.constructor.name;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export default withSentry(async (req, res) => {
  // not a real nyt page, but doesn't matter - it gets us three spans because of
  // the redirects
  await superagent.get(`http://www.nyt.com/photos?dog=${req.query.name}`);
  if (req.query.name === "charlie") {
    captureException(new ShoeException("Charlie has eaten the flip-flops :-("));
    res.status(500).json({ bye: "flip-flops" });
  } else {
    res.status(200).json({ good: "dog" });
  }
});
