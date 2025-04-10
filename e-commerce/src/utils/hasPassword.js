import bcrypt from "bcrypt";

export const hashPassword = (password) => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
};

export const comparePassword = (userPassword, receivedPassword) => {
  return  bcrypt.compareSync(receivedPassword, userPassword);
}