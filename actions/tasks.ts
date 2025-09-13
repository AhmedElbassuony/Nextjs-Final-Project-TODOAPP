"use server";

import { TodoFormValues } from "@/schema";
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const getAllTasksAction = async () => {
  return await prisma.task.findMany();
}

export const addTaskAction = async (data: TodoFormValues) => {
  await prisma.task.create({ data });
}