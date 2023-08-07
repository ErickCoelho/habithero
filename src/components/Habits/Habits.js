import { useContext, useState } from 'react';
import UserContext from "../../context/UserContext";
import Header from '../Header';
import Navbar from '../Navbar';
import HabitCard from './HabitCard';
import CreateHabit from './CreateHabit';
import './Habits.css';


export default function Habits(){
    const { user } = useContext(UserContext);
    const [ creatingHabit, setCreatingHabit ] = useState(false);

    const habitsResponse = [
        {
            id: 1,
            name: "Nome do hábito",
            days: [1, 3, 5]
        },
        {
            id: 2,
            name: "Nome do hábito 2",
            days: [1, 3, 4, 6]
        }
    ];


    return(
        <>
            <Header />
            <Navbar />
            <div className='pagesBody'>
                <div className='pageHeader'>
                    <div className='title'>Meus hábitos</div>
                    <button className='icon' onClick={() => setCreatingHabit(true)}>+</button>
                </div>

                {creatingHabit ? <CreateHabit setCreatingHabit={setCreatingHabit} /> : ''}
                { habitsResponse.map(item => <HabitCard habitInfo = {item} />) }

                {habitsResponse.length === 0 && <div className='text'>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</div>}
            </div>
        </>
    );
}