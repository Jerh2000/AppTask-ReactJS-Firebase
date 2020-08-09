import React, { Component } from "react";
import logo from "../../logo.svg";
import "./App.css";

import FormTask from "../FormTask/FormTask.jsx";
import Task from "../Task/Task.jsx";
import Navigation from "../Navigation/Navigation.jsx";

import "firebase/database";
import app from "../../Config/config";

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
    };
    this.db = app.database().ref().child("tasks");
    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }

  componentDidMount() {
    const { tasks } = this.state;
    this.db.on("child_added", (snap) => {
      tasks.push({
        taskID: snap.key,
        taskTitle: snap.val().taskTitle,
        taskAuthor: snap.val().taskAuthor,
        taskDescription: snap.val().taskDescription,
        taskEstimatedTime: snap.val().taskEstimatedTime,
        taskPriority: snap.val().taskPriority,
      });
      this.setState({ tasks });
    });
    this.db.on("child_removed", (snap) => {
      for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].taskID == snap.key) {
          tasks.splice(i, 1);
        }
      }
      this.setState({ tasks });
    });
  }

  removeTask(TaskID) {
    this.db.child(TaskID).remove();
  }

  addTask(item1, item2, item3, item4, item5) {
    this.db.push().set({
      taskTitle: item1,
      taskAuthor: item2,
      taskDescription: item4,
      taskEstimatedTime: item3,
      taskPriority: item5,
    });
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
          OnremoveTask={this.removeTask}
        />
      );
    });
    console.log(this.state.tasks.length);
    return (
      <div className="backg">
        <Navigation />
        <div className="container mt-5 mb-5">
          <div className="row">
            <div className="col-lg-5">
              <FormTask addTask={this.addTask} />
            </div>
            <div className="col-lg-7">
              <div className="col-12 text-center lead mb-1">
                <button type="button" class="btn btn-success mb-0 w-100">
                  Tasks{" "}
                  <span class="badge badge-light">
                    {this.state.tasks.length}
                  </span>
                </button>
              </div>
              <div className="row scrollers rounded">{listTask}</div>
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
