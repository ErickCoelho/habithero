import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <NavBar>
            <NavLink to='/habitos'>Hábitos</NavLink>
            <HojeLink to='/hoje'>
                Hoje
            </HojeLink>
            <NavLink to='/historico'>Histórico</NavLink>
        </NavBar>
    );
}

const NavBar = styled.div`
  position : fixed ;
  bottom: 0;
  left: 0;
  box-shadow: 0px 0px 10px 4px rgba(0,0,0,0.1);
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 10px;
  background-color: white;
`;

const NavLink = styled(Link)`
    color: #52B6FF;
    font-size: 18px;
`;

const HojeLink = styled(Link)`
    background-color: #52B6FF;
    color: white;
    font-size: 18px;
    width: 91px;
    height: 91px;
    margin-top: -31px;
    margin-bottom: 10px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;