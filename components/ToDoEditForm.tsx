"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import { zodResolver } from "@hookform/resolvers/zod"
import { FormField, FormItem, FormLabel, FormControl, FormMessage, Form } from "./ui/form"
import { SubmitHandler, useForm } from "react-hook-form"
import { todoFormSchema, TodoFormValues } from "@/schema"
import { addTaskAction, editTaskAction } from "@/actions/tasks"
import { useState } from "react"
import { Checkbox } from "./ui/checkbox"
import { ITask } from "@/interface"
import { Pen } from "lucide-react"

interface IProps {
  task: ITask,
}


export function ToDoEditForm({ task }: IProps) {

  const [open, setOpen] = useState(false)

  const form = useForm<TodoFormValues>({
    resolver: zodResolver(todoFormSchema),
    mode: "onChange",
    defaultValues: {
      title: task.title,
      body: task.body as string,
      complete: task.complete,
    }
  });

  const onSubmit: SubmitHandler<TodoFormValues> = async (data) => {
    await editTaskAction({ ...data, id: task.id });
    setOpen(false);
  }


  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={"secondary"}><Pen /></Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Task</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Task Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Go To Gym" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="body"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Task Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Take A Shower And Prepare Your Things And Go" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="complete"
              render={({ field }) => (
                <FormItem className="flex cursor-pointer">
                  <FormControl className="cursor-pointer">
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      ref={field.ref}
                      name={field.name}
                      disabled={field.disabled}
                    />
                  </FormControl>
                  <FormLabel className="cursor-pointer">Complete</FormLabel>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">Save</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
