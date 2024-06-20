import EditForm from "@/components/EditForm";
import { getTask } from "@/utils/action";
import Link from "next/link";

const EditTaskPage = async ({ params }) => {
  const task = await getTask(params.id);

  return (
    <div className="max-w-xl">
      <Link href={"/tasks"} className="btn btn-primary  my-8">
        backtotasks
      </Link>
      <EditForm {...{ task }} />
    </div>
  );
};

export default EditTaskPage;
