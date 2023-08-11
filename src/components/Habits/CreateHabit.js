import { useState, useContext } from 'react';
import TokenContext from '../../context/TokenContext';
import axios from 'axios';
import './CreateHabit.css';

export default function CreateHabit({ setCreatingHabit, getHabits, setHabitsResponse }){
    const { token } = useContext(TokenContext);
    const [habitInfo, setHabitInfo] = useState({name: "", days: []});
    const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

    function handleDaySelection(index){
        if(habitInfo.days.includes(index)){
            const habitInfoDaysTemp = habitInfo.days.filter(day => day !== index);
            setHabitInfo({...habitInfo, days: habitInfoDaysTemp});
        }
        else
            setHabitInfo({...habitInfo, days: [...habitInfo.days, index]});
    }

    function handleSave(){
        if(habitInfo.name === "" || habitInfo.days.length === 0 )
            alert("O hábito deve ter um nome e ao menos um dia marcado.");
        else{
            alert('Hábito cadastrado com sucesso!');
            axios.post(
                `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`,
                habitInfo,
                { headers: { Authorization: `Bearer ${token}` }}
            );
            setCreatingHabit(false);
            getHabits();
        }
    }

    return(
        <div className="createHabit">
            <input type='text' placeholder='Descrição do hábito' value={habitInfo.name} onChange={(e) => setHabitInfo({...habitInfo, name: e.target.value})}></input>
            <div className="dates">
                {weekDays.map((item, index) =>
                    <div className={`date ${habitInfo.days.includes(index) ? 'selected' : ''}`} onClick={() => handleDaySelection(index)} key={index}>{item}</div>
                )}
            </div>
            <div className='buttons'>
                <button className='cancel' onClick={() => setCreatingHabit(false)}>Cancelar</button>
                <button className='save' onClick={handleSave}>Salvar</button>
            </div>
        </div>
    );
}