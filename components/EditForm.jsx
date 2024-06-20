"use client";
import { editTask } from "@/utils/action";
import { useFormState, useFormStatus } from "react-dom";
import { useEffect } from "react";
import toast from "react-hot-toast";

const InitialState = { msg: null };

const EditForm = ({ task }) => {
  const [formState, setFormState] = useFormState(editTask, InitialState);
  useEffect(() => {
    if (formState.msg === null) return;
    if (formState.msg === "success") {
      toast.success("success");
      return;
    }

    toast.error("some error occur");
  }, [formState]);

  return (
    <form action={setFormState}>
      <div className="join w-full">
        <input
          className="join-item input input-bordered w-full"
          type="text"
          name="content"
          defaultValue={task.content}
          required
        />
        <div className="flex items-center border border-base-900 pr-2">
          <label htmlFor="completed" className="label cursor-pointer">
            <span className="label-text mr-2">completed</span>
            <input
              name="completed"
              type="checkbox"
              defaultChecked={task.completed}
              id="completed"
              className="checkbox checkbox-primary checkbox-sm"
            />
          </label>
        </div>
        <input className="join-item" type="hidden" name="id" value={task.id} />
        {/* <SubmitButton /> */}
        <button className="btn  btn-accent join-item" type="submit">
          save
        </button>
      </div>
    </form>
  );
};

export default EditForm;
