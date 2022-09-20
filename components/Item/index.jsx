import styles from './item.module.scss';
import {useDispatch} from "react-redux";
import {removeTodoItem, updateTodoItem} from "../../src/feature/todo/todoSlice";
import {addDoneItem} from "../../src/feature/done/doneSlice";
import {confirmAlert} from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css';

const Item = (props, index) => {
    const dispatch = useDispatch();

    const handleOpenMaskDoneTodo = () => {
        confirmAlert({
                title: 'Mask Done',
                message: 'You confirm done it?',
                buttons: [
                    {
                        label: 'Yes',
                        onClick: () => {
                            dispatch(addDoneItem(props));
                            dispatch(removeTodoItem(index));
                        }
                    },
                    {
                        label: 'No',
                        onClick: () => {
                        }
                    }
                ]
            }
        )
    }

    const handleOpenDeleteDialog = () => {
        confirmAlert({
                title: 'Confirm delete',
                message: 'You confirm delete it?',
                buttons: [
                    {
                        label: 'Yes',
                        onClick: () => {
                            dispatch(removeTodoItem(index))
                        }
                    },
                    {
                        label: 'No',
                        onClick: () => {
                        }
                    }
                ]
            }
        )
    }

    return (
        <div className={styles['todo-item']}>
            <div className={styles['todo-item__left']}>
                <p className={styles['todo-item__text']}>{props}</p>
            </div>
            <div className={styles['todo-item__right']}>
                <button className={styles['btn__edit']}>Edit</button>
                <button className={styles['btn__done']} onClick={handleOpenMaskDoneTodo}>Mask Done</button>
                <button className={styles['btn__delete']} onClick={handleOpenDeleteDialog}>Delete</button>
            </div>
        </div>
    )
}

export default Item;