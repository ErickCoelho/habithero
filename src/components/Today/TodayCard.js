import './TodayCard.css';

export default function Today({ todayInfo }){

    function handleClickCheck(done){
        if (done){
            alert("Unchecking");
        }
        else {
            alert("Checking");
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