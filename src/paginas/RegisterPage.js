import { Link } from "react-router-dom";
import styled from "styled-components"

export default function RegisterPage(params) {
    return(
        <BackgroundPurple>
            <div className="logoWallet">MyWallet</div>
            <input placeholder="Nome"></input>
            <input type="email" placeholder="E-mail"></input>
            <input type="password" placeholder="Senha"></input>
            <input type="password" placeholder="Confirmar senha"></input>
            <button>Cadastrar</button>
            <Link to={"/"}><span>Já tem uma conta? Faça login!</span></Link>
            
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

    .logoWallet{
        margin-bottom:30px;
        font-size:32px;
        color: #fff;
        font-weight:400;
        cursor:pointer;
    }

    input{
        margin-bottom:15px;
        border-radius:5px;
        background-color:#FFF;
        box-sizing:border-box;
        padding:12px;
        font-size:20px;
        font-weight:400;
        border:none;
        width:326px;
        height:58px;
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
        margin-bottom:25px;
    }
    
    span{
        color: #fff;
        font-size:15px;
        font-weight:700;
        cursor:pointer;
    };
`;
