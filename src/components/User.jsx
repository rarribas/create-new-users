/* eslint-disable react/prop-types */
export default function User({user}){
  return (
    <>
       <h4>{`${user.name} - ${user.country}`}</h4>
       <p><span>Age:</span>{user.age} <br></br> <span>Job:</span>{user.job} <br></br> <span>Net Worth:</span>{user.net_worth}</p>
    </>
  )
}