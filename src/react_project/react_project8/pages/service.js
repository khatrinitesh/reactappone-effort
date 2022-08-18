/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Banner from "../components/banner";
import { CustomTask } from "../components/task";

export default function Service() {
  const baseUrl = `https://jsonplaceholder.typicode.com/posts`;

  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [todoList, setTodoList] = useState([]);

  function deleteTask(id) {
    setTodoList(todoList.filter((task) => task.id !== id));
  }

  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };

  const btnInc = () => {
    setCount((c) => c + 1);
  };
  const btnDec = () => {
    setCount((c) => c - 1);
  };
  const btnReset = () => {
    setCount(0);
  };

  const btnToggle = () => {
    setIsActive(!isActive);
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(baseUrl);
      if (!response.ok) {
        throw new Error("sorry something went wrong");
      }
      const data = await response.json();
      setTodoList(data);
      setLoading(false);
    } catch (error) {
      setError(`error.message`);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div className="content">
      <Banner bannerTitle={"Service"} bannerDesc={"Lorem Ipsum"} />

      {count}
      <button onClick={btnInc}>+</button>
      <button onClick={btnDec}>-</button>
      <button onClick={btnReset}>Reset</button>

      <button
        onClick={btnToggle}
        className={isActive ? "btn btn-primary" : "btn btn-success"}
      >
        {isActive ? "Primary" : "Success"}
      </button>
      {isActive ? "primary" : "success"}

      {todoList.map((task) => {
        return (
          <>
            <CustomTask
              task={task.taskName}
              id={task.id}
              completed={task.completed}
              deleteTask={deleteTask}
              completeTask={completeTask}
            />
          </>
        );
      })}
    </div>
  );
}
