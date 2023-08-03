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
      <p>{foundData.contents}</p>
      <p>{foundData.isDone.toString()}</p>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Back To Home
      </button>
      {/* <Link to='/Home'>홈 페이지로 이동하기</Link> */}
    </div>
  );
}

export default Details;
