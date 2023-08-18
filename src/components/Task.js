import { FaTrash } from 'react-icons/fa'
import { FaPen } from 'react-icons/fa'

const Task = ({ avatar, task, onDelete, onToggle }) => {
  return (
    <div 
      className={`task ${task.reminder ? 'reminder' : ''}`} 
      onDoubleClick={() => onToggle(task.id)}
    >
      <img
        className='avatarDisplay'
      >
        {avatar}
      </img>
      <h3>
        {task.text}{' '}
        <span className='svg_icons'>
          <FaPen
            style={{ color: '#43464B', cursor: 'pointer' }}
            className='svg_Edit'
            // onClick={() => onEdit(task.id)}
          />
          <FaTrash
            style={{ color: '#43464B', cursor: 'pointer' }}
            onClick={() => onDelete(task.id)}
            className='svg_Delete'
          />
        </span>
      </h3>      
      <p>{task.day}</p>
    </div>
  )
}

export default Task
