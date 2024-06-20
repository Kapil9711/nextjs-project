"use server";

import { revalidatePath } from "next/cache";

const { default: prisma } = require("./db");
import z from "zod";

const createTask = async (formData) => {
  const content = formData.get("content");
  await prisma.task.create({
    data: {
      content,
    },
  });
  revalidatePath("/tasks");
};

const createTaskCustom = async (prevState, formData) => {
  const Task = z.object({
    content: z.string().min(5),
  });
  // await new Promise((res) => setTimeout(res, 300));
  const content = formData.get("content");
  try {
    Task.parse({ content });
    await prisma.task.create({
      data: {
        content,
      },
    });
    revalidatePath("/tasks");
    return { msg: "success" };
  } catch (error) {
    return { msg: "error" };
  }
};

const prismaHandlers = async () => {
  await prisma.task.create({
    data: {
      content: "wake up",
    },
  });

  return await prisma.task.findMany();
};

const deleteTask = async (formData) => {
  const id = formData.get("id");
  await prisma.task.delete({
    where: { id },
  });
  revalidatePath("/tasks");
};

const getTask = async (id) => {
  return await prisma.task.findUnique({
    where: { id },
  });
};

const editTask = async (prevState, formData) => {
  const Task = z.object({
    content: z.string().min(5),
  });
  const content = formData.get("content");
  try {
    Task.parse({ content });
    await prisma.task.update({
      where: {
        id: formData.get("id"),
      },
      data: {
        content: content,
        completed: formData.get("completed") === "on",
      },
    });
    revalidatePath(`/tasks`);
    return { msg: "success" };
  } catch (error) {
    console.log(error.errors[0].message);
    return { msg: error.errors[0].message };
  }
};

export {
  createTask,
  prismaHandlers,
  deleteTask,
  getTask,
  editTask,
  createTaskCustom,
};
