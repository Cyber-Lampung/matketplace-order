import bcrypt from "bcrypt";

const bcryptPassword = async () => {
  // hash password
  const hashPassword = (password) => {
    return bcrypt.hash(password, 10);
  };

  // compare password login
  const comparePassword = (password, passwordHash) => {
    return bcrypt.compare(password, passwordHash);
  };

  return { hashPassword, comparePassword };
};

export default bcryptPassword;
