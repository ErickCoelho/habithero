import styled from 'styled-components';
import logotext from '../assets/logotext.png';
import UserContext from '../context/UserContext';
import { useContext } from 'react';

export default function Header() {
    const { user } = useContext(UserContext);

    return (
        <HeaderBar>
            <Images src={logotext} />
            <Images className='profile' src={user.image} />
        </HeaderBar>
    );
}

const HeaderBar = styled.div`
  position : fixed ;
  top: 0;
  left: 0;
  background: #52B6FF;
  box-shadow: 0px 0px 10px 4px rgba(0,0,0,0.3);
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
`;

const Images = styled.img`
    color: #52B6FF;
    font-size: 18px;
    height: 100%;

    .profile{
        border-radius: 50%;
    }
`;