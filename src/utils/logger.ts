import Log from "../models/log.model";

export const logError = async (error: any) => {
  await Log.create({
    message: error.message,
    stack: error.stack
  });
};
