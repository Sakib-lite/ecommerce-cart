/* eslint-disable react-hooks/rules-of-hooks */
import type { NextApiRequest, NextApiResponse } from 'next';
// import { useSnackbar } from 'notistack';
import { connectToDatabase } from '../../../utils/db';
import { hashPassword } from '../../../utils/password';

type a = {
  name: string;
  email: string;
  password: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = req.body;
  const { name, email, password }: a = data;
  if (
    !name ||
    name.trim().length < 4 ||
    !email ||
    email.trim().length < 4 ||
    !password ||
    password.trim().length < 4
  ) {
    res.status(422).json({
      message:
        'Invalid input - password should also be at least 7 characters long.',
    });
    return;
  }

  const client = await connectToDatabase();
  const db = client.db();

  const existingUser = await db.collection('users').findOne({ email: email });

  if (existingUser) {
    res.status(422).json({
      message: 'User already exists with this email',
    });

    console.log('User already exists with this email');
    client.close();
    return;
  }

  const hashedPassword = await hashPassword(password);

  const result = await db.collection('users').insertOne({
    name: name,
    email: email,
    password: hashedPassword,
  });

  res.status(201).json({ message: 'users have been created ' });

  client.close();
}