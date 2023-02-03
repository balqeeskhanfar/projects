import React, { useState } from "react";
import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";
import {
    AddToDoStyle,
    InputToDo,
    TextInput,
    AddBtn,
    ListIcon,
} from "./pages/dashboardStyle";
import { sendMessageToTelegram } from "./sendMsgToTelegram";

function AddToDo({ user }) {
    const [todoName, setTodoName] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (todoName !== "") {
            await addDoc(collection(db, "todos"), {
                todoName,
                completed: false,
                uid: user?.uid,
                color: "styleDefult",
            });

            sendMessageToTelegram(`you add '${todoName}' to your todoList`);

            setTodoName("");
        }
    };
    return (
        <AddToDoStyle onSubmit={handleSubmit}>
            <InputToDo>
                <ListIcon className="fa-sharp fa-solid fa-book"></ListIcon>
                <TextInput
                    type="text"
                    placeholder="New Todo"
                    value={todoName}
                    onChange={(e) => setTodoName(e.target.value)}
                ></TextInput>
            </InputToDo>
            <AddBtn>Add new task</AddBtn>
        </AddToDoStyle>
    );
}

export default AddToDo;
