import shortid from "shortid";

// redux toolkit 으로 다시 만들어보기

const initialState = [
  {
    id: shortid.generate(),
    title: "투두 타이틀 1",
    content: "투두 내용 1",
    important: 1,
    dueDate: 20230730,
    createdAt: Date.now(),
    isCompleted: false,
    isDeleted: false,
  },
  {
    id: shortid.generate(),
    title: "투두 타이틀 2",
    content: "투두 내용 2",
    important: 1,
    dueDate: 20230730,
    createdAt: Date.now(),
    isCompleted: false,
    isDeleted: false,
  },
  {
    id: shortid.generate(),
    title: "투두 타이틀 3",
    content: "투두 내용 3",
    important: 1,
    dueDate: 20230730,
    createdAt: Date.now(),
    isCompleted: false,
    isDeleted: false,
  },
];

// 리듀서
const todos = (state = initialState, action: any) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];

    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload);

    case "SWITCH_TODO":
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, isCompleted: !todo.isCompleted };
        } else {
          return todo;
        }
      });

    default:
      return state;
  }
};

export default todos;
