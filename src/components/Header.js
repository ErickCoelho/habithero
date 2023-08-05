import styled from 'styled-components';
import logotext from '../assets/logotext.png';

export default function Header() {
    const profileUrl = 'https://almeidajunior-prod1.s3.amazonaws.com/prod/uploads/news/5d81505ac6770.jpg';

    return (
        <HeaderBar>
            <Images src={logotext} />
            <Images className='profile' src={profileUrl} />
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