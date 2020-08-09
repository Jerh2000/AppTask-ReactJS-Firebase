import React, { Component } from "react";
import "./Task.css";

class Task extends Component {
  constructor(props) {
    super(props);
    this.id = props.OntaskID;
    this.taskTitle = props.OntaskTitle;
    this.taskAutor = props.OntaskAuthor;
    this.taskDescription = props.OntaskDescription;
    this.taskResponsable = props.OntaskResponsable;
    this.taskEstimatedTime = props.OntaskEstimatedTime;
    this.taskPriority = props.OntaskPriority;
  }
  handleRemove(id) {
    this.props.OnremoveTask(id);
  }
  render() {
    return (
      <div className="col-md-6 text-center">
        <div className="card text-white mb-3 cards-tasks">
          <div className="card-header mt-0 mb-0">
            <h4 className="mt-0 mb-0 lead"> {this.taskTitle} </h4>
          </div>
          <div className="card-body mt-0 mb-0">
            <h6 className="card-title lead mt-0 mb-0">Autor:</h6>
            <p>{this.taskAutor}</p>
            <h6 className="card-title lead mt-0 mb-0">Description:</h6>
            <p className="card-text lead">{this.taskDescription}</p>

            <h6 className="card-title lead mt-0 mb-0">Estimated Time:</h6>
            <p className="card-text lead">{this.taskEstimatedTime}</p>

            <h6 className="card-title lead mt-0 mb-0">Priority:</h6>
            <p className="card-text">
              <span class="badge badge-pill badge-success lead">
                {this.taskPriority}
              </span>
            </p>
          </div>
          <div className="card-footer">
            <button className="btn btn-success" onClick={() => this.handleRemove(this.id)}>
              Finished
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Task;
