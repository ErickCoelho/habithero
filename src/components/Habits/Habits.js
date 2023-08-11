import { useContext, useEffect, useState } from 'react';
import UserContext from "../../context/UserContext";
import TokenContext from '../../context/TokenContext';
import axios from 'axios';
import Header from '../Header';
import Navbar from '../Navbar';
import HabitCard from './HabitCard';
import CreateHabit from './CreateHabit';
import './Habits.css';


export default function Habits(){
    const { token } = useContext(TokenContext);
    const { user } = useContext(UserContext);
    const [ creatingHabit, setCreatingHabit ] = useState(false);
    const [ habitsResponse, setHabitsResponse ] = useState([]); 
    
    function getHabits(){
        axios.get(
            `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`,
            { headers: { Authorization: `Bearer ${token}` }}
        )
        .then(response => {
            setHabitsResponse(response.data);
        });
    }

    useEffect(() => {
        getHabits();
    }, []);


    return(
        <>
            <Header />
            <Navbar />
            <div className='pagesBody'>
                <div className='pageHeader'>
                    <div className='title'>Meus hábitos</div>
                    <button className='icon' onClick={() => setCreatingHabit(true)}>+</button>
                </div>

                {creatingHabit ? <CreateHabit setCreatingHabit={setCreatingHabit} getHabits={getHabits} setHabitsResponse={setHabitsResponse} /> : ''}
                { habitsResponse.map(item => <HabitCard habitInfo = {item} getHabits={getHabits} setHabitsResponse={setHabitsResponse} key={item.id} />) }

                {habitsResponse.length === 0 && <div className='text'>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</div>}
            </div>
        </>
    );
}