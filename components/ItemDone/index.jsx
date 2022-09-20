import styles from './itemDone.module.scss';
import 'react-confirm-alert/src/react-confirm-alert.css';
import {confirmAlert} from "react-confirm-alert";
import {useDispatch} from "react-redux";
import {addTodoItem} from "../../src/feature/todo/todoSlice";
import {removeDoneItem, undoDoneItem} from "../../src/feature/done/doneSlice";

const ItemDone = (props, index) => {
    const dispatch = useDispatch();

    const handleOpenUndoDoneTodo = () => {
        confirmAlert({
            title: 'Undo Done', message: 'You confirm undo it?', buttons: [{
                label: 'Yes', onClick: () => {
                    dispatch(addTodoItem(props));
                    dispatch(undoDoneItem(index));
                }
            }, {
                label: 'No', onClick: () => {
                }
            }]
        })
    }

    const handleOpenDeleteDialog = () => {
        confirmAlert({
            title: 'Confirm delete', message: 'You confirm delete it?', buttons: [{
                label: 'Yes', onClick: () => {
                    dispatch(removeDoneItem(index));
                }
            }, {
                label: 'No', onClick: () => {
                }
            }]
        })
    }

    return (<div className={styles['todo-item-done']}>
        <div className={styles['todo-item__left']}>
            <p className={styles['todo-item__text']}>{props}</p>
        </div>
        <div className={styles['todo-item__right']}>
            <button className={styles['btn__edit__done']}>Edit</button>
            <button className={styles['btn__undo__done']} onClick={handleOpenUndoDoneTodo}>Undo Done</button>
            <button className={styles['btn__done__delete']} onClick={handleOpenDeleteDialog}>Delete</button>
        </div>
    </div>)
}

export default ItemDone;