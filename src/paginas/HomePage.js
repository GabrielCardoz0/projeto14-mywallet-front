import styled from "styled-components"

export default function HomePage() {
    return(
        <BackgroundPurple>
            <TopBar>
                <div>Olá, Fulano</div>
                <div>Exit</div>
            </TopBar>

            <RegistrosInOut>
                <span>Não há regidtros de entrada ou saída</span>
            </RegistrosInOut>

            <BottomBar>
                <button className="butonIn">Nova Entrada</button>
                <button className="buttonOut">Nova saída</button>
            </BottomBar>
        </BackgroundPurple>
    )
};

const BackgroundPurple = styled.div`
    background-color:#bc11be;
    align-items:center;
    justify-content:center;
    display:flex;
    flex-direction:column;
    width:100vw;
    height:100vh;
    padding:15px;
    box-sizing:border-box;
`;

const TopBar = styled.div`
    font-size:26px;
    font-weight:700;
    display:flex;
    justify-content:space-between;
    width:326px;
    color: #fff;
    margin-bottom:25px;
`;

const RegistrosInOut = styled.div`
    width:326px;
    height:90%;
    background-color:#FFF;
    border-radius:5px;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-bottom:25px;
    box-shadow:0px 0px 3px #333;
`;

const BottomBar = styled.div`
    display:flex;
    justify-content:space-between;
    width:326px;
    border-radius:5px;
    button{
        width:155px;
        height:114px;
        background-color:#a328d6;
        border:none;
        box-shadow:0px 0px 3px #333;
    }
`;