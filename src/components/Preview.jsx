export default function Preview({user, work, school, skills}) {
  return (
    <>
     
      <p>First name {user.name}</p>
      <p>Last name {user.surname}</p>
      <p>Email {user.email}</p>
      <p>Phone number {user.phone}</p>
      <p>Address {user.address}</p>
      <p>Occupation {user.occupation}</p>
      <p>About {user.about}</p>
      {user.avatar && <img className="avatar-img" src={user.avatar} />}
      
      {work.map(entry => {
        return <div className="section-preview" key={entry.id}>
          <div className="section-needle"></div>
          <div className="section-data">
            <p> {entry.role}</p>
            <p> {entry.company}</p>
            <p> {entry.from}</p>
            <p> {entry.to}</p>
            <p> {entry.address}</p>
            <p> {entry.description}</p>
          </div>
        </div>
      })}

     
      {school.map(entry => (
        <div className="section-preview" key={entry.id}>
          <div className="section-needle"></div>
          <div className="section-data">
            <p> {entry.school}</p>
            <p> {entry.degeree}</p>
            <p> {entry.from}</p>
            <p> {entry.to}</p>
            <p> {entry.address}</p>
            <p> {entry.description}</p>
          </div>
        </div>
      ))}

     
      {skills.map(s => (
        <div className="lalu" key={s.id}>
          <div className="duda"></div>
          <div className="tra">
            <p> {s.category}</p>
            <p> {s.skill}</p>
          </div>
        </div>
      ))}

      

    </> 
  )
}