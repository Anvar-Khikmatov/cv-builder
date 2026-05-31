import { useState } from 'react'
import '../styles/Form.css'
import '../App.css'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { MdEditNote } from "react-icons/md";

export default function General({user, setUser}) {
  const [isDropDown, setDropDown] = useState(false)
  const [isFilled, setFilled] = useState(false)
  const [isEdit, setEdit] = useState(false)
  const [inputData, setInputData] = useState(user)
  const [savedData, setSavedData] = useState(null)
  
  const handleSave = () => {
    setFilled(true)
    setEdit(false)
    setDropDown(false)
    setSavedData(inputData)
    setUser(inputData)
  }

  const handleEdit = () => {
    setDropDown(true)
    setEdit(true)
  } 

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    const url = URL.createObjectURL(file)
    setInputData({...inputData, avatar: url})
  }

  const handleDelete = () => {
    const empty = {
      name: "", surname: "", email: "", phone: "",
      address: "", occupation: "", about: "", avatar: ""
    }
    setInputData(empty)
    setUser(empty)
    setFilled(false)
    setDropDown(false)
    setEdit(false)
  } 

  return (
    <div className="general-container">
      <div className="expandable-title">
        <h2> <FaUser /> General Information</h2>
        <button className='dropdown-btn' onClick={() => {setDropDown(!isDropDown); setEdit(false)}}> 
          {isDropDown ? <IoIosArrowUp size="1.5rem" color="black" /> : <IoIosArrowDown size="1.5rem" color="black" />} 
        </button>
      </div>

      {isDropDown && <div className="general-input">
        <div className="label-seperator">
          <label htmlFor='name' className="general-input-labels"><h4>First Name</h4></label>
          <input type="text" value={inputData.name} id='name' required placeholder='John'
            onChange={(e) => setInputData({...inputData, name: e.target.value})} />
        </div>   

        <div className="label-seperator">
          <label htmlFor='surname' className="general-input-labels"><h4>Last Name</h4></label>
          <input type="text" value={inputData.surname} id='surname' placeholder='Doe'
            onChange={(e) => setInputData({...inputData, surname: e.target.value})} />
        </div>  

        <div className="label-seperator">
          <label htmlFor='email' className="general-input-labels"><h4>Email</h4></label>
          <input type="text" value={inputData.email} id='email' placeholder='jonathan.doe@email.com'
            onChange={(e) => setInputData({...inputData, email: e.target.value})} />
        </div> 

        <div className="label-seperator">
          <label htmlFor='phoneNumber' className="general-input-labels"><h4>Phone Number</h4></label>
          <input type="text" value={inputData.phone} id='phoneNumber' placeholder='(555) 555-5555'
            onChange={(e) => setInputData({...inputData, phone: e.target.value})} />
        </div> 

        <div className="label-seperator">
          <label htmlFor='address' className="general-input-labels"><h4>Address</h4></label>
          <input type="text" value={inputData.address} id='address' placeholder='City, Province'
            onChange={(e) => setInputData({...inputData, address: e.target.value})} />
        </div>

        <div className="label-seperator">
          <label htmlFor='occupation' className="general-input-labels"><h4>Occupation</h4></label>
          <input type="text" value={inputData.occupation} id='occupation' placeholder='Web Developer'
            onChange={(e) => setInputData({...inputData, occupation: e.target.value})} />
        </div>

        <div className="label-bottom">
            <label htmlFor='about' className="general-input-labels"><h4>About</h4></label>
            <textarea className='textarea' value={inputData.about} id='about' placeholder='e.g. Passionate developer with 3 years of experience in frontend development'
              onChange={(e) => setInputData({...inputData, about: e.target.value})} />
          
          <label  className="general-input-labels "><h4>Profile picture</h4></label>
          <div className="form-btns">
            <label htmlFor="avatar" className='img-upload-label'>Choose file</label>
            <input type="file" className='img-upload' id='avatar' accept="image/*" onChange={handleImageUpload} />

            <button className='save-btn'
              disabled={!inputData.name || !inputData.surname || !inputData.email || !inputData.phone}
              onClick={handleSave}>
              Save
            </button>
          </div>
        </div> 
      </div>}

        {isFilled && <div className="filled-on">
          <div className="secondary-inputs">
            <h4>{savedData.name}</h4>
            <p>{savedData.email}</p>
            <p>{savedData.phone}</p>
            <p>{savedData.address}</p>
          </div>
          {!isEdit && <button className='edit-btn' onClick={handleEdit}><MdEditNote size="1.2rem" /> Edit</button> }
          {isEdit && <button className='delete-btn' onClick={handleDelete}>Delete</button>}
        </div>}

    </div> 
  )
}