import prisma from "@/utils/db";
import Link from "next/link";
import DeleteForm from "./DeleteForm";

const TaskList = async () => {
  const tasks = await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  if (tasks.length === 0)
    return (
      <h2 className="mt-12    text-5xl capitalize font-bold">
        no task to show...
      </h2>
    );
  return (
    <ul className="mt-8">
      {tasks.map((task) => {
        return (
          <li
            className="flex justify-between items-center px-8 py-6 mb-4 border border-base-300 rounded-lg shadow-lg "
            key={task.id}
          >
            <h2
              className={`text-xl capitalize ${
                task.completed && "line-through"
              }`}
            >
              {task.content}
            </h2>
            <article className="flex gap-6 items-center">
              <Link
                href={`/tasks/${task.id}`}
                className="btn btn-accent btn-xs "
              >
                Edit
              </Link>
              <DeleteForm id={task.id} />
            </article>
          </li>
        );
      })}
    </ul>
  );
};

export default TaskList;
