import { useState } from "react";
import "../styles/Form.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { MdEditNote } from "react-icons/md";
import { CiCircleRemove } from "react-icons/ci";
import { BsFillMortarboardFill } from "react-icons/bs";

export default function School({ entry, onUpdate, onDelete }) {
  const [isDropDown, setDropDown] = useState(false);
  const [isFilled, setFilled] = useState(false);
  const [isEdit, setEdit] = useState(false);
  const [inputData, setInputData] = useState(entry);
  const [savedData, setSavedData] = useState(null);

  const handleSave = () => {
    setFilled(true);
    setEdit(false);
    setDropDown(false);
    setSavedData(inputData);
    onUpdate(entry.id, inputData)
  };

  const handleEdit = () => {
    setDropDown(true);
    setEdit(true);
  };

  const handleDelete = () => {
    const empty = {
      role: "",
      company: "",
      from: "",
      to: "",
      address: "",
      description: "",
    };
    setInputData(empty);
    onUpdate(entry.id, empty)
    setFilled(false);
    setDropDown(false);
    setEdit(false);
  };
  
  const formatDate = (dateStr) => {
    if (!dateStr) return ""
    if (dateStr.toLowerCase() === "present") return dateStr
    const [year, month] = dateStr.split("-")
    const date = new Date(year, month - 1)
    return date.toLocaleString("en-US", { month: "2-digit", year: "numeric" })
  }

  return (
    <div className="general-container">
      <div className="expandable-title">
        <h2>
          {" "}
          <BsFillMortarboardFill /> Education History
        </h2>
        {!isDropDown && <button
          className="delete-entry-btn"
          onClick={() => onDelete(entry.id)} >
          <CiCircleRemove 
          strokeWidth="0.5" 
          color="grey" 
          size="1.5rem"/> 
        </button>}  

        <button
          className="dropdown-btn"
          onClick={() => {
            setDropDown(!isDropDown);
            setEdit(false);
          }}
        >
          {isDropDown ? (
            <IoIosArrowUp size="1.5rem" color="black" />
          ) : (
            <IoIosArrowDown size="1.5rem" color="black" />
          )}
        </button>
      </div>

      {isDropDown && (
        <div className="general-input">
          <div className="label-seperator">
            <label htmlFor="school" className="general-input-labels">
              <h4>School</h4>
            </label>
            <input
              type="text"
              value={inputData.school}
              id="school"
              placeholder="INTI International Universtiy"
              onChange={(e) =>
                setInputData({ ...inputData, school: e.target.value })
              }
            />
          </div>

          <div className="label-seperator">
            <label htmlFor="degree" className="general-input-labels">
              <h4>Degree</h4>
            </label>
            <input
              type="degree"
              value={inputData.degree}
              id="degree"
              placeholder="Bachelor of Science (B.S.)."
              onChange={(e) =>
                setInputData({ ...inputData, degree: e.target.value })
              }
            />
          </div>

          <div className="label-seperator date">
            <label htmlFor="Date" className="general-input-labels">
              <h4>Date</h4>
            </label>
            <div className="date-label">
              <input
                type="month"
                value={inputData.from}
                id="from"
                placeholder="From"
                onChange={(e) =>
                  setInputData({ ...inputData, from: e.target.value })
                }
              />
              <input
                type="month"
                value={inputData.to}
                id="to"
                placeholder="To"
                onChange={(e) =>
                  setInputData({ ...inputData, to: e.target.value })
                }
              />
            </div>
          </div>

          <div className="label-seperator">
            <label htmlFor="address" className="general-input-labels">
              <h4>Address</h4>
            </label>
            <input
              type="text"
              value={inputData.address}
              id="address"
              placeholder="City, Province"
              onChange={(e) =>
                setInputData({ ...inputData, address: e.target.value })
              }
            />
          </div>

          <div className="label-bottom">
            <label htmlFor="description" className="general-input-labels">
              <h4>Description</h4>
            </label>
            <textarea
              value={inputData.description}
              id="description"
              placeholder="e.g Bachelor of Science in Computer Science"
              onChange={(e) =>
                setInputData({ ...inputData, description: e.target.value })
              }
            />
         
            <div className="save-btn-work">
              <button
                className="save-btn"
                disabled={!inputData.school || !inputData.degree}
                onClick={handleSave}
              >
                Save
              </button>
            </div>  
          </div>
        </div>
      )}

      {isFilled && (
        <div className="filled-on">
          <div className="secondary-inputs">
            <h4>{savedData.school}</h4>
            <p>{savedData.degree}</p>
            <p> {formatDate(savedData.from) } - {formatDate(savedData.to)}</p>
          </div>
          {!isEdit && (
            <button className="edit-btn" onClick={handleEdit}>
              <MdEditNote size="1.2rem" /> Edit
            </button>
          )}
          {isEdit && (
            <button className="delete-btn" onClick={handleDelete}>
              Delete
            </button>
          )}
        </div>
      )}
    </div> // general container
  );
}
