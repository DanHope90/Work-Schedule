import React, {useState} from 'react'
import FormComponent from './formComponent'
import Todo from './todo'

function ListComponent() {
    const [todos, setTodo] = useState([])

     const addTodo = (todo) => {
       // returns nothing if no text 
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return
        }
        // sets the new todo
        const newTodo = [todo, ...todos]

        setTodo(newTodo)
        console.log(todo, ...todos)
     }

     const updateTodo = (todoId, newValue) => {
      if (!newValue.text || /^\s*$/.test(newValue.text)) {
        return
    }
      setTodo(prev => prev.map(item => item.id === todoId ? newValue : item))
     }

     const removeTodo = (id) => {
      const deleteTodo = [...todos].filter(todo => todo.id !== id)
      setTodo(deleteTodo)
     }

     const completeTodo = (id) => {
      
      let updatedTodo = todos.map(todo => {
        if (todo.id === id) {
          //toggles between true and false
          todo.isComplete = !todo.isComplete
        }
        return todo
      });
      //todo text appears on the app with icons
        setTodo(updatedTodo)
        console.log(setTodo(updatedTodo))
     }

  return (
    <div>
      <h1>What's the plan?</h1>
        <FormComponent onSubmit={addTodo} />
        <Todo 
        todo={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
        />
    </div>
  )
}

export default ListComponent

