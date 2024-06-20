import prisma from "@/utils/db";
import { revalidatePath } from "next/cache";
import { createTask } from "@/utils/action";

const TaskForm = () => {
  return (
    <form action={createTask}>
      <div className="join w-full">
        <input
          placeholder="type-here"
          name="content"
          type="text"
          required
          className="input input-bordered join-item w-full"
        />
        <button type="submit" className="btn btn-primary join-item">
          create task
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
