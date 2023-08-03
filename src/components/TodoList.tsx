import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const TodoList: React.FC = () => {
  const todos = useSelector((state: any) => {
    return state.todos;
  });

  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <h2>To do...</h2>
        {todos
          .filter((todo: any) => todo.isCompleted === false)
          .map((todo: any) => {
            return (
              <div key={todo.id}>
                <p>Title: {todo.title}</p>
                <p>Content: {todo.content}</p>
                <p>Important: {todo.important}</p>
                <p>Due Date: {todo.dueDate}</p>
                <p>Created At: {todo.createdAt}</p>
                <p>is Completed: {todo.isCompleted.toString()}</p>
                <p>is Done: {todo.isDeleted.toString()}</p>
                <button
                  onClick={() => {
                    dispatch({
                      type: "SWITCH_TODO",
                      payload: todo.id,
                    });
                  }}
                >
                  {todo.isCompleted ? "CANCEL" : "DONE"}
                </button>
                <button
                  onClick={() => {
                    dispatch({
                      type: "DELETE_TODO",
                      payload: todo.id,
                    });
                  }}
                >
                  Delete
                </button>
              </div>
            );
          })}
      </div>
      <div>
        <h2>Completed...</h2>
        {todos
          .filter((todo: any) => todo.isCompleted === true)
          .map((todo: any) => {
            return (
              <div key={todo.id}>
                <p>Title: {todo.title}</p>
                <p>Content: {todo.content}</p>
                <p>Important: {todo.important}</p>
                <p>Due Date: {todo.dueDate}</p>
                <p>Created At: {todo.createdAt}</p>
                <p>is Completed: {todo.isCompleted.toString()}</p>
                <p>is Done: {todo.isDeleted.toString()}</p>
                <button
                  onClick={() => {
                    dispatch({
                      type: "SWITCH_TODO",
                      payload: todo.id,
                    });
                  }}
                >
                  {todo.isCompleted ? "CANCEL" : "DONE"}
                </button>
                <button
                  onClick={() => {
                    dispatch({
                      type: "DELETE_TODO",
                      payload: todo.id,
                    });
                  }}
                >
                  Delete
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default TodoList;
