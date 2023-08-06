import { useContext } from 'react';
import UserContext from "../../context/UserContext";
import Header from '../Header';
import Navbar from '../Navbar';
import TodayCard from './TodayCard';
import './Today.css';


export default function Today(){
    const { user } = useContext(UserContext);
    const date = "Segunda, 17/05";
    const progress = 30;

    return(
        <>
            <Header />
            <Navbar />
            <div className='pagesBody'>
                <div className='pageHeader Today'>
                    <div className='title'>{date}</div>
                    {progress === 0 && <div className='headerText'>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</div>}
                    {progress !== 0 && <div className='headerText progress'>{progress}% dos hábitos concluídos!</div>}
                </div>
                <div>Today!</div>
                <TodayCard />
                
            </div>
        </>
    );
}