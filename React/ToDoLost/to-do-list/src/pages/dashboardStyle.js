import styled from "styled-components";
export const Heder = styled.div`
    grid-row: 1;
    grid-column: 1/4;
    width: 99%;
    justify-self: center;
    display: flex;
    justify-content: space-between;
    color: #dcdcdc;
    text-align: center;
    padding: 7px;
    position: absolute;
`;
export const DashboardBtn = styled.div`
    background-color: none;
    border: none;
    color: none;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    transition-duration: 0.4s;
    cursor: pointer;
    border: none;
    border-radius: 3px;
    margin: 15px;
    &:hover {
        color: white;
    }
    @media screen and (min-width: 480px) {
        margin-right: 85px;
        margin-left: 85px;
    }
    grid-column: -2;
    @media screen and (max-width: 598px) {
        color: cornflowerblue;
    }
`;
export const DashboardContent = styled.div`
    margin: 7px;
    grid-column: -3;

    @media screen and (max-width: 598px) {
        display: none;
    }
`;

export const ToDoBox = styled.div`
    background-color: white;
    grid-column: 2;
    grid-row: 2;
    display: grid;
    grid-row-end: none;
    margin-bottom: 10px;
    border-radius: 3px;
    @media screen and (min-width: 768px) and (min-height: 1024px) {
        margin-bottom: 130px;
    }
`;

export const Right = styled.div``;
export const Left = styled.div``;

export const Title = styled.h1`
    grid-row: 1;
    font-size: 1.5em;
    text-align: center;
    align-self: center;
`;

export const AddToDoStyle = styled.form`
    display: grid;
    grid-template-rows: 50% 50%;
    border: 1px solid #dfdfdf;
    border-radius: 5px;
    margin: 15px;
`;

export const TextInput = styled.input`
    color: black;
    font-size: 1rem;
    padding: 10px;
    border: 1px solid #dfdfdf;
    border-radius: 0px 5px 5px 0px;

    &:focus {
        border-color: #0066cc;
    }

    ::placeholder {
        color: #b3b3b3;
    }
    @media screen and (max-width: 598px) {
        grid-column: 1/3;
        max-width: 100vh;
    }
`;

export const InputToDo = styled.div`
    display: grid;
    grid-template-columns: 50px auto;
    margin: 15px;
`;

export const AddBtn = styled.button`
    margin: 15px;
    background-color: cornflowerblue;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    transition-duration: 0.4s;
    cursor: pointer;
    border-radius: 3px;
    margin: 15px;
    &:hover {
        background-color: #008cba;
    }
`;

export const FilterTodos = styled.div`
    display: grid;
    grid-template-columns: 33.3% 33.3% 33.3%;
    grid-template-rows: 43px;
    margin: 10px;
`;

export const FilterBtn = styled.button`
    background-color: cornflowerblue;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    transition-duration: 0.4s;
    cursor: pointer;
    border-radius: 3px;
    margin: 5px;
    &:hover {
        background-color: #008cba;
    }
`;

export const DeleteBtnContainer = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 43px;
    margin: 10px;
`;

export const DeleteBtn = styled.button`
    background-color: #dc3445;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    transition-duration: 0.4s;
    cursor: pointer;
    border-radius: 3px;
    margin: 5px;
    &:hover {
        background-color: #e60000;
    }
`;

export const ShowTodos = styled.div`
    border-radius: 4px 4px 0px 0px;
    margin: 15px;
    display: grid;
    grid-template-columns: 68% 32%;
    border: 1px solid rgb(223, 223, 223);
`;

export const ButtonLogo = styled.button`
    background-color: white;
    border: none;
    cursor: pointer;
`;

export const LogoContainer = styled.div`
    display: grid;
    grid-template-columns: 24.6% 26.6% 20.6% 20.6%; ;
`;

export const EditLogo = styled.i`
    border: none;
    color: #fcc20c;
`;
export const DeleteLogo = styled.i`
    border: none;
    color: #dc3445;
`;

export const Todos = styled.div``;

export const ListIcon = styled.i`
    background-color: cornflowerblue;
    color: white;
    padding: 13px;
    height: fit-content;
    border-radius: 5px 0px 0px 5px;
    @media screen and (max-width: 598px) {
        display: none;
    }
`;

export const RedLogo = styled.i`
    color: #f45252;
    border: 1px solid black;
    border-radius: 100%;
`;
export const GreenLogo = styled.i`
    color: #30ca37;
    border: 1px solid black;
    border-radius: 100%;
`;
export const BlueLogo = styled.i`
    color: cornflowerblue;
    border: 1px solid black;
    border-radius: 100%;
`;
export const DefaultColorLogo = styled.i`
    color: #ffffff;
    border: 1px solid black;
    border-radius: 100%;
`;
