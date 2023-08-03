import { useDispatch } from "react-redux";
import useInput from "../hooks/useInput";
import shortid from "shortid";

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

            dispatch({
              type: "ADD_TODO",
              payload: {
                id: shortid.generate(),
                title: title,
                content: content,
                important: 2,
                dueDate: 20230729,
                createdAt: Date.now(),
                isCompleted: true,
                isDeleted: false,
              },
            });
            setTitle("");
            setContent("");
          }}
        >
          <input
            placeholder="title"
            value={title}
            onChange={onChangeTitleHandler}
          />
          <input
            placeholder="content"
            value={content}
            onChange={onChangeContentHandler}
          />
          <button>Add</button>
        </form>
      </div>
    </>
  );
};

export default Form;
