import { compare, hash } from 'bcryptjs';

export async function hashPassword(password: string) {
  const hashedPassword = await hash(password, 12);

  return hashedPassword;
}

export async function checkPassword(password: string, hashedPassword: string) {
  const verifiedPassword = await compare(password, hashedPassword);

  return verifiedPassword;
}