import PropTypes from "prop-types";
import { useState } from "react";
import api from "../../util/axiosConfig";
import { Form, Overlay, PopUp } from "./taskPopUpStyles";

const TaskPopUp = ({ onClose, onTaskCreated }) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    status: "pendente",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/tasks", task);
      onTaskCreated(response.data);
      onClose();
    } catch (err) {
      console.error("Erro ao criar tarefa:", err);
      alert("Erro ao criar a tarefa. Tente novamente.");
    }
  };

  return (
    <Overlay>
      <PopUp>
        <h3>Criar Tarefa</h3>
        <Form onSubmit={handleSubmit}>
          <label>
            Título:
            <input
              type="text"
              name="title"
              value={task.title}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Descrição:
            <textarea
              name="description"
              value={task.description}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Status:
            <select
              name="status"
              value={task.status}
              onChange={handleChange}
            >
              <option value="pendente">Pendente</option>
              <option value="concluído">Concluído</option>
            </select>
          </label>
          <br />
          <button type="submit">Criar</button>
          <button type="button" onClick={onClose}>
            Cancelar
          </button>
        </Form>
      </PopUp>
    </Overlay>
  );
};

TaskPopUp.propTypes = {
  onClose: PropTypes.func.isRequired,
  onTaskCreated: PropTypes.func.isRequired,
};

export default TaskPopUp;


