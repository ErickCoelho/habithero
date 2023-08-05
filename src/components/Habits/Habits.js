import { useContext } from 'react';
import UserContext from "../../context/UserContext";
import Header from '../Header';
import Navbar from '../Navbar';


export default function Habits(){
    const { user } = useContext(UserContext);

    return(
        <>
            <Header />
            <Navbar />
            <div className='pagesBody'>
                <div>Habits!</div>
                <div>Hello World!</div>
                <div>Hello World!</div>
                <div>Hello World!</div>
                <div>Hello World!</div>
                <div>Hello World!</div>
                <div>Hello World!</div>
                <div>Hello World!</div>
                <div>Hello World!</div>
                <div>Hello World!</div>
                <div>Hello World!</div>
                <div>Hello World!</div>
                <div>Hello World!</div>
                <div>Hello World!</div>
                <div>Hello World!</div>
                <div>Hello World!</div>
                <div>Hello World!</div>
                <div>Hello World!</div>
                <div>Hello World!</div>
                <div>Hello World!</div>
                <div>Hello World!</div>
                <div>Hello World!</div>
                <div>Hello World!</div>
                <div>Hello World!</div>
                <div>Hello World!</div>
                <div>Hello World!</div>
                <div>Hello World!</div>
                <div>Hello World!</div>
                <div>Hello World!</div>
                <div>Hello World!</div>
                <div>Hello World!</div>
                <div>Hello World!</div>
                <div>Hello World!</div>
                <div>Hello World!</div>
                <div>Hello World!</div>
                <div>Hello World!</div>
                <div>Hello World!</div>
                <div>Hello World!</div>
                <div>Hello World!</div>
                <div>Hello World!</div>
                <div>Hello World!</div>
                <div>Hello World!</div>
                <div>Hello World!</div>
                <div>Hello World!</div>
                <div>Hello World!</div>
                <div>Hello World!</div>
                <div>Hello World!</div>
                <div>Hello World!</div>
                <div>Hello World!</div>
                <div>Hello World!</div>
                <div>Hello World!</div>
                <div>Hello World!</div>
                <div>Hello World!</div>
                <div>Hello World!</div>
                <div>Hello World!</div>
                <div>Hello World!</div>
                <div>Hello World!</div>
                <div>Hello World!</div>
                <div>Hello World!</div>
                <div>Hello World!</div>
                <div>{user.name}</div>
            </div>
        </>
    );
}