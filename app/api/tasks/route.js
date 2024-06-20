import prisma from "@/utils/db";

export const GET = async (request) => {
  const tasks = await prisma.task.findMany({});
  return Response.json({ data: tasks });
};
