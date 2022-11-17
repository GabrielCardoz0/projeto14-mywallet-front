import styled from "styled-components"

export default function HomePage() {
    return(
        <BackgroundPurple>
            <TopBar>
                <div>Olá, Fulano</div>
                <div>Exit</div>
            </TopBar>

            <RegistrosInOut>
                {/* <span>Não há regidtros de entrada ou saída</span> */}
                {/* <div className="listaValores"> */}
                <ul>
                    <li> <span> <span className="date">data</span> oi oi </span> <span className="money">R$34,000</span></li>

                    <li> <span> <span className="date">data</span> oi </span> <span className="money">R$34,000</span></li>

                    <li> <span> <span className="date">data</span> oi </span> <span className="money">R$34,000</span></li>

                    <li> <span> <span className="date">data</span> oi </span> <span className="money">R$34,000</span></li>

                    <li> <span> <span className="date">data</span> oi </span> <span className="money">R$34,000</span></li>

                    <li> <span> <span className="date">data</span> oi </span> <span className="money">R$34,000</span></li>

                    <li> <span> <span className="date">data</span> oi </span> <span className="money">R$34,000</span></li>

                    <li> <span> <span className="date">data</span> oi </span> <span className="money">R$34,000</span></li>

                    <li> <span> <span className="date">data</span> oi </span> <span className="money">R$34,000</span></li>

                    <li> <span> <span className="date">data</span> oi </span> <span className="money">R$34,000</span></li>

                    <li> <span> <span className="date">data</span> oi </span> <span className="money">R$34,000</span></li>

                    <li> <span> <span className="date">data</span> oi </span> <span className="money">R$34,000</span></li>

                    <li> <span> <span className="date">data</span> oi </span> <span className="money">R$34,000</span></li>

                    <li> <span> <span className="date">data</span> oi </span> <span className="money">R$34,000</span></li>

                    <li> <span> <span className="date">data</span> oi </span> <span className="money">R$34,000</span></li>
                </ul>
                {/* </div> */}
            </RegistrosInOut>

            <SaldoFinal><span>Saldo</span> <span>100000</span></SaldoFinal>

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
    border-radius:5px 5px 0 0;
    display:flex;
    align-items:center;
    flex-direction:column;
    box-shadow:0px 0px 3px #c6c6c6;
    font-size:16px;
    font-weight:400;
    padding:12px;
    overflow:scroll;
    ::-webkit-scrollbar{
        display:none;
    }
    ul{
        width:100%;
    }
    li{
        display:flex;
        justify-content:space-between;
        width:100%;
        margin-top:23px;
        font-size:16px;
        font-weight:400;

        .date{
            color:#c6c6c6;
        }

        .money{
        color:#c70000;
        /* color:#03ac00; */
        }
        
    }
`;

 const SaldoFinal = styled.div`
    display:flex;
    justify-content:space-between;
    width:326px;
    background-color:#FFF;
    margin-bottom:25px;
    padding:12px;
    box-sizing:border-box;
    border-radius: 0 0 5px 5px;
        box-shadow:0px 0px 5px #c6c6c6;
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
        box-shadow:0px 0px 3px #c6c6c6;
        border-radius:5px;
        color: #fff;
        font-size:16px;
        font-weight:700;
    }
`;