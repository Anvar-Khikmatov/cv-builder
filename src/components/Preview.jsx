import { GoContainer } from 'react-icons/go'
import '../styles/Preview.css'
import html2pdf from 'html2pdf.js'
import { FaFileDownload } from "react-icons/fa";

const formatDate = (dateStr) => {
  if (!dateStr) return ""
  if (dateStr.toLowerCase() === "present") return dateStr
  const [year, month] = dateStr.split("-")
  const date = new Date(year, month - 1)
  return date.toLocaleString("en-US", { month: "2-digit", year: "numeric" })
}

const handleDownload = () => {
  const element = document.querySelector('.preview-container')
  html2pdf()
    .set({
      margin: 0,
      filename: 'mclovin-cv.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    })
    .from(element)
    .save()
}

export default function Preview({user, work, school, skills, language}) {
  return ( 
   <div className='save-prev'>
    
    <button className='download-btn' onClick={handleDownload}> <FaFileDownload /> Download CV</button>
    <div className='preview-container'>
      <div className="preview-contact-section">
        <div className="contact-box">
          <div className="img-container">
            {user.avatar && <img className="avatar-img" src={user.avatar} />}
          </div> 
        </div>
        <div className="contact-box-below">
          <p className="contact-text">Contact</p>
          <div className="contact-divider"></div>
          <div className="contact-data-seperator">
            <p className='contact-data-label'>Address</p>
            <p className='contact-actual-data'>{user.address}</p>
          </div>
          <div className="contact-data-seperator">
            <p className='contact-data-label'>Phone</p>
            <p className='contact-actual-data'>{user.phone}</p>
          </div>  
          <div className="contact-data-seperator">
            <p className='contact-data-label'>Email</p>
            <p className='contact-actual-data'>{user.email}</p>
          </div>  
          <p className="language-text">Languages</p>
          <div className="contact-divider"></div>
            {language.map(lan => (
              <div key={lan.id} className="lang-data-seperator">
                <p className='lang-actual-data'> {lan.lang} </p>
              </div>
            ))}
         
        </div>
      </div> 

      <div className="preview-main-section">
          <div className="name-box">
            <div className="full-name">
              <h2 className="name">  {user.name} </h2>
              <h2 className="surname"> {user.surname} </h2>
            </div>
            <div className="occupation"> <p> {user.occupation} </p> </div>
            <div className="about"> <p> {user.about} </p> </div>
          </div>
          <div className="employment-section">
            <h3 className="employment-text">Employment</h3>
            <div className="employment-divider"></div>
            {work.map(entry => (
              <div className="section-preview" key={entry.id}>
                <div className="section-needle"></div>
                  <div className="section-data">
                    <div className="ocu-date">
                      <p className='preview-role'> {entry.role}</p>
                      <p className='preview-date'> {formatDate(entry.from)} - {formatDate(entry.to)}</p>
                    </div>
                    <p className='preview-company'> {entry.company}</p>
                    <p className='preview-description'> {entry.description}</p>
                </div>
              </div>
            ))}
              <div className="section-preview" key={crypto.randomUUID()}>
                <div className="section-needle"></div>
                <div className="skills-wrapper">
                  <p className='skills-text'>Skills</p>
                  {skills.map(s => (
                      <div className="preview-skills-container"> 
                          <p className='preview-category'> {s.category}</p>
                          <p className='preview-skill'> {s.skill}</p>                      
                      </div>
                  ))}
                </div>
              </div>
          </div>

          <div className="employment-section">
            <h3 className="employment-text">Education</h3>
            <div className="employment-divider"></div>
            {school.map(entry => (
              <div className="section-preview" key={entry.id}>
                <div className="section-needle"></div>
                  <div className="section-data-school">
                    <div className="ocu-date">
                      <p className='preview-role'> {entry.degree}</p>
                      <p className='preview-date'> {formatDate(entry.from)} - {formatDate(entry.to)}</p>
                    </div>
                    <p className='preview-company'> {entry.school}</p>
                    <p className='preview-description'> {entry.description}</p>
                </div>
              </div>
            ))}
          </div>  
      </div>    
    </div>  
  </div>
  )
}