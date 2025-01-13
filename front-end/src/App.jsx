import { useEffect, useState } from "react";
import api from "./util/axiosConfig";
import TaskComponent from "./components/task/taskComponent";
import TaskPopUp from "./components/task/taskPopUp"
import {Container, CreateTaskButton, Header, TaskList, Title} from "./appStyles"

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const togglePopUp = () => {
    setIsPopUpOpen((prev) => !prev);
  };

  useEffect(() => {
    api
      .get("tasks")
      .then((result) => setTasks(result.data))
      .catch((e) => console.log(e));
  }, []);

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleUpdate = (id, updatedTask) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, ...updatedTask } : task))
    );
  };

  return (
    <Container>
      <Header>
        <Title>Minhas Tarefas</Title>
        <CreateTaskButton onClick={togglePopUp}>+</CreateTaskButton>
      </Header>

      {isPopUpOpen && (
        <TaskPopUp
          onClose={togglePopUp}
          onTaskCreated={(newTask) => setTasks((prev) => [...prev, newTask])}
        />
      )}

      <TaskList>
        {tasks.map((task) => (
          <li key={task.id}>
            <TaskComponent
              id={task.id}
              title={task.title}
              description={task.description}
              status={task.status}
              onDelete={handleDelete}
              onUpdate={handleUpdate}
            />
          </li>
        ))}
      </TaskList>
    </Container>
  );
};

export default App;