"use client"



import { Pen, Trash } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { ITask } from "@/interface";
import { deleteTaskAction } from "@/actions/tasks";
import { Spinner } from "./ui/Spinner";
import { ToDoEditForm } from "./ToDoEditForm";

interface IProps {
  task: ITask
}



export const TaskActions = ({ task }: IProps) => {
  const [loading, setLoading] = useState(false);

  const onDelete = async () => {
    setLoading(true);
    await deleteTaskAction(task.id as string);
    setLoading(false);
  }

  return (
    <div className="space-x-3">
      <ToDoEditForm task={task} />
      <Button variant={"destructive"} onClick={onDelete}>{loading ? <Spinner /> : <Trash />}</Button>
    </div>
  );
}