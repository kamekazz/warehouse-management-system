import React from 'react';

import ToDoItem from "./ToDoItem/index";

class SimpleToDo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      allToDos: props.data,
      toDos: props.data
    }
  }

  onTodoChecked(data) {
    data.selected = !data.selected;
    const toDos = this.state.toDos.map(todo => (todo.id === data.id) ? data : todo);
    this.setState({
      toDos: toDos
    });
  }

  render() {
    const {toDos} = this.state;
    return (
      <div className="todo-cell-group">
        {toDos.map((todo, index) =>
          <ToDoItem key={index} index={index} todo={todo}
                    onTodoChecked={this.onTodoChecked.bind(this)}/>
        )}
      </div>
    )
  }
}

export default SimpleToDo;