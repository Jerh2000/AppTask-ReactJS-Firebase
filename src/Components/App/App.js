import React, { Component } from "react";
import logo from "../../logo.svg";
import "./App.css";
import FormTask from "../FormTask/FormTask";
import Task from "../Task/Task";
import Navigation from "../Navigation/Navigation";

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        {
          taskID: 1,
          taskTitle: "Task 1",
          taskAuthor: "NN",
          taskDescription: "Tarea de limpiar",
          taskEstimatedTime: "5",
          taskPriority: "high",
        },
        {
          taskID: 2,
          taskTitle: "Task 2",
          taskAuthor: "FF",
          taskDescription: "Tarea de comer",
          taskEstimatedTime: "1",
          taskPriority: "Medium",
        },
      ],
    };
    this.addTask = this.addTask.bind(this);
  }
  removeTask() {}

  addTask(item1,item2,item3,item4,item5) {
    let { tasks } = this.state;
    tasks.push({
      taskID: tasks.length + 1,
      taskTitle: item1,
      taskAuthor: item2,
      taskDescription: item4,
      taskEstimatedTime: item3,
      taskPriority: item5,
    });
    this.setState({tasks});
  }

  render() {
    const listTask = this.state.tasks.map((task) => {
      return (
        <Task
          OntaskID={task.taskID}
          OntaskTitle={task.taskTitle}
          OntaskAuthor={task.taskAuthor}
          OntaskDescription={task.taskDescription}
          OntaskEstimatedTime={task.taskEstimatedTime}
          OntaskPriority={task.taskPriority}
          key={task.taskID}
        />
      );
    });

    return (
      <div className="backg">
        <Navigation count={this.state.tasks.length} />
        <div className="container mt-5 mb-5">
          <div className="row">
            <div className="col-lg-5">
              <FormTask addTask={this.addTask} />
            </div>
            <div className="col-lg-7">
              <div className="row">{listTask}</div>
            </div>
          </div>
        </div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="display-1 text-center"> Desarrollado en React </p>
        </header>
      </div>
    );
  }
}

export default App;
