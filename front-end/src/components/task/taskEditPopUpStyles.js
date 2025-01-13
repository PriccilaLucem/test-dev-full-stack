import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const PopUpContainer = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  width: 400px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h3`
  margin-bottom: 20px;
  color: #333;
`;

export const Input = styled.input`
  width: 100%;
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  resize: none;
`;

export const Select = styled.select`
  width: 100%;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  background-color: ${(props) => (props.primary ? "#007bff" : "#ccc")};
  color: ${(props) => (props.primary ? "#fff" : "#333")};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.primary ? "#0056b3" : "#b3b3b3")};
  }
`;
