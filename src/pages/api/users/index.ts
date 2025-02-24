import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const users = await prisma.yellcordUser.findMany();
    return res.status(200).json(users);
  }

  if (req.method === 'POST') {
    const { username, email, password, avatarUrl, isOnline } = req.body;
    const newUser = await prisma.yellcordUser.create({
      data: { username, email, password, avatarUrl, isOnline },
    });
    return res.status(201).json(newUser);
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
