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
                            <fieldset className="form-group row">
                                <legend>Name</legend>
                                <div className="">
                                    <input className="col-md-3 mb-2 text-center" type="text" placeholder="First Name" />
                                </div>

                                <div className="">
                                    <input className="col-md-3 mb-2 text-center" type="text" placeholder="Last Name" />
                                </div>
                            </fieldset>

                            <fieldset className="form-group row">
                                <legend>Email</legend>
                                <div>
                                    <input className="col-md-3 mb-2" type="email" placeholder="email@123.com" />
                                </div>
                            </fieldset>

                            <fieldset className="form-group row">
                                <legend>Message</legend>
                                <div>
                                    <textarea className="col-md-3 mb-2" type="textarea" placeholder="You're message here..." />
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