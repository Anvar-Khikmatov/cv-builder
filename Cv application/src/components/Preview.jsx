export default function Preview({user}) {
  return (
    <>
      <p>First name {user.name}</p>
      <p>Last name {user.surname}</p>
      <p>Email {user.email}</p>
      <p>Phone number {user.phone}</p>
      <p>Address {user.address}</p>
      <p>Occupation {user.occupation}</p>
      <p>About {user.about}</p>
      <img className="avatar-img" src={user.avatar} />
    </> 
  )
}