import styled from "styled-components";
import Router from "./Router";

const AppStyled = styled.div`
    font-family: "Cairo", sans-serif;
    @media screen and (min-width: 600px) {
        max-width: 150vh;
        height: 97vh;
        margin-right: 85px;
        margin-left: 85px;
        margin: auto;
        display: grid;
        grid-template-columns: 20% 60% 20%;
        grid-template-rows: 10% 80% 13%;
    }
`;

function App() {
    return (
        <div style={{ position: "relative" }}>
            <AppStyled>
                <Router />
            </AppStyled>
        </div>
    );
}

export default App;
