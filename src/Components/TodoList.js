import React, { Component } from "react";
import Item from "./TodoItem";

export default class TodoList extends Component {
  render() {
    return (
      <section>
        <h2>To Do list</h2>
        <Item></Item>
      </section>
    );
  }
}