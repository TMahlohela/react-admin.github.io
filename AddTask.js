import { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { FaImages } from 'react-icons/fa'
// import { Axios } from 'axios'

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day , setDay] = useState('')
    const [reminder, setReminder] = useState(false)
    const [avatar, setAvatar] = useState('');

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert('Please add a members full name and surname')
            return
        }
        if (!day) {
            alert('Please add a job title')
            return
        }

        if (!avatar) {
            alert('Please add your avatar image')
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
                            position={"relative"}
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
                    display="flex"
                    placeholder="Upload an Avatar"
                    value={''}
                    name="myImage"
                    onChange={(e) => {
                    console.log(e.target.files[0]);
                    setAvatar(e.target.files[0]);
                    }}
                />
                <FaPlus className='input__image-plus'/>                
            </div>
            <div className='form-control'>
                <input 
                    type='text' 
                    placeholder='Full Names' 
                    value={text} 
                    minLength='5'
                    maxLength='300'
                    onChange={(e) => setText(e.target.value)}                
                />
            </div>
            <div className='form-control'>
                <input 
                    type='text' 
                    placeholder='Job Title' 
                    value={day}                     
                    minLength='3'
                    maxLength='300'
                    onChange={(e) => setDay(e.target.value)}
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
            />
        </form>
    )
}

export default AddTask