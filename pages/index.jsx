import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import Item from "../components/Item";
import ItemDone from "../components/ItemDone";
import HomeLayout from "../layouts/HomeLayout";

export default function Home() {
    const [listTodo, setListTodo] = useState([]);
    const [listDone, setListDone] = useState([]);
    const todoList = useSelector(state => state.todo.listTodo);
    const doneList = useSelector(state => state.done.listDone);

    useEffect(() => {
        if (listTodo) {
            setListTodo(todoList);
        }
        if (listDone) {
            setListDone(doneList);
        }
    }, [listTodo, todoList, listDone, doneList]);
    return (
        <HomeLayout>
            <div className="container">
                <h2>List todo</h2>
                {
                    listTodo.map((item, index) => {
                        return (
                            Item(item, index)
                        )
                    })
                }
            </div>
            <div className="container">
                <h2>List done</h2>
                {
                    listDone.map((item, index) => {
                        return (
                            ItemDone(item, index)
                        )
                    })
                }
            </div>
        </HomeLayout>
    )
}
