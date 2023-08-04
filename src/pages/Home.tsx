// src/App.tsx
import React, { useEffect, useContext } from "react";
import DarkModeToggle from "../components/DarkModeToggle";
import styled from "styled-components";
import { ThemeContext } from "../components/ThemeProvider";
import TodoList from "../components/TodoList";
import Form from "../components/Form";

const App: React.FC = () => {
  // Dark Mode
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    const isDarkModePreferred = localStorage.getItem("darkMode") === "true";
    if (isDarkModePreferred) {
      toggleDarkMode();
    }
  }, [toggleDarkMode]);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <Container>
      <h1>My Own Todo List</h1>
      <DarkModeToggle />
      <Form />
      <TodoList />
    </Container>
  );
};

export default App;

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  /* height: 100vh; */
  display: flex;
  align-items: center;
  justify-content: top;
  flex-direction: column;
  padding-top: 10%;
  padding-bottom: 10%;

  top: 0;
  left: 0;
`;
