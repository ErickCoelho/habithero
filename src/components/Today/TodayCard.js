import './TodayCard.css';
import { useContext } from 'react';
import TokenContext from '../../context/TokenContext'
import axios from 'axios';

export default function Today({ todayInfo, getTodayData, setTodayResponse }){

    const { token } = useContext(TokenContext);

    function handleClickCheck(done){
        if (done){
            axios.post(
                `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${todayInfo.id}/uncheck`,
                null,
                { headers: { Authorization: `Bearer ${token}` }}
            );
        }
        else {
            axios.post(
                `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${todayInfo.id}/check`,
                null,
                { headers: { Authorization: `Bearer ${token}` }}
            );
        }
        getTodayData();
    }

    return(
        <div className="todayCard">
            <div className='texts'>
                <div className="title">{todayInfo.name}</div>
                <div className="description">Sequência atual: <div className={todayInfo.done ? 'selected' : 'unselected'}>{todayInfo.currentSequence} dias</div></div>
                <div className="description">Seu recorde: <div className={(todayInfo.highestSequence === todayInfo.currentSequence && todayInfo.highestSequence > 0 ) ? 'selected' : 'unselected'}>{todayInfo.highestSequence} dias</div></div>
            </div>
            <div className={`check ${todayInfo.done ? 'selected' : ''}`} onClick={() => handleClickCheck(todayInfo.done)}><ion-icon name="checkmark-outline"></ion-icon></div>
        </div>
    );
}