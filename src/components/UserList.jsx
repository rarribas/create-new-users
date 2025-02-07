import styles from './List.module.scss';

/* eslint-disable react/prop-types */
export default function UserList({usersData}){
  const getListOfUsers = () =>{
    return usersData.map((user)=>{
      return <li key={user.name}>
        <h4>{`${user.name} - ${user.country}`}</h4>
        <p><span>Age:</span>{user.age} / <span>Job:</span>{user.job} / <span>Net Worth:</span>{user.net_worth}</p>
      </li>
    })
  }

  return <ul className={styles['list']}>{getListOfUsers()}</ul>
}