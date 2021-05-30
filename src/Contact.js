import React from 'react';

const Contact = () => {
    return (
        <>
            <div className="my-5">
                <h1 className='text-center font-weight-bold'>Contact Us</h1>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 col-10 mx-auto'>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Full Name" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Phone Number" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email ID" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div class="col-12">
                            <button class="btn btn-outline-primary" type="submit">Submit form</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;