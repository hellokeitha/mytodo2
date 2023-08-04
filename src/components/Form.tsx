import { useDispatch } from "react-redux";
import useInput from "../hooks/useInput";
import shortid from "shortid";
import * as St from "../../src/style/StPageMain";

const Form: React.FC = () => {
  const dispatch = useDispatch();

  // custom hook
  const [title, onChangeTitleHandler, setTitle] = useInput();
  const [content, onChangeContentHandler, setContent] = useInput();

  return (
    <>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (title.trim().length >= 1 && content.trim().length >= 1) {
              dispatch({
                type: "ADD_TODO",
                payload: {
                  id: shortid.generate(),
                  title: title,
                  content: content,
                  important: 2,
                  dueDate: 20230729,
                  createdAt: Date.now(),
                  isCompleted: false,
                  isDeleted: false,
                },
              });

              setTitle("");
              setContent("");
            } else {
              alert("입력칸을 모두 채워주세요");
            }
          }}
        >
          <St.Input
            placeholder="title"
            value={title}
            onChange={onChangeTitleHandler}
          />
          <St.Input
            placeholder="content"
            value={content}
            onChange={onChangeContentHandler}
          />
          <St.AddButton>Add</St.AddButton>
        </form>
      </div>
    </>
  );
};

export default Form;
