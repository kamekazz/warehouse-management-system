import React from 'react';
import {SortableContainer} from 'react-sortable-hoc';
import ToDoItem from './ToDoItem';
import CustomScrollbars from 'util/CustomScrollbars';

const ToDoList = SortableContainer(({toDos, onTodoSelect, onTodoChecked, onMarkAsStart, width}) => {
  return (
    <div className="module-list">
      <CustomScrollbars className="module-list-scroll scrollbar"
                        style={{height: width >= 1200 ? 'calc(100vh - 259px)' : 'calc(100vh - 238px)'}}>
        {toDos.map((todo, index) =>
          <ToDoItem key={index} index={index} todo={todo} onTodoSelect={onTodoSelect}
                    onMarkAsStart={onMarkAsStart}
                    onTodoChecked={onTodoChecked}/>
        )}
      </CustomScrollbars>
    </div>
  )
});

export default ToDoList;