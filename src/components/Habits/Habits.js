import { useContext } from 'react';
import UserContext from "../../context/UserContext";
import Header from '../Header';
import Navbar from '../Navbar';
import HabitCard from './HabitCard';
import CreateHabit from './CreateHabit';
import './Habits.css';


export default function Habits(){
    const { user } = useContext(UserContext);
    const habitsArray = {};

    return(
        <>
            <Header />
            <Navbar />
            <div className='pagesBody'>
                <div className='pageHeader'>
                    <div className='title'>Meus hábitos</div>
                    <button className='icon'>+</button>
                </div>
                {Object.keys(habitsArray).length === 0 && <div className='text'>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</div>}
                <HabitCard />
                <CreateHabit />
            </div>
        </>
    );
}