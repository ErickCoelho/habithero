import './HabitCard.css';

export default function HabitCard({ habitInfo }) {
    const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

    function handleDelete() {
        alert('deleting');
    }

    return (
        <div className="habitCard">
            <div className="delete"><ion-icon name="trash-outline" onClick={handleDelete}></ion-icon></div>
            <div className="title">{habitInfo.name}</div>
            <div className="dates">
                {weekDays.map(item =>
                    <div className={`date ${item === 'S' ? 'selected' : ''}`}>{item}</div> // tem que comparar o index do map e ver se está contido no habitsInfo.days
                )}
            </div>
        </div>
    );
}