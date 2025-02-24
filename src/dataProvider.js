import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const dataProvider = {
  getList: async (resource, params) => {
    const data = await prisma[resource].findMany();
    return { data, total: data.length };
  },
  getOne: async (resource, params) => {
    const data = await prisma[resource].findUnique({
      where: { id: params.id },
    });
    return { data };
  },
  getMany: async (resource, params) => {
    const data = await prisma[resource].findMany({
      where: { id: { in: params.ids } },
    });
    return { data };
  },
  getManyReference: async (resource, params) => {
    const data = await prisma[resource].findMany();
    return { data, total: data.length };
  },
  create: async (resource, params) => {
    const data = await prisma[resource].create({
      data: params.data,
    });
    return { data };
  },
  update: async (resource, params) => {
    const data = await prisma[resource].update({
      where: { id: params.id },
      data: params.data,
    });
    return { data };
  },
  updateMany: async (resource, params) => {
    const data = await prisma[resource].updateMany({
      where: { id: { in: params.ids } },
      data: params.data,
    });
    return { data };
  },
  delete: async (resource, params) => {
    const data = await prisma[resource].delete({
      where: { id: params.id },
    });
    return { data };
  },
  deleteMany: async (resource, params) => {
    const data = await prisma[resource].deleteMany({
      where: { id: { in: params.ids } },
    });
    return { data };
  },
};

export default dataProvider;
