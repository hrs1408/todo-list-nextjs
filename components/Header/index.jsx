import styles from './header.module.scss'
import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addTodoItem} from "../../src/feature/todo/todoSlice";
import {confirmAlert} from 'react-confirm-alert';

const Header = () => {
    const dispatch = useDispatch();
    const [inputText, setInputText] = useState('');

    const handleInput = (e) => {
        setInputText(e.target.value);
    }

    const handleSubmit = (e) => {
        if (inputText.length !== 0) {
            e.preventDefault();
            dispatch(addTodoItem(inputText));
            setInputText('');
        } else {
            confirmAlert({
                title: 'Empty input',
                message: 'Please enter a todo item',
                buttons: [
                    {
                        label: 'OK',
                        onClick: () => {
                        }
                    }
                ]
            })
        }
    }
    return (
        <div className={styles['header']}>
            <div className={styles['header__top']}>
                <h1>Todo List</h1>
            </div>
            <div className={styles['header__bottom']}>
                <input type="text" className={styles['input__todo']} onChange={handleInput}/>
                <button className={styles['btn__add']} defaultValue={inputText} onClick={handleSubmit}>Add</button>
            </div>
        </div>
    )
}

export default Header;