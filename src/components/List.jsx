import styles from './List.module.scss';
import User from './User';
/* eslint-disable react/prop-types */
export default function UserList({usersData}){
  const getListOfUsers = () =>{
    return usersData.map((user)=>{
      return <li key={user.name}>
        <User user={user}/>
      </li>
    })
  }

  return <ul className={styles['list']}>{getListOfUsers()}</ul>
}