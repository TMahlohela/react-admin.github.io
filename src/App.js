// import React from 'react'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import EditTask from './components/EditTask'
import { FaArrowLeft } from 'react-icons/fa'

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])

  //fetch Members from local json server
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    return data
  }

  // Fetch Task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()

    // console.log(data)
    return data
  }

  //Add image to json
  // const addAvatar = async (task) => {
  //   const res = await fetch('http://localhost:5000/tasks/', 
  //   {
  //     method: 'POST', //POST data to above endpoint/web address/API
  //     headers: {
  //       'Content-type': 'application/json'
  //     },
  //     body: JSON.stringify(task)
  //   })
  //   const data = await res.json() //promise await to persist

  //   setTasks([...tasks, data])
  // }

  //Add a Member
  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks/', 
    {
      method: 'POST', //POST data to above endpoint/web address/API
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })
    const data = await res.json() //promise await to persist

    setTasks([...tasks, data])

    // console.log(task)
    //   const id = Math.floor(Math.random() * 10000) + 1
    //   const newTask = { id, ...task }
    //   setTasks([...tasks, newTask])
    // 
  }

  //Delete a member
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, 
    {
      method: 'DELETE',
    })
    setTasks(tasks.filter((task) => task.id !== id))//NB high order array methods ".filter" 
  }

  //Edit a member
  const editTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, 
    {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
    })
    setTasks(tasks.filter((task) => task.id !== id))//NB high order array methods ".filter" 
  }

  //Toggle reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updatedTask = {...taskToToggle, reminder: !taskToToggle.reminder }
      
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'        
      },
      body: JSON.stringify(updatedTask)
    })

    const data = await res.json()

    setTasks(
      tasks.map((task) => 
      task.id === id ? { ...task, reminder: !data.reminder } : task
      )
    )
  }

  //Display when there are no members
  return (
    <div className='container'>
      <FaArrowLeft 
        icon="fa-solid fa-long-arrow-left" 
        size="20px" 
        style={{ cursor: "pointer", marginTop: "4em"}} 
        showAdd={showAddTask && <AddTask onAdd={addTask} />}
      />

      <Header 
        onAdd={() => setShowAddTask(!showAddTask)}
      />
      {/* shorthand... ternery w/o else */}
      {showAddTask && <AddTask onAdd={addTask} />}
      
      {
        tasks.length > 0 ? 
          (<Tasks tasks={tasks} 
          onDelete = {deleteTask} 
          onEdit = {EditTask} 
          onToggle={toggleReminder} 
        />) : 
        ( 'No Members to show' )
      }
    </div>
  );
}

// class App extends React.Component {
//     render() {
//       return <h1>An efficient way to CRUD —&nbsp;&reg;ReactAdmin</h1>
//   }
// }

export default App;
