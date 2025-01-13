import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  background-color: #f4f4f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  color: #333;
`;

export const CreateTaskButton = styled.span`
  font-size: 2rem;
  color: #007bff;
  cursor: pointer;
  &:hover {
    color: #0056b3;
  }
`;

export const TaskList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
