import './HabitCard.css';

export default function HabitCard(){

    return(
        <div className="habitCard">
            <div className="delete"><ion-icon name="trash-outline"></ion-icon></div>
            <div className="title">Ler 1 capitulo de livro</div>
            <div className="dates">
                <div className="date">D</div>
                <div className="date selected">S</div>
                <div className="date">T</div>
                <div className="date">Q</div>
                <div className="date">Q</div>
                <div className="date">S</div>
                <div className="date">S</div>
            </div>
        </div>
    );
}