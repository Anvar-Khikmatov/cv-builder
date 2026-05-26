// import { useState } from 'react'
// import '../styles/Form.css'
// import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";


// export default function Work() {

//   return (
//     <div className="work-container">
//       <div className="expandable-title">
//         <h2>Professional Experience</h2>
//         <button className='dropdown-btn' onClick={() => setDropDown(!isDropDown)}> 
//           {isDropDown ? <IoIosArrowUp size="1.5rem" color="black" /> : <IoIosArrowDown size="1.5rem" color="black" />} 
//         </button>
//       </div>

//       {isDropDown && <div className="general-input"> 

//         <label htmlFor='name' className="general-input-labels" > <h4>First Name</h4> </label>
//         <input 
//           type="text"
//           value={inputData.name}
//           id='name' 
//           required
//           onChange={(e) => setInputData({...inputData, name: e.target.value})}
//         />

//         <label htmlFor='surname' className="general-input-labels" > <h4>Last Name</h4> </label>
//         <input 
//           type="text"
//           value={inputData.surname}
//           id='name' 
//           onChange={(e) => setInputData({...inputData, surname: e.target.value})}
//         />

//         <label htmlFor='email' className="general-input-labels"> <h4>Email</h4> </label>
//         <input 
//           type="text"
//           value={inputData.email}
//           id='email' 
//           onChange={(e) => setInputData({...inputData, email: e.target.value})} 
//         /> 

//         <label htmlFor='phoneNumber' className="general-input-labels"> <h4>Phone Number</h4> </label>
//         <input
//           type="number" 
//           value={inputData.phone} 
//           id='phoneNumber' 
//           onChange={(e) => setInputData({...inputData, phone: e.target.value})}
//         />

//         <label htmlFor='address' className="general-input-labels"> <h4>Address</h4> </label>
//         <input 
//           type="text" 
//           value={inputData.address} 
//           id='address' 
//           onChange={(e) => setInputData({...inputData, address: e.target.value})} 
//         />

//         <label htmlFor='occupation' className="general-input-labels" > <h4>Occupation</h4> </label>
//         <input 
//           type="text"
//           value={inputData.occupation}
//           id='occupation' 
//           onChange={(e) => setInputData({...inputData, occupation: e.target.value})}
//         />

//         <label htmlFor='about' className="general-input-labels" > <h4>About</h4> </label>
//         <textarea 
//           type="text"
//           value={inputData.about}
//           id='about' 
//           onChange={(e) => setInputData({...inputData, about: e.target.value})}
//         />

//         <label htmlFor='avatar' className="general-input-labels" > <h4>Profile picture</h4> </label>
//         <input 
//           type="file"
//           value={inputData.about}
//           id='avatar' 
//           accept="image/*" 
//           onChange={handleImageUpload} 
//         />

//         <button 
//           className='save-btn' 
//           disabled={!inputData.name || !inputData.surname || inputData.email || inputData.phone} 
//           onClick={handleSave}> 
//           Save  
//         </button> 

//       </div> }

//       {(isFilled) && <div className="filled-on">
//         <div className="secondary-inputs">
//           <p> {savedData.name} </p>
//           <p> {savedData.email} </p>
//           <p> {savedData.phone} </p>
//           <p> {savedData.address} </p>
//         </div>
//         <button className='edit-btn' onClick={handleEdit}  > Edit </button>
//         {isEdit && <button onClick={handleDelete} >Delete</button>}
//       </div> }    

//     </div>
//   )


// }