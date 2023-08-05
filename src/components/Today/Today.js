import { useContext } from 'react';
import UserContext from "../../context/UserContext";
import Header from '../Header';
import Navbar from '../Navbar';


export default function Today(){
    const { user } = useContext(UserContext);

    return(
        <>
            <Header />
            <Navbar />
            <div className='pagesBody'>
                <div>Today!</div>
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