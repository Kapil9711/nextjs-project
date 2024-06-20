"use client";

import { createTaskCustom } from "@/utils/action";
import { useEffect } from "react";
import { useFormStatus, useFormState } from "react-dom";
import toast from "react-hot-toast";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="btn btn-primary join-item"
      disabled={pending}
    >
      {pending ? "please wait..." : "create task"}
    </button>
  );
};

const InitialState = { msg: null };

const TaskFormCustom = () => {
  const [formState, setFormState] = useFormState(
    createTaskCustom,
    InitialState
  );

  useEffect(() => {
    if (formState.msg === "error") {
      toast.error("some error occur");
      return;
    }
    if (formState.msg === "success") {
      toast.success("success");
      return;
    }
  }, [formState]);

  return (
    <form action={setFormState}>
      {/* {formState.msg && <p className="mb-4">{formState.msg}</p>} */}
      <div className="join w-full">
        <input
          placeholder="type-here"
          name="content"
          type="text"
          required
          className="input input-bordered join-item w-full"
        />
        <SubmitButton />
      </div>
    </form>
  );
};

export default TaskFormCustom;
