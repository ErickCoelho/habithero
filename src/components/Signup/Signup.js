import { Link } from "react-router-dom";
import logoImage from "../../assets/logo.png";
import styled from 'styled-components';
import axios from "axios";
import { useState } from "react";

export default function Signup() {
    const [signupInfos, setSignupInfos] = useState({});

    function createUser(e) {
        e.preventDefault();

        console.log("OI");
        axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", signupInfos)
            .then(response => { console.log('Response:', response) })
            .catch((error) => console.log('Error:', error));
    }


    return (
        <>
            <Logo><img src={logoImage} alt="logo" /></Logo>
            <form onSubmit={createUser}>
                <input type="email" placeholder="email" onChange={(e) => setSignupInfos({ ...signupInfos, email: e.target.value })}></input>
                <input type="password" placeholder="senha" onChange={(e) => setSignupInfos({ ...signupInfos, password: e.target.value })}></input>
                <input type="text" placeholder="nome" onChange={(e) => setSignupInfos({ ...signupInfos, name: e.target.value })}></input>
                <input type="url" placeholder="foto" onChange={(e) => setSignupInfos({...signupInfos, image: e.target.value})}></input>
                <button type="submit">Cadastrar</button>
                <Link to="/" className="signupLink">Já tem uma conta? Faça login!</Link>
            </form>
        </>
    );
}

const Logo = styled.div`
    width: 180px;
    margin: 80px auto 40px auto;
    img {
        width: 100%;
    }
`;