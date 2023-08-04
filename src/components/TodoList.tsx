import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as St from "../../src/style/StPageMain";

const TodoList = () => {
  const todos = useSelector((state: any) => {
    return state.todos;
  });

  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <h2>To do...</h2>
        <St.CardsList>
          {todos
            .filter((todo: any) => todo.isCompleted === false)
            .map((todo: any) => {
              return (
                <div key={todo.id}>
                  <St.Cards>
                    <p>Title: {todo.title}</p>
                    <p>Content: {todo.content}</p>
                    <p>Important: {todo.important}</p>
                    <p>Due Date: {todo.dueDate}</p>
                    <p>Created At: {todo.createdAt}</p>
                    <p>is Completed: {todo.isCompleted.toString()}</p>
                    <p>is Done: {todo.isDeleted.toString()}</p>
                    <St.Button
                      onClick={() => {
                        dispatch({
                          type: "SWITCH_TODO",
                          payload: todo.id,
                        });
                      }}
                    >
                      {todo.isCompleted ? "CANCEL" : "DONE"}
                    </St.Button>
                    <St.Button
                      onClick={() => {
                        dispatch({
                          type: "DELETE_TODO",
                          payload: todo.id,
                        });
                      }}
                    >
                      Delete
                    </St.Button>
                  </St.Cards>
                </div>
              );
            })}
        </St.CardsList>
      </div>
      <div>
        <h2>Completed...</h2>
        <St.CardsList>
          {todos
            .filter((todo: any) => todo.isCompleted === true)
            .map((todo: any) => {
              return (
                <div key={todo.id}>
                  <St.Cards>
                    <p>Title: {todo.title}</p>
                    <p>Content: {todo.content}</p>
                    <p>Important: {todo.important}</p>
                    <p>Due Date: {todo.dueDate}</p>
                    <p>Created At: {todo.createdAt}</p>
                    <p>is Completed: {todo.isCompleted.toString()}</p>
                    <p>is Done: {todo.isDeleted.toString()}</p>
                    <St.Button
                      onClick={() => {
                        dispatch({
                          type: "SWITCH_TODO",
                          payload: todo.id,
                        });
                      }}
                    >
                      {todo.isCompleted ? "CANCEL" : "DONE"}
                    </St.Button>
                    <Link to={`/${todo.id}`}>
                      <St.Button>Edit</St.Button>
                    </Link>
                    <St.Button
                      onClick={() => {
                        dispatch({
                          type: "DELETE_TODO",
                          payload: todo.id,
                        });
                      }}
                    >
                      Delete
                    </St.Button>
                  </St.Cards>
                </div>
              );
            })}
        </St.CardsList>
      </div>
    </div>
  );
};

export default TodoList;
