import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../utils/db';
import { hashPassword } from '../../../utils/password';

type a = {
  name: string;
  email: string;
  age: number;
  password: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') return;

  const data = req.body;
  const { name, email, age, password }: a = data;
  if (
    !name ||
    name.trim().length <= 5 ||
    !email ||
    !email.includes('@') ||
    !age ||
    !password ||
    password.trim().length <= 3
  ) {
    res.status(406).send('Invalid input');
    return;
  }

  const client = await connectToDatabase();
  const db = client.db();

  const existingUser = await db.collection('clients').findOne({ email: email });

  if (existingUser) {
    res.status(403).send('User already exists with this email');

    client.close();
    return;
  }

  const hashedPassword = await hashPassword(password);

  const result = await db.collection('clients').insertOne({
    name: name,
    email: email,
    age: age,
    password: hashedPassword,
  });

  res.status(201).send('Registration Completed ');

  client.close();
}