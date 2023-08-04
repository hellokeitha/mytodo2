// 중앙 state 관리소
import { createStore } from "redux";
import { combineReducers } from "redux";
// 만들어준 모듈 import
import todos from "../modules/todos";

const rootReducer = combineReducers({
  todos: todos,
});

export type RootState = ReturnType<typeof rootReducer>;

// 스토어 생성
const store = createStore(rootReducer);

export default store;
