"use server";

import { TodoFormValues } from "@/schema";
import { PrismaClient } from "@prisma/client"
import { revalidatePath } from "next/cache";
import { string } from "zod";

const prisma = new PrismaClient()

export const getAllTasksAction = async () => {
  const tasks = await prisma.task.findMany({
    orderBy: {
      createdAt: "desc"
    }
  });
  return tasks;

}

export const addTaskAction = async (data: TodoFormValues) => {
  await prisma.task.create({ data });
  revalidatePath("/")
}

export const deleteTaskAction = async (id: string) => {
  await prisma.task.delete({
    where: {
      id
    }
  });
  revalidatePath("/");
}