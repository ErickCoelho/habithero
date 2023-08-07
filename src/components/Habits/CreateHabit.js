import { useState } from 'react';
import './CreateHabit.css';

export default function CreateHabit({ setCreatingHabit }){
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
            console.log(habitInfo);
            setCreatingHabit(false);
        }
    }

    return(
        <div className="createHabit">
            <input type='text' placeholder='Descrição do hábito' value={habitInfo.name} onChange={(e) => setHabitInfo({...habitInfo, name: e.target.value})}></input>
            <div className="dates">
                {weekDays.map((item, index) =>
                    <div className={`date ${habitInfo.days.includes(index) ? 'selected' : ''}`} onClick={() => handleDaySelection(index)}>{item}</div>// mais ou menos mesma ideia: tem que comparar o index do map e ver se está contido no habitsInfo.days   // acho que tem que add uma tag id na div com o index e quando clicar pegar esse idex e salvar no habitInfo.days
                )}
            </div>
            <div className='buttons'>
                <button className='cancel' onClick={() => setCreatingHabit(false)}>Cancelar</button>
                <button className='save' onClick={handleSave}>Salvar</button>
            </div>
        </div>
    );
}