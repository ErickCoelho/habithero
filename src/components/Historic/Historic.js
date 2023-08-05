import { useContext } from 'react';
import UserContext from "../../context/UserContext";
import Header from '../Header';
import Navbar from '../Navbar';


export default function Historic(){
    const { user } = useContext(UserContext);

    return(
        <>
            <Header />
            <Navbar />
            <div className='pagesBody'>
                <div className='pageHeader'>
                    <div className='title'>Histórico</div>
                </div>
                <div className='text'>Em breve você poderá ver o histórico dos seus hábitos aqui!</div>
            </div>
        </>
    );
}