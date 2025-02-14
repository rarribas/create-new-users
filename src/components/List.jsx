import styles from './List.module.scss';
import User from './User';
import Button from './Button';
/* eslint-disable react/prop-types */
export default function List({listData, setUsersData}){
  
  const deleteListItem = (listItem) => {
    const newItems = listData.filter((item) => item.id !== listItem.id)
    setUsersData(newItems);
  }

  const getListItems = () =>{
    return listData.map((listItem)=>{
      return <li key={listItem.id}>
        <User user={listItem}/>
        <Button
          text={`Delete User`}
          variant='danger'
          type="button"
          onButtonClick={() => deleteListItem(listItem)}
        />
      </li>
    })
  }

  return <ul className={styles['list']}>{getListItems()}</ul>
}