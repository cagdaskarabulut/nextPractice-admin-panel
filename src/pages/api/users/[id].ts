import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === 'GET') {
    const user = await prisma.yellcordUser.findUnique({ where: { id: Number(id) } });
    if (!user) return res.status(404).json({ error: 'User not found' });
    return res.status(200).json(user);
  }

  if (req.method === 'PUT') {
    const { username, email, password, avatarUrl, isOnline } = req.body;
    const updatedUser = await prisma.yellcordUser.update({
      where: { id: Number(id) },
      data: { username, email, password, avatarUrl, isOnline },
    });
    return res.status(200).json(updatedUser);
  }

  if (req.method === 'DELETE') {
    await prisma.yellcordUser.delete({ where: { id: Number(id) } });
    return res.status(204).end();
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
