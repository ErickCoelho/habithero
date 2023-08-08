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

    useEffect(() => {
        axios.get(
            `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`,
            { headers: { Authorization: `Bearer ${token}` }}
        )
        .then(response => {
            setHabitsResponse(response.data);
            console.log(response.data);
        });
    }, [creatingHabit, token]); // não tá atualizando quando eu crio um novo hábito => preciso manter token nas deps? => agora tá atualizando mas não pela criacao propriamente dita e sim pela propriedade que oculta o card de criacao => nao tá atualizando quando deleto



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