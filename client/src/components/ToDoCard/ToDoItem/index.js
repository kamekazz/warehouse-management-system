import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';


const ToDoItem = ({todo, onTodoChecked}) => {

  return (
    <div className="todo-cell d-flex">

      <Checkbox color="primary"
                checked={todo.selected}
                onClick={(event) => {
                  event.stopPropagation();
                  onTodoChecked(todo);
                }}
                value="SelectTodo"
                className="size-30 mr-2"
      />

      <span className={`align-self-center wra ${todo.selected && 'text-muted text-strikethrough'}`}>
                 {todo.notes}
            </span>

    </div>

  )
};

export default ToDoItem;