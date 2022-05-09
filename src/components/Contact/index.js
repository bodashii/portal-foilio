import React from 'react';


function ContactForm() {
    return (
        <section>
            <div className="row g-1">
                <h4 className="text-center display-3">Contact</h4>
            </div>
            <div className="container-fluid">
                <div className="grid text-center container">
                    
                        <div className="grid text-center">
                            <div>
                                <a className="g-col-6 display-6" href="https://github.com/maddnty">GitHub</a>
                            </div>
                            
                            <a className="g-col-6 display-6" href="https://www.linkedin.com/in/nicolas-young-818560227/">Linked In</a>
                        </div>
                    

                    <div className="row">
                    <form className="container">
                        <div className="row">
                            <fieldset>
                                <legend>Name</legend>
                                <div className="mb-3">
                                    <input className=" col form-control" type="text" placeholder="First Name" />
                                </div>

                                <div className="mb-3">
                                    <input className=" col form-control" type="text" placeholder="Last Name" />
                                </div>
                            </fieldset>
                        </div>

                        <fieldset>
                            <legend>Email</legend>
                            <div className="mb-3">
                                <input className="form-control" type="email" placeholder="email@123.com" />
                            </div>
                            <legend>Message</legend>
                            <div className="mb-3">
                                <textarea className="form-control" type="textarea" placeholder="You're message here..." />
                            </div>
                        </fieldset>
                        <button className="btn btn-success" type="submit">Send</button>
                    </form>
                </div>
                </div>
            </div>   
        </section>
    )
}
export default ContactForm;