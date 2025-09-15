import { Nav } from "@/components/Nav";
import { TasksTable } from "@/components/TasksTable";
import { ToDoAddForm } from "@/components/ToDoAddForm";

export default function Home() {
  return (
    <div className="font-sans justify-items-center min-h-screen pb-20">
      <div className="flex flex-col items-end space-y-5">
        <Nav />
        <ToDoAddForm />
        <TasksTable />
      </div>
    </div>
  );
}
