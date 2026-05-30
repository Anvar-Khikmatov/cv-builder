import { useState } from "react";
import "../styles/Form.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { MdEditNote } from "react-icons/md";
import { CiCircleRemove } from "react-icons/ci";
import { MdWork } from "react-icons/md";

export default function Work({ entry, onUpdate, onDelete }) {
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
    return date.toLocaleString("en-US", { month: "long", year: "numeric" })
  }

  return (
    <div className="general-container">
      <div className="expandable-title">
        <h2>
          {" "}
          <MdWork /> Employment History
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
            <label htmlFor="role" className="general-input-labels">
              <h4>Job Title</h4>
            </label>
            <input
              type="text"
              value={inputData.role}
              id="role"
              placeholder="Project manager"
              onChange={(e) =>
                setInputData({ ...inputData, role: e.target.value })
              }
            />
          </div>

          <div className="label-seperator">
            <label htmlFor="company" className="general-input-labels">
              <h4>Company Name</h4>
            </label>
            <input
              type="text"
              value={inputData.company}
              id="company"
              placeholder="IT soft Inc."
              onChange={(e) =>
                setInputData({ ...inputData, company: e.target.value })
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
              placeholder="e.g Designed and developed responsive websites..."
              onChange={(e) =>
                setInputData({ ...inputData, description: e.target.value })
              }
            />
         
            <div className="save-btn-work">
              <button
                className="save-btn"
                // disabled={!inputData.name || !inputData.surname}
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
            <h4>{savedData.role}</h4>
            <p>{savedData.company}</p>
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
