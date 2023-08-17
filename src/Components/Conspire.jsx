import EmailForm from "./EmailForm"
import TestimForm from "./TestimForm"


function Conspire() {

    return (
        <>
        <div className="conspire">
            <h1 className="section-title">conspire</h1>
            <p><em>I've spent the last two decades exploring the creative edges of New York City.Through this, I've met the most incredible people, and I've done a few interesting things.</em></p>

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

