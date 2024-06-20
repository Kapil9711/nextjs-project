import { prismaHandlers } from "@/utils/action";
const PrismaPage = async () => {
  const tasks = await prismaHandlers();
  return (
    <div>
      {tasks.map((task) => (
        <h2 key={task.id} className="text-6xl fon-bold">
          {task.content}
        </h2>
      ))}
    </div>
  );
};

export default PrismaPage;
