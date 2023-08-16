import EmailForm from "./EmailForm"
import TestimForm from "./TestimForm"


function Conspire() {

    return (
        <>
        <div className="conspire">
            <h1>I AM THE CONSPIRE PAGE, GIVE IT YOUR BEST SHOT!</h1>
            <blockquote>I've spent the last two decades exploring the creative edges of New York City.Through this, I've met the most incredible people, and I've done a few interesting things.</blockquote>

            <div className="collab-requests">    
            <EmailForm />
            </div>
            <br />
            <br />
            <br />
            <TestimForm />
        </div>
        </>
    )
}

export default Conspire

