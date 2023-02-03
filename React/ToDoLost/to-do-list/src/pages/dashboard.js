import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import {
    Heder,
    DashboardBtn,
    DashboardContent,
    ToDoBox,
    Title,
    FilterTodos,
    FilterBtn,
    DeleteBtnContainer,
    DeleteBtn,
    Left,
    Right,
    Todos,
} from "./dashboardStyle.js";
import { auth, db, logout } from "./../firebase";
import {
    query,
    collection,
    onSnapshot,
    getDocs,
    doc,
    updateDoc,
    deleteDoc,
    where,
    WriteBatch,
    writeBatch,
} from "firebase/firestore";
import Todo from "../Todo";
import AddToDo from "../AddTodo.js";
import Preloader from "./../PreLoader";
import logo from "../images/to_do_list_logo.png";
import { sendMessageToTelegram } from "../sendMsgToTelegram";

function Dashboard() {
    const [user, loading] = useAuthState(auth);
    const [name, setName] = useState("");
    const [todos, setTodos] = useState([]);
    const [filterName, setFilterName] = useState("All");

    const navigate = useNavigate();
    useEffect(() => {
        if (loading) return;

        if (!user) return navigate("/");
        const fetchUserName = async () => {
            try {
                const userQuery = query(
                    collection(db, "users"),
                    where("uid", "==", user?.uid)
                );
                const todosQuery = query(
                    collection(db, "todos"),
                    where("uid", "==", user?.uid)
                );

                const doc = await getDocs(userQuery);
                const data = doc.docs[0].data();

                setName(data.name);
                const unsub = onSnapshot(todosQuery, (QuerySnapshot) => {
                    let todosArray = [];
                    QuerySnapshot.forEach((doc) => {
                        todosArray.push({
                            ...doc.data(),
                            id: doc.id,
                            uid: user?.uid,
                        });
                    });
                    setTodos(todosArray);
                });
                return () => unsub();
            } catch (err) {
                console.error(err);
                alert("An error occured while fetching user data");
            }
        };
        fetchUserName();
    }, [user, loading]);

    const handleFocus = (inputFiled) => {
        inputFiled.focus();
    };

    const handleEdit = async (todo, todoName) => {
        if (todo.todoName !== todoName)
            await updateDoc(doc(db, "todos", todo.id), { todoName: todoName });

        sendMessageToTelegram(
            `you edit '${todo.todoName}' to '${todoName}' from your todoList`
        );
    };

    const toggleComplete = async (todo) => {
        await updateDoc(doc(db, "todos", todo.id), {
            completed: !todo.completed,
        });
    };
    const handleDelete = async (id, deletedTodoName) => {
        await deleteDoc(doc(db, "todos", id));
        sendMessageToTelegram(
            `you delete '${deletedTodoName}' from your todoList`
        );
    };

    const updateColor = async (todo, todoColor) => {
        if (todo.color !== todoColor)
            await updateDoc(doc(db, "todos", todo.id), { color: todoColor });
    };

    let filteredArray = [];
    if (filterName === "Todo") {
        filteredArray = todos.filter((todo) => todo.completed === false);
    } else if (filterName === "Done") {
        filteredArray = todos.filter((todo) => todo.completed === true);
    } else {
        filteredArray = todos;
    }

    const deleteDone = async () => {
        const batch = writeBatch(db);

        let notColmpleted = todos.filter((todo) => todo.completed === false);
        todos
            .filter((todo) => todo.completed === true)
            .map((todo) => batch.delete(doc(db, "todos", todo.id)));

        await batch.commit();
        sendMessageToTelegram("you delete done todos from your todoList");
        setTodos(notColmpleted);
    };

    const deleteAll = async () => {
        const batch = writeBatch(db);

        todos.map((todo) => batch.delete(doc(db, "todos", todo.id)));

        await batch.commit();

        sendMessageToTelegram("you delete all todos from your todoList");
        setTodos([]);
    };

    return (
        <>
            {!name && <Preloader />}

            <Heder>
                <DashboardContent>
                    Welcome <span style={{ fontWeight: "bold" }}>{name}</span>
                </DashboardContent>
                <img
                    src={logo}
                    alt="logo"
                    style={{ height: "77px", display: "none" }}
                />
                <DashboardBtn onClick={logout}>Logout</DashboardBtn>
            </Heder>

            <ToDoBox>
                <Left>
                    <Title>add new todo</Title>
                    <AddToDo user={user} />
                </Left>

                <Right>
                    <Title>TodoList</Title>
                    <FilterTodos>
                        <FilterBtn onClick={() => setFilterName("All")}>
                            All
                        </FilterBtn>
                        <FilterBtn onClick={() => setFilterName("Done")}>
                            Done
                        </FilterBtn>
                        <FilterBtn onClick={() => setFilterName("Todo")}>
                            Todo
                        </FilterBtn>
                    </FilterTodos>
                    <Todos>
                        {filteredArray &&
                            filteredArray.map((todo) => (
                                <Todo
                                    key={todo.id}
                                    todo={todo}
                                    toggleComplete={toggleComplete}
                                    handleDelete={handleDelete}
                                    handleEdit={handleEdit}
                                    handleFocus={handleFocus}
                                    updateColor={updateColor}
                                />
                            ))}
                    </Todos>
                    <DeleteBtnContainer>
                        <DeleteBtn onClick={() => deleteDone()}>
                            Delete done tasks
                        </DeleteBtn>
                        <DeleteBtn onClick={() => deleteAll()}>
                            Delete All tasks
                        </DeleteBtn>
                    </DeleteBtnContainer>
                </Right>
            </ToDoBox>
        </>
    );
}
export default Dashboard;
