import PropTypes from "prop-types";
import { useState } from "react";
import TaskEditPopUp from "./taskEditPopUp.jsx";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {ButtonGroup, Description, IconButton, Status, TaskContainer, Title} from "./taskComponentStyles.js"

const TaskComponent = ({ id, title, description, status, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => setIsEditing((prev) => !prev);

  return (
    <TaskContainer>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Status status={status}>Status: {status}</Status>
      <ButtonGroup>
        <IconButton onClick={() => onDelete(id)}>
          <DeleteForeverIcon style={{ color: "red" }} />
        </IconButton>
        <IconButton onClick={toggleEdit}>
          <ModeEditIcon style={{ color: "blue" }} />
        </IconButton>
      </ButtonGroup>

      {isEditing && (
        <TaskEditPopUp
          task={{ id, title, description, status }}
          onClose={toggleEdit}
          onUpdate={onUpdate}
        />
      )}
    </TaskContainer>
  );
};

TaskComponent.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default TaskComponent;