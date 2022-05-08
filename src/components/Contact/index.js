import React from 'react';

function ContactForm() {
    return (
        <section>
            
            <h4 className="text-center title">Contact</h4>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <a href="https://github.com/maddnty">GitHub</a>
                            <a href="https://www.linkedin.com/in/nicolas-young-818560227/">Linked In</a>
                        </div>
                    </div>

                    <div className="col">
                    <form>
                        <div>
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