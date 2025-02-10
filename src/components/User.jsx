/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
export default function User({user}){
  return (
    <>
       <h4>{`${user.name} - ${user.country}`}</h4>
       <p><span>Age:</span>{user.age} / <span>Job:</span>{user.job} / <span>Net Worth:</span>{user.net_worth}</p>
    </>
  )
}