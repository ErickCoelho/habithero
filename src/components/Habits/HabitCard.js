import './HabitCard.css';

export default function HabitCard({ habitInfo }){
    const days = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

    return(
        <div className="habitCard">
            <div className="delete"><ion-icon name="trash-outline"></ion-icon></div>
            <div className="title">{habitInfo.name}</div>
            <div className="dates">
                {
                    days.map(item => 
                        <div className={`date ${item === 'S' ? 'selected' : ''}`}>{item}</div>
                    )
                }
            </div>
        </div>
    );
}