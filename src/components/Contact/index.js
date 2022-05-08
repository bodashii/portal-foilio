import React from 'react';

function ContactForm() {
    return (
        <section>
            <h4>Contact</h4>
            <div>
                <a href="https://github.com/maddnty">GitHub</a>
                <a href="https://www.linkedin.com/in/nicolas-young-818560227/">Linked In</a>
            </div>
            <form>
                <fieldset>
                    <legend>Email Me!</legend>
                    <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="Last Name" />
                    <input type="email" placeholder="email@123.com" />
                    <input type="textarea" placeholder="You're message here..." />
                </fieldset>
            </form>
        </section>
    )
}
export default ContactForm;