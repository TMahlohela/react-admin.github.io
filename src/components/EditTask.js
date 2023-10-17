import { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { FaImages } from 'react-icons/fa'
import axios from 'axios'

const EditTask = ({ onAdd }) => {
  const [text, setText] = useState('')
    const [day , setDay] = useState('')
    const [reminder, setReminder] = useState(false)
    const [avatar, setAvatar] = useState(null)

    const handleImageChange = (e) => {
      setAvatar(e.target.files[0]);
      // console.log(e.target.files[0]);
    };

    const handleImageUpload = async () => {
      try {
        const formData = new FormData();
        formData.append('image', avatar);
     
        const response = await axios.post('http://localhost:5000/tasks', formData, {
          headers: {
           'Content-Type': 'multipart/form-data',
          },
        })
        alert("Your Image was uploaded successfully.");
        console.log('Your Image was uploaded successfully, Danko:', response.data);
        } catch (error) {
        alert("There was an Error uploading image, please try again");
        console.error('There was an Error uploading image, please try again.', error);
      }
    }

    const handleText = (e) => {
      setText(e.target.value);
    }

    const handleJob = (e) => {
      setDay(e.target.value);
    }

    const onSubmit = (e) => {
      e.preventDefault()

      if (!text) {
        alert('Please add a member')
        return
      }
      if (!day) {
        alert('Please add a job title')
        return
      }

      if (!avatar) {
        alert('Please add your avatar image')
        return
      }

      onAdd({ text, day, reminder, avatar }) //Pass in object with text, day, reminders. check to see whether values are assigned

      setText('') //call and clear Text
      setDay('') //call and clear Day
      setReminder(false) //call and set Reminder to false beacuse Boolean data type
      setAvatar('')
  }

  return (
    <form className='add-form' onSubmit={onSubmit} >
      <div className='form__upload-image'>
        {avatar && (
          <div className='upload__image'>
            <img
              alt="not found"
              width={"160px"}
              height={"160px"}
              position={"absolute"}
              src={URL.createObjectURL(avatar)}
            />
            <br />                        
            </div>
        )}
        <br />

        <span className='wrap__round'>
          <FaImages className='input__images-image'/>
        </span>
        
        <input
          className="input__image-choose"
          type="file"
          alt='image in avatar'
          display="flex"
          placeholder="Edit your Avatar"
          // value={avatar}
          name="myImage"
          accept={"image/*"}
          onChange={handleImageChange}
          style={{ cursor: "pointer" }}
        />
        <FaPlus className='input__image-plus'
          style={{ cursor: "pointer" }}
        />                
      </div>
      <div className='form-control'>
        <input 
          type='text' 
          placeholder='Edit Full Names' 
          value={text} 
          onChange={handleText}                
        />
      </div>
      <div className='form-control'>
        <input 
          type='text' 
          placeholder='Edit Job Title' 
          value={day} 
          onChange={handleJob}
        />
      </div>
          {/* <div className='form-control form-control-check'>
            <label>Set Reminder</label>
            <input type='checkbox' checked={reminder} value={reminder} 
              onChange={(e) => setReminder(e.currentTarget.checked)}/>
          </div> */}

      <input 
        type='submit' 
        value='Add Member' 
        className='btn btn-block'
        onClick={handleImageUpload}
      />
    </form>
  )
}

export default EditTask
