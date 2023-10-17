import Task from './Task'

const Tasks = ({ avatar, tasks, onEdit, onDelete, onToggle }) => {
return (
    <>
      {tasks.map((task, index) => (
        <Task
          avatar = {avatar}
          key = {index}
          task = {task}
          onDelete = {onDelete}
          onEdit = {onEdit}
          onToggle = {onToggle}
        />
      ))}
    </>
  )
}

export default Tasks
