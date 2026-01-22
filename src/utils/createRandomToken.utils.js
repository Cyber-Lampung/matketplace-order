import crypto from "crypto";

const createRandomToken = () => {
  const randomTokenVerif = crypto.randomBytes(3).toString("hex");
  return randomTokenVerif;
};

export default createRandomToken;
