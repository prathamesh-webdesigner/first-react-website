import React from 'react';
import web from '../src/images/about.png';
import Common from './Common';

const About = () => {
    return (
        <>
            <Common
                heading="About page"
                para="If you want to learn more Info PTweb About us, you’re in the right place. Read to learn how we managed to grow our business so fast."
                linksrc="/service"
                btnname="Our Services"
                image={web}
                
            />
        </>
    );
};

export default About;