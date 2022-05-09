import React from 'react';


function ContactForm() {
    return (
        <section>
            <div className="row g-1">
                <h4 className="text-center bg-body shadow-sm display-3">Contact</h4>
            </div>
            <div className="container-fluid vw-60">
                <div className="grid text-center container">
                    <div className="d-flex justify-content-between mx-auto p-2">
                        <a className="display-6" href="https://github.com/maddnty">Github</a>
                        <a className="display-6" href="https://www.linkedin.com/in/nicolas-young-818560227/">Linked In</a>
                        <a className="display-6" href="https://twitter.com/maddnty">Tweet</a>
                    </div>
                    
                    <form className="container-fluid">
                        <div className="d-flex flex-column justify-content-center">
                            <fieldset>
                                <legend>Name</legend>
                                <div className="mb-2">
                                    <input className=" col form-control text-center" type="text" placeholder="First Name" />
                                </div>

                                <div className="mb-3">
                                    <input className=" col form-control text-center" type="text" placeholder="Last Name" />
                                </div>
                            </fieldset>

                            <fieldset>
                                <legend>Email</legend>
                                <div className="mb-3">
                                    <input className="form-control" type="email" placeholder="email@123.com" />
                                </div>
                            </fieldset>

                            <fieldset>
                                <legend>Message</legend>
                                <div className="mb-3">
                                    <textarea className="form-control" type="textarea" placeholder="You're message here..." />
                                </div>
                        </fieldset>
                        </div>

                        
                        <button className="btn btn-success" type="submit">Send</button>
                    </form>
                </div>
                </div>   
        </section>
    )
}
export default ContactForm;