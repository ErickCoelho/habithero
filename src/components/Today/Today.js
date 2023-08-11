import { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import UserContext from "../../context/UserContext";
import Header from '../Header';
import Navbar from '../Navbar';
import TodayCard from './TodayCard';
import './Today.css';
import TokenContext from '../../context/TokenContext';


export default function Today() {
    const { user } = useContext(UserContext);
    const { token } = useContext(TokenContext);
    const date = "Segunda, 17/05";
    const progress = 30;

    const [todayResponse, setTodayResponse] = useState([]);

    function getTodayData() {
        axios.get(
            'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today',
            { headers: { Authorization: `Bearer ${token}` } }
        )
            .then(response => {
                setTodayResponse(response.data);
            });

    }

    useEffect(() => {
        getTodayData();
    }, []);



    return (
        <>
            <Header />
            <Navbar />
            <div className='pagesBody'>
                <div className='pageHeader Today'>
                    <div className='title'>{date}</div>
                    {progress === 0 && <div className='headerText'>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</div>}
                    {progress !== 0 && <div className='headerText progress'>{progress}% dos hábitos concluídos!</div>}
                </div>

                {todayResponse.map(item => <TodayCard todayInfo={item} getTodayData={getTodayData} setTodayResponse={setTodayResponse} key={item.id} />)}

            </div>
        </>
    );
}