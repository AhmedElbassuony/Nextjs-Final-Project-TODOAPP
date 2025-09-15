"use server";

import { ITask } from "@/interface";
import { TodoFormValues } from "@/schema";
import { auth } from "@clerk/nextjs/server";
import { PrismaClient } from "@prisma/client"
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient()

export const getAllTasksAction = async () => {
  const { userId } = await auth();
  const tasks = await prisma.task.findMany({
    orderBy: {
      createdAt: "desc"
    },
    where: {
      userId: userId as string
    }
  });
  return tasks;

}

export const addTaskAction = async (data: TodoFormValues) => {
  const { userId } = await auth();
  await prisma.task.create({ data: { ...data, userId: userId as string } });
  revalidatePath("/");
}

export const deleteTaskAction = async (id: string) => {
  await prisma.task.delete({
    where: {
      id
    }
  });
  revalidatePath("/");
}

export const editTaskAction = async (data: ITask) => {
  await prisma.task.update({
    where: {
      id: data.id
    },
    data: {
      title: data.title,
      body: data.body,
      complete: data.complete
    }
  })
  revalidatePath("/");
}