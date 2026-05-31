import { useState } from 'react'
import { CiCircleRemove } from "react-icons/ci";

export default function Language({lang, onUpdate, onDelete}) {
  const [saveData, setSaveData] = useState(lang)

  return (
    <div className="language-fields">
      <input 
        type="text"
        value={lang.lang}
        placeholder=''
        onChange={(e) => {
          const updated = {...saveData, lang: e.target.value}
          setSaveData(updated)
          onUpdate(lang.id, updated)
        }}
        />

        <button className="language-delete-btn" onClick={() => onDelete(lang.id)}>
          <CiCircleRemove strokeWidth="0.5" color="grey" size="1.2rem" />
        </button>
    </div>
  ) 
}