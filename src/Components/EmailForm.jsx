import emailjs from "emailjs-com"


function EmailForm(e) {

    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_5x5at0h', 'template_9c2w229', e.target, 'zPgYeSiwBvun60p50')
        .then((res) => {
            console.log(res.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }


    return (
        <div className="email-form">
            <h2>Have an idea for the fall season?</h2>
            <form onSubmit={sendEmail}>
                <div>
                <input type="text" placeholder="Name" name="name" />
                </div>

                <div><input type="email" placeholder="Email Address" name="email" /> </div>
                <div><input type="text" placeholder="Subject" name="subject" /> </div>
                <div><textarea cols="30" rows ="8" placeholder="Your Message" name="message"></textarea></div>
                <div><input className="button" type="submit" value="Send Message"></input></div>
            </form>
        </div>
    )
}

export default EmailForm