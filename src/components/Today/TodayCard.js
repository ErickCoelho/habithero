import './TodayCard.css';

export default function Today(){

    return(
        <div className="todayCard">
            <div className='texts'>
                <div className="title">Ler 1 capitulo de livro</div>
                <div className="description">Sequência atual: <div className='selected'>3 dias</div></div>
                <div className="description">Seu recorde: <div className='unselected'>5 dias</div></div>
            </div>
            <div className="check selected"><ion-icon name="checkmark-outline"></ion-icon></div>
        </div>
    );
}