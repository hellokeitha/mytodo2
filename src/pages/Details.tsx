import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function Details() {
  const todoStore = useSelector((state: any) => state.todos);

  const params = useParams();

  //  어떤 todo 인지 찾아보기
  const foundData = todoStore.find((item: any) => {
    return item.id === params.id;
  });

  console.log("foundData", foundData);

  const navigate = useNavigate();

  return (
    <div>
      Details
      <p>{foundData.id}</p>
      <p>{foundData.title}</p>
      <p>{foundData.content}</p>
      <p>{foundData.important}</p>
      <p>{foundData.dueDate}</p>
      <p>{foundData.createdAt}</p>
      <p>{foundData.isCompleted.toString()}</p>
      <p>{foundData.isDeleted.toString()}</p>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Back To Home
      </button>
    </div>
  );
}

export default Details;
