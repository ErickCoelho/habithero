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
                <div>Historic!</div>
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