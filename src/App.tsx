import React from 'react';
import './App.css';
import {Dialog} from './components/Dialogs/Dialogs';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";


const App = () => {
    return (
        <div className='app_wrapper'>
            <Header/>
            <Navbar/>
            <div className='app_wrapper_content'>
                <Dialog />
                {/*<Profile/>*/}
            </div>

        </div>
    );
}
export default App;


