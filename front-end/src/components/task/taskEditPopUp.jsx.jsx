import { useState } from "react";
import PropTypes from "prop-types"; 
import api from "../../util/axiosConfig";
import {Button, ButtonGroup, Input, Overlay, PopUpContainer, Select, TextArea, Title} from "./taskEditPopUpStyles"
const TaskEditPopUp = ({ task, onClose, onUpdate }) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [status, setStatus] = useState(task.status);

  const handleEdit = async () => {
    try {
      const updatedTask = { title, description, status };
      await api.put(`tasks/${task.id}`, updatedTask);
      onUpdate(task.id, updatedTask);
      onClose();
    } catch (error) {
      console.error("Erro ao editar a tarefa:", error);
    }
  };

  return (
    <Overlay>
      <PopUpContainer>
        <Title>Editar Tarefa</Title>
        <Input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Título"
        />
        <TextArea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Descrição"
        />
        <Select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="pendente">Pendente</option>
          <option value="concluído">Concluído</option>
        </Select>
        <ButtonGroup>
          <Button primary onClick={handleEdit}>
            Salvar
          </Button>
          <Button onClick={onClose}>Cancelar</Button>
        </ButtonGroup>
      </PopUpContainer>
    </Overlay>
  );
};

TaskEditPopUp.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default TaskEditPopUp;