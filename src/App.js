import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";
// This is a small change
export default class App extends Component {
  state = {
    items: [
      { id: 1, title: "wake up" },
      { id: 2, title: "make breakfast" }
    ],
    id: uuidv4(),
    item: "",
    editItem: false
  };
  handleChange = e => {
    console.log("handle Change");
  };
  handleSubmit = e => {
    console.log("handle Submit");
  };
  ClearList = () => {
    console.log("clear list");
  };
  handleDelete = id => {
    console.log("handle Delete");
  };
  handleEdit = id => {
    console.log(`handle edit ${id}`);
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 classname="text-capitalize text-center">Todo Input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.state.handleSubmit}
              editItem={this.state.editItem}
            ></TodoInput>
            <TodoList
              items={this.state.items}
              ClearList={this.ClearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            ></TodoList>
          </div>
        </div>
      </div>
    );
  }
}
