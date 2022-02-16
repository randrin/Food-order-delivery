import bcrypt from "bcrypt";

export const GenerateSalt = async () => {
  return bcrypt.genSalt();
};

export const GeneratePassword = (password: string, salt: string) => {
  return bcrypt.hash(password, salt);
};
