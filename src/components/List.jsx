import styles from './List.module.scss';
import User from './User';
import Button from './Button';
/* eslint-disable react/prop-types */
export default function List({listData, setUsersData}){
  const deleteListItem = (listItem) => {
    console.log("Remove", listItem, listData);
    const newItems = listData.filter((item) => item.id !== listItem.id)

    setUsersData(newItems);
  }

  const getListItems = () =>{
    return listData.map((listItem)=>{
      return <li key={listItem.id}>
        <User user={listItem}/>
          <Button
            text={`Delete ${listItem.name}`}
            variant='danger'
            type="button"
            // disabled={isSaving}
            onButtonClick={() => deleteListItem(listItem)}
          />
      </li>
    })
  }

  return <ul className={styles['list']}>{getListItems()}</ul>
}