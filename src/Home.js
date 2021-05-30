import React from 'react';
import { NavLink } from 'react-router-dom';
import web from '../src/images/laptop-2298286_640.png';
import Common from './Common';

const Home = () => {
    return (
        <>
            <Common
                heading="Home page"
                para="This is Home PageWelcoming visitors is an excellent way of improving user experience (UX). It can set the tone for the rest of their visit on your site."
                linksrc="/about"
                btnname="About Us"
                image={web}
            />
        </>
    );
};

export default Home;