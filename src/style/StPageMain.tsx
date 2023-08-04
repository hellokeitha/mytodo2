import styled from "styled-components";

export const Input = styled.input`
  width: 360px;
  height: 30px;
  border-radius: 3px;
  margin: 4px;
  color: #fff;
  background: #000;
  border: 1px solid #000;
  padding-left: 7px;
  font-family: Roboto Mono;

  &::placeholder {
    color: #b7b7b7;
  }
  &:focus {
    outline: none;
    border-color: #fff;
  }
`;

export const Button = styled.button`
  width: 104px;
  height: 33px;
  flex-shrink: 0;
  background: #d9d9d9;

  color: #000;
  font-family: Roboto Mono;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 162.1%; /* 21.073px */

  margin-top: 10px;
  margin-bottom: 10px;
  border: 1px solid #fff;
  border-radius: 3px;

  &:hover {
    outline: none;
    background: #ff6b00;
    color: #fff;
  }
`;
export const AddButton = styled.button`
  width: 104px;
  height: 34px;
  flex-shrink: 0;
  background: #d9d9d9;

  color: #000;
  font-family: Roboto Mono;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 162.1%; /* 21.073px */

  margin-top: 10px;
  margin-bottom: 10px;
  border: 1px solid #d9d9d9;
  border-radius: 3px;

  &:hover {
    border: none;
    background: #000;
    color: #fff;
  }
`;

export const CardsList = styled.div`
  display: grid;
  justify-content: center;
`;

export const Cards = styled.div`
  width: 367px;
  height: auto;
  flex-shrink: 0;
  background: #fff;

  color: #000;
  font-family: Roboto Mono;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;

  margin-bottom: 50px;
  padding: 10px;
  border-radius: 7px;

  && button {
    margin-right: 8px;
  }
`;
