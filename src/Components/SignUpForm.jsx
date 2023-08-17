


function SignUpForm() {
    return (
    <>
        <div className="sign-up">
            <br />
            <br />
            <h3>Every person's value is intrinsic...</h3>
            <form>
            <label>name:  <input type="text"/></label>
            <br />
            <br />
            <label>email 📧: <input type="text" /></label>
            <br />
            <br />
            <label>phone 📞: <input type="tel" /></label>
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
                <input type="submit" />
            </form>


        </div>
    </>
    )
}

export default SignUpForm