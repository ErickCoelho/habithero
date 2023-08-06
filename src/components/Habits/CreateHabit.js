import './CreateHabit.css';

export default function CreateHabit(){

    return(
        <div className="createHabit">
            <input type='text' placeholder='Descrição do hábito'></input>
            <div className="dates">
                <div className="date">D</div>
                <div className="date selected">S</div>
                <div className="date">T</div>
                <div className="date">Q</div>
                <div className="date">Q</div>
                <div className="date">S</div>
                <div className="date">S</div>
            </div>
            <div className='buttons'>
                <button className='cancel'>Cancelar</button>
                <button className='save'>Salvar</button>
            </div>
        </div>
    );
}