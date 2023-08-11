import axios from 'axios';
import './HabitCard.css';
import { useContext } from 'react';
import TokenContext from '../../context/TokenContext';

export default function HabitCard({ habitInfo, getHabits, setHabitsResponse  }) {
    const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
    const { token } = useContext(TokenContext);

    function handleDelete(id) {
        axios.delete(`
            https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`,
            { headers: { Authorization: `Bearer ${token}` }}
        );
        getHabits();
    }

    return (
        <div className="habitCard">
            <div className="delete"><ion-icon name="trash-outline" onClick={() => handleDelete(habitInfo.id)}></ion-icon></div>
            <div className="title">{habitInfo.name}</div>
            <div className="dates">
                {weekDays.map((item, index) =>
                    <div className={`date ${habitInfo.days.includes(index) ? 'selected' : ''}`} key={index}>{item}</div>
                )}
            </div>
        </div>
    );
}