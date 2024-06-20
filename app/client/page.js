"use client";
import { useState } from "react";

const ClientPage = () => {
  const [count, setCount] = useState(0);
  return (
    <article>
      <h1 className="text-5xl font-bold mb-8">Counter{count}</h1>
      <button
        onClick={() => setCount(count + 1)}
        className="btn btn-accent  px-12"
      >
        Click
      </button>
    </article>
  );
};

export default ClientPage;
