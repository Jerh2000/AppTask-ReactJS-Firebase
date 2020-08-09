import React, { Component } from "react";
import "./FormTask.css"

//Este componente corresponde al formulario donde se ingresara la informacion de una nueva tarea
class FormTasks extends Component {
  constructor() {
    super()
    this.addTask = this.addTask.bind(this);
  }
  addTask(){
    this.props.addTask(this.inputTitle.value,this.inputAuthor.value,this.inputEstimatedTime.value,this.textDescription.value,this.inputPriority.value)
    this.inputTitle.value = '';
    this.inputAuthor.value = '';
    this.inputEstimatedTime.value = '';
    this.textDescription.value = '';
    this.inputPriority.value = '';
  }
  render() {
    return (
      <div className="container col-12 cardForm">
        <h1 className="display-4 text-center">New Task</h1>
        
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="tasktitle" className="lead">Task title</label>
              <input
                required
                type="text"
                class="form-control boxes"
                name="Title"
                placeholder="Task title..."
                ref={input =>{this.inputTitle = input;}}
              />
            </div>

            <div class="form-group col-md-6">
              <label for="responsable" className="lead">Responsable</label>
              <input
                required
                type="text"
                class="form-control boxes"
                name="Responsable"
                placeholder="Responsable..."
                ref={input =>{this.inputAuthor = input;}}
              />
            </div>
          </div>

          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="estimatedtime" className="lead">Estimated Time (days)</label>
              <input
                required
                type="number"
                class="form-control boxes"
                name="EstimatedTime"
                placeholder="Estimated time..."
                ref={input =>{this.inputEstimatedTime = input;}}
              />
            </div>

            <div class="form-group col-md-6">
              <label for="priority" className="lead">Priority</label>
              <select
                required
                name="Priority"
                className="form-control boxes"
                ref={select =>{this.inputPriority = select;}}
              >
                <option disabled >
                  Choose...
                </option>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-12">
              <label for="exampleFormControlTextarea1" className="lead">Description</label>
              <textarea
                required
                class="form-control boxes"
                name="Description"
                rows="3"
                placeholder="Description"
                ref={textarea =>{this.textDescription = textarea;}}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-12 d-flex justify-content-center">
              <button className="btn btn-success" onClick={this.addTask}>
                Save
              </button>
            </div>
          </div>
        
      </div>
    );
  }
}

export default FormTasks;
