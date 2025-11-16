import { Request, Response, NextFunction } from "express";
import { logError } from "../utils/logger";

export const errorHandler = async (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  await logError(err);
  res.status(500).json({ message: "Internal Server Error" });
};
