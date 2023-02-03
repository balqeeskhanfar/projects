import React, { useState, useRef } from "react";
import {
    ShowTodos,
    ButtonLogo,
    LogoContainer,
    EditLogo,
    DeleteLogo,
    RedLogo,
    GreenLogo,
    BlueLogo,
    DefaultColorLogo,
} from "./pages/dashboardStyle";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import "./index.css";

function Todo({
    todo,
    toggleComplete,
    handleDelete,
    handleEdit,
    handleFocus,
    updateColor,
}) {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClose = (logoColorSelected) => {
        setAnchorEl(null);
        updateColor(todo, logoColorSelected);
    };
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    function Colored(props) {
        if (props.logoColorSelected === "styleRed") {
            return <RedLogo className="fa-sharp fa-solid fa-circle" />;
        } else if (props.logoColorSelected === "styleGreen") {
            return <GreenLogo className="fa-sharp fa-solid fa-circle" />;
        } else if (props.logoColorSelected === "styleBlue") {
            return <BlueLogo className="fa-sharp fa-solid fa-circle" />;
        } else {
            return <DefaultColorLogo className="fa-sharp fa-solid fa-circle" />;
        }
    }

    const inputRef = useRef(todo.todoName);

    return (
        <ShowTodos>
            <input
                style={{
                    padding: "10px",
                    border: "none",
                    textDecoration: todo.completed && "line-through",
                    color: todo.completed === true ? "red" : "black",
                }}
                type="text"
                defaultValue={inputRef.current}
                onBlur={() => handleEdit(todo, inputRef.current.value)}
                ref={inputRef}
                className={todo.color}
            ></input>
            <LogoContainer>
                <ButtonLogo
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                >
                    <Colored logoColorSelected={todo.color} />
                </ButtonLogo>

                <Menu
                    keepMounted
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    open={Boolean(anchorEl)}
                >
                    <MenuItem onClick={() => handleClose("styleDefult")}>
                        <DefaultColorLogo className="fa-sharp fa-solid fa-circle" />
                    </MenuItem>
                    <MenuItem onClick={() => handleClose("styleRed")}>
                        <RedLogo className="fa-sharp fa-solid fa-circle" />
                    </MenuItem>
                    <MenuItem onClick={() => handleClose("styleGreen")}>
                        <GreenLogo className="fa-sharp fa-solid fa-circle" />
                    </MenuItem>
                    <MenuItem onClick={() => handleClose("styleBlue")}>
                        <BlueLogo className="fa-sharp fa-solid fa-circle" />{" "}
                    </MenuItem>
                </Menu>

                <input
                    type={"checkbox"}
                    defaultChecked={todo.completed === true ? true : false}
                    onClick={() => toggleComplete(todo)}
                    style={{ margin: "8px" }}
                />
                <ButtonLogo onClick={() => handleFocus(inputRef.current)}>
                    <EditLogo className="fa-solid fa-pen" />
                </ButtonLogo>
                <ButtonLogo
                    onClick={() => handleDelete(todo.id, todo.todoName)}
                >
                    <DeleteLogo className="fa-solid fa-trash" />
                </ButtonLogo>
            </LogoContainer>
        </ShowTodos>
    );
}

export default Todo;
