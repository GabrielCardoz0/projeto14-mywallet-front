import { Link } from "react-router-dom";
import styled from "styled-components"

export default function SaidaValor(params) {
    return(
        <BackgroundPurple>
            <span>Nova saída</span>
            <input type="number" placeholder="Valor"></input>
            <input placeholder="Descrição"></input>
            <button>Salvar saída</button>
            <Link to={"/home"}><p>Cancelar</p></Link>
        </BackgroundPurple>
    )
};

const BackgroundPurple = styled.div`
    background-color:#bc11be;
    align-items:center;
    display:flex;
    flex-direction:column;
    width:100vw;
    height:100vh;
    padding:25px;
    box-sizing:border-box;
    
    span{
        margin-bottom:40px;
        color: #fff;
        font-size:26px;
        font-weight:700;
    }

    input{
        margin-bottom:13px;
        background-color:#fff;
        border-radius:5px;
        width:326px;
        height:58px;
        box-sizing:border-box;
        padding:15px;
        border:none;
        font-size:20px;
        font-weight:400;
        box-shadow:0px 0px 3px #333;
    }

    button{
        background-color:#a328d6;
        color: #fff;
        font-size:20px;
        font-weight:700;
        width:326px;
        height:46px;
        border:none;
        border-radius:5px;
        box-shadow:0px 0px 3px #333;
        cursor:pointer;
    }
    p{
        color:#fff;
        font-size:16px;
        font-weight:400;
        margin-top:20px;
    }
    `;
