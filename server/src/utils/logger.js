import { log } from "../controllers/log.js";

export const createLog = (type, desc, success) => {
  const res = log(type, desc, success);
  return res;
};
