import { JWT_USER } from "./types"

declare namespace Express {
  interface Request {
    headers: {
      user?: JWT_USER
    }
  }
}