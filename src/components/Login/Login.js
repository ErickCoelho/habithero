import { Link, useNavigate } from "react-router-dom";
import logoImage from "../../assets/logo.png";
import styled from 'styled-components';
import { useState, useContext } from "react";
import axios from "axios";
import TokenContext from '../../context/TokenContext';
import UserContext from '../../context/UserContext';

export default function Login() {
    const [loginInfo, setLoginInfo] = useState({});
    const { setToken } = useContext(TokenContext);
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();

    function loginUser(event) {
        event.preventDefault();

        axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", loginInfo)
            .then(response => {
                setUser(response.data);
                localStorage.setItem('user', response.data);
                setToken(response.data.token);
                localStorage.setItem('token', response.data.token);
                navigate('/hoje');
            })
            .catch(error => {
                alert("Insira as informações corretas!")
            }
        );
    }

    return (
        <LoginBody>
            <Logo><img src={logoImage} alt="logo" /></Logo>
            <form onSubmit={loginUser}>
                <input type="email" placeholder="email" autoComplete="on" onChange={(e) => setLoginInfo({ ...loginInfo, email: e.target.value })}></input>
                <input type="password" placeholder="senha" autoComplete="on" onChange={(e) => setLoginInfo({ ...loginInfo, password: e.target.value })}></input>
                <button type="submit">Entrar</button>
                <Link to="/cadastro" className="signupLink">Não tem uma conta? Cadastre-se!</Link>
            </form>

        </LoginBody>
    );
}

const Logo = styled.div`
    width: 180px;
    margin: 80px auto 40px auto;
    img {
        width: 100%;
    }
`;

const LoginBody = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    min-height: 100%;
    width: 100%;
    background-color: white;
    height: 100%;
    margin: 0;
`;