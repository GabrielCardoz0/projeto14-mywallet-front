import { Link } from "react-router-dom";
import styled from "styled-components"
import signout from "../images/logout.png"

export default function HomePage() {
    return(
        <BackgroundPurple>
            <TopBar>
                <div>Olá, Fulano</div>
                <Link to={"/"}><img src={signout} alt=""/></Link>
            </TopBar>

            <RegistrosInOut>
                {/* <span>Não há regidtros de entrada ou saída</span> */}
                <ul>
                    <li> <span> <span className="date">data</span> oi </span> <Money entrou={true} >R$34,00</Money></li>

                    <li> <span> <span className="date">data</span> oi </span> <Money entrou={false} >R$34,000</Money></li>

                    <li> <span> <span className="date">data</span> oi </span> <Money entrou={false} >R$34,000</Money></li>

                    <li> <span> <span className="date">data</span> oi </span> <Money entrou={true} >R$34,000</Money></li>

                    <li> <span> <span className="date">data</span> oi </span> <Money entrou={true} >R$34,000</Money></li>
                </ul>
            </RegistrosInOut>

            <SaldoFinal><span>Saldo</span> <span>10.000</span></SaldoFinal>

            <BottomBar>
                <Link to={"/addin"}><button>Nova Entrada</button></Link>
                <Link to={"/addout"}><button>Nova saída</button></Link>
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
    img{
        width:25px;
    }
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
    }
`;

const Money = styled.span`
    color: ${ props => props.entrou? "#0cac00":"#c70000"};
`

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
        cursor:pointer;
    }
`;