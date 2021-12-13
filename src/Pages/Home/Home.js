import React from 'react';
import HomeMessage from '../../components/HomeMessage/HomeMessage';
import LogoImg1 from '../../components/LogoImg1/LogoImg1';
import './Home.css';

 const Home = () => {
    return (
        <div id='home-container'>
            <div id='container'>
                <h1>QBabyMusic</h1>
            </div>
            <div id='container'>
                <HomeMessage />
                <LogoImg1 />
            </div>
        </div>
    )
}

export default Home;