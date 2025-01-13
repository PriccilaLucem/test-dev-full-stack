import styled from "styled-components";

export const TaskContainer = styled.li`
  list-style-type: none;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
`;

export const Title = styled.h4`
  margin: 0 0 8px;
  color: #333;
`;

export const Description = styled.p`
  margin: 0 0 8px;
  color: #666;
`;

export const Status = styled.p`
  margin: 0 0 8px;
  font-weight: bold;
  color: ${(props) => (props.status === "concluído" ? "green" : "orange")};
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
`;

export const IconButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  svg {
    font-size: 1.5rem;
  }
`;