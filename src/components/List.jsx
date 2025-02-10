import styles from './List.module.scss';
import User from './User';
/* eslint-disable react/prop-types */
export default function List({listData}){
  const getListItems = () =>{
    return listData.map((listItem)=>{
      return <li key={listItem.name}>
        <User user={listItem}/>
      </li>
    })
  }

  return <ul className={styles['list']}>{getListItems()}</ul>
}