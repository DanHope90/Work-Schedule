import {useEffect, useState, useRef } from "react"
import "../styles/form.css";

function FormComponent (props) {

   const [addTask, setAddTask] = useState("");

   const inputRef = useRef(null)

   useEffect(() => {
     inputRef.current.focus()
   })

   const handleChange = (e) => {
     setAddTask(e.target.value)
   }

   const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: addTask
    })
      setAddTask('');
    
  };

    // useEffect(() => {
    //   if(localStorage.getItem('exampleData')) {
    //     setNineAm(JSON.parse(localStorage.getItem('exampleData')))
    //   }
    // }, [])


    useEffect(() => {
      localStorage.setItem('taskText', JSON.stringify(addTask))
    }, [addTask])

    // // useEffect(() => {
    // //   localStorage.setItem('tenAmText', JSON.stringify(tenAm))
    // // }, [tenAm])

 

    return (
      <>
      <form className="todo-form" onSubmit={handleSubmit}>
       <input 
       className="todo-input"
        type="text"
        value={addTask }
        name='text'
        onChange={handleChange}
        placeholder="Type task here..."
        ref={inputRef }
        />
        <button className="tod-button" type='submit' >Add</button>
      </form>
    </>
  )  
}

export default FormComponent;