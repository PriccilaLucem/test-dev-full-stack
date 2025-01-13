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
`;

export const PopUp = styled.div`
  background: #fff;
  padding: 30px;
  border-radius: 10px;
  width: 400px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  text-align: center;
  font-family: Arial, sans-serif;

  h3 {
    margin-bottom: 20px;
    color: #333;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;

  label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-weight: bold;
    color: #555;
  }

  input,
  textarea,
  select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 14px;
  }

  textarea {
    resize: vertical;
    height: 80px;
  }

  button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
  }

  button[type="submit"] {
    background-color: #4caf50;
    color: white;
    transition: background-color 0.3s;

    &:hover {
      background-color: #45a049;
    }
  }

  button[type="button"] {
    background-color: #f44336;
    color: white;
    transition: background-color 0.3s;

    &:hover {
      background-color: #d32f2f;
    }
  }
`;
