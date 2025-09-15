import { getAllTasksAction } from "@/actions/tasks"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,

} from "@/components/ui/table"
import moment from "moment";
import { Badge } from "./ui/badge";
import { TaskActions } from "./TaskActions";

export async function TasksTable() {
  const tasks = await getAllTasksAction();
  return (
    <Table className="w-[900px]">
      <TableCaption>A list of your recent Tasks.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Created At</TableHead>
          <TableHead className="text-right w-[200px]">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tasks.map((task) => (
          <TableRow key={task.id}>
            <TableCell className="font-medium">{task.id}</TableCell>
            <TableCell>{task.title}</TableCell>
            <TableCell>{task.complete ? <Badge>Completed</Badge> : <Badge variant={"secondary"}>Unompleted</Badge >}</TableCell>
            <TableCell>{moment(task.createdAt).format("DD-MM-YYYY")}</TableCell>
            <TableCell className="text-right"><TaskActions task={task} /></TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={5}>Total</TableCell>
          <TableCell className="text-right">{tasks.length}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}
