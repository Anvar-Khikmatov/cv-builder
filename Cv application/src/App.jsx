import './App.css'
import { useState } from 'react'
import General from './components/General.jsx'
import Preview from './components/Preview.jsx'

export default function App() {
  const [user, setUser] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    address: "",
    occupation: "",
    about: "",
    avatar: ""
  })

  return (
    <div className="body-wrapper">
      <div className="form-panel">
        <General user={user} setUser={setUser} />
      </div>
      <div className="preview-panel">
        <Preview user={user} />
      </div>
    </div>
  )
}