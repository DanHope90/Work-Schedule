import React, {useState} from 'react'
import FormComponent from './formComponent'

function ListComponent() {
    const [todos, setTodo] = useState([])

     function addTodo (todo) {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return
        }
        const newTodo = [todo, ...todos]

        setTodo(newTodo)
        console.log(todo, ...todos)
     }

  return (
    <div>
      <h1>What's the plan?</h1>
        <FormComponent onSubmit={addTodo}/>
    </div>
  )
}

export default ListComponent

