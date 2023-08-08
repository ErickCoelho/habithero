import axios from 'axios';
import './HabitCard.css';
import { useContext } from 'react';
import TokenContext from '../../context/TokenContext';

export default function HabitCard({ habitInfo }) {
    const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
    const { token } = useContext(TokenContext);

    function handleDelete(id) {
        alert('deleting');
        axios.delete(`
            https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`,
            { headers: { Authorization: `Bearer ${token}` }}
        );
    }

    return (
        <div className="habitCard">
            <div className="delete"><ion-icon name="trash-outline" onClick={() => handleDelete(habitInfo.id)}></ion-icon></div>
            <div className="title">{habitInfo.name}</div>
            <div className="dates">
                {weekDays.map((item, index) =>
                    <div className={`date ${habitInfo.days.includes(index) ? 'selected' : ''}`}>{item}</div>
                )}
            </div>
        </div>
    );
}