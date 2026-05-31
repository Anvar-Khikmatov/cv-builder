import { useState } from 'react'
import { CiCircleRemove } from "react-icons/ci";
// import { MdUpdateDisabled } from 'react-icons/md';


export default function Skills({skill, onUpdate, onDelete}) {
  const [saveData, setSaveData] = useState(skill)


  return (
    <div className="skill-fields">
      <button 
        className="delete-entry-btn"
        onClick={() => onDelete(skill.id)} >
        <CiCircleRemove 
        strokeWidth="0.5" 
        color="grey" 
        size="1.5rem"/> 
      </button>
      <input 
        type="text"
        value={skill.category}
        placeholder='e.g Programming Languages'
        onChange={(e) => {
          const updated = {...saveData, category: e.target.value}
          setSaveData(updated)
          onUpdate(skill.id, updated)
        }}
        />

        <input 
        type="text"
        value={skill.skill}
        placeholder='e.g JavaScript, Python, SQL'
        onChange={(e) => {
          const updated = {...saveData, skill: e.target.value}
          setSaveData(updated)
          onUpdate(skill.id, updated)
        }}
        />
    </div>
  )
}