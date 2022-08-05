import React, {useState} from 'react'
import {RiCloseCircleLine}from 'react-icons/ri'
import {TiEdit}from 'react-icons/ti'
import FormComponent from './formComponent';

function Todo({ completeTodo, todo, removeTodo, updateTodo}) {

    const [edit, setEdit] = useState({
        id: null,
        value: ''
    }) 

    const submitUpdate = value => {
      updateTodo(edit.id, value);

      setEdit({
        id: null,
        value: ''
      });
    };

    if (edit.id) {
      return <FormComponent edit={edit} onSubmit={submitUpdate} />
    }

  return todo.map((todo, index) => (
    <div 
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
       key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className='todo-icons'>
        <RiCloseCircleLine 
          onClick={() => removeTodo(todo.id)}
          className='delete-icon'
          />
        <TiEdit 
          onClick={() => setEdit({id: todo.id, value: todo.text})}
          className='edit-icon'
          />
      </div> 
    </div>
  ))
}

export default Todo;