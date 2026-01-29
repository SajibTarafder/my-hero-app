import React from 'react';
import Banner from '../../components/Banner/Banner';
import Hero from '../Hero/Hero';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData();
    
    return (
        <div>
            <Banner></Banner>
            <Hero data={data}></Hero>
           
        </div>
    );
};

export default Home;