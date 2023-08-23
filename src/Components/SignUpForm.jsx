import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com"

function SignUpForm() {

    const navigate = useNavigate()


    function sendMemberRequest(e){
        e.preventDefault();
        alert("thank you. we'll get back you within 2 weeks if the answer to our riddle sufficed");
        emailjs.sendForm('service_5x5at0h', 'template_tyx5d8m', e.target, 'zPgYeSiwBvun60p50')
        .then((res) => {
            console.log(res.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
        navigate('/')
    }


    return (
    <>
        <div className="sign-up">
            <br />
            <br />
            <h3>Every person's value is intrinsic...</h3>
            <form  onSubmit={sendMemberRequest}>
            <label>name:  <input type="text" name="name"/></label>
            <br />
            <br />
            <label>email 📧: <input type="text" name="email" /></label>
            <br />
            <br />
            <label>phone 📞: <input type="tel"name="tel"/></label>
            <br />
            <br />
            <fieldset>
            <legend>which is most accurate?</legend>
            <div>
                <input type="radio" name="radiobtn"/>
                <label for="">I am currently a member.</label>
                </div>
            <div>
                <input type="radio" name="radiobtn" />
                <label for="">I am not a member, but have been to xxxxxxxxxx.</label>
                </div>
            <div>
                <input type="radio" name="radiobtn" />
                <label for="">Not a member, I want in!</label>
                </div>
                </fieldset>
            <div>

                <fieldset>
                <legend>riddle me this:</legend>
                <textarea name="riddle" cols="50" rows="10" placeholder="In the realm of intellect, a trial emerges. Not for automata, but for minds to unveil. Amidst narratives entwined, can you discern authenticity? The challenge: to decipher the genuine, whether human essence or clever ruse. Can you unravel the threads of cognition from the skein of artifice?"></textarea>
                </fieldset>
                    </div>
                    <br />
                <input className="button" type="submit"  value="good luck"/>
            </form>
            

        </div>



    </>
    )
}

export default SignUpForm