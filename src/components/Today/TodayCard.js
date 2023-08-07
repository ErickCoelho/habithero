import './TodayCard.css';
import { useContext } from 'react';
import TokenContext from '../../context/TokenContext'
import axios from 'axios';

export default function Today({ todayInfo }){

    const { token } = useContext(TokenContext);

    function handleClickCheck(done){
        if (done){
            alert("Unchecking");
            axios.post(
                `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${todayInfo.id}/uncheck`,
                { headers: { Authorization: `Bearer ${token}` }}
            );
        }
        else {
            alert("Checking");
            axios.post(
                `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${todayInfo.id}/check`,
                { headers: { Authorization: `Bearer ${token}` }}
            );
        }
    }

    console.log(todayInfo);
    return(
        <div className="todayCard">
            <div className='texts'>
                <div className="title">{todayInfo.name}</div>
                <div className="description">Sequência atual: <div className={todayInfo.done ? 'selected' : 'unselected'}>{todayInfo.currentSequence} dias</div></div>
                <div className="description">Seu recorde: <div className={todayInfo.highestSequence === todayInfo.currentSequence ? 'selected' : 'unselected'}>{todayInfo.highestSequence} dias</div></div>
            </div>
            <div className={`check ${todayInfo.done ? 'selected' : ''}`} onClick={() => handleClickCheck(todayInfo.done)}><ion-icon name="checkmark-outline"></ion-icon></div>
        </div>
    );
}