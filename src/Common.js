import React from 'react';
import { NavLink } from 'react-router-dom';
import AboutImage from '../src/images/laptop-2298286_640.png';

const Common = (props) => {
    return (
        <>
            <section className="d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className='row'>
                                <div className="col-md-6 mt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column text-center">
                                    <h1>{props.heading} <strong className='brand-name' style={{ color: "#5081ef" }}>Our Company</strong></h1>
                                    <p className="my-3 pt-2 pb-2">
                                        {props.para}
                                    </p>
                                    <div className='mt-3'>
                                        <NavLink to={props.linksrc} className='btn-get-started'>
                                            {props.btnname}
                                        </NavLink>
                                    </div>
                                </div>
                                <div className='col-md-6 order-1 order-lg-1 mt-5'>
                                    <img src={props.image} alt='image' className="w-100 float-right animated" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Common;