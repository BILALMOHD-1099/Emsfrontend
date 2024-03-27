import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./ReceivedTask.css";
import { getassignedTask, submitTask } from "../../apiCalls";

const ReceivedTask = ({ subject, description, deadline, id, getTasks }) => {
  const [showModal, setShowModal] = useState(false);

  const handleViewTask = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubmitTask = async () => {
    try {
      await submitTask({ task_id: id });
      alert('Task submitted successfully');
      setShowModal(false);
      getTasks();
    } catch (error) {
      console.error('Error submitting task:', error);
      alert('Error submitting task');
    }
  };

  return (
    <div className="received-task">
      <div className="task-card">
        <div className="task-header">
          <p className="greeting">You have a new task</p>
          <button className="view-task-button" onClick={handleViewTask}>
            View Task
          </button>
        </div>
      </div>
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Task Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="task-description">
            <p>
              <strong>Subject:</strong> {subject}
            </p>
            <p>
              <strong>Task Description:</strong> {description}
            </p>
            <p>
              <strong>Deadline:</strong> {deadline}
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmitTask}>
            Submit Task
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    try {
      const res = await getassignedTask();
      setTasks(res.tasks);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <ReceivedTask
          key={task.id}
          subject={task.subject}
          description={task.description}
          deadline={task.deadline}
          id={task.id}
          getTasks={getTasks}
        />
      ))}
    </div>
  );
};

export default TaskList;
