import { useState } from "react"
import { useNavigate } from "react-router-dom"


function Conspire() {

    const navigate = useNavigate()


    //STATES FOR NEW TESTIMONIAL FORMS
    const [newTestimony, setNewTestimony] = useState("")
    const [newName, setNewName] = useState("")
    const [tushyUse, setTushyUse] = useState("false")

    //HANDLERS FOR NEW TESTIMONIAL FORMS INCLUDING POST REQUEST.

    const handleNewTestimony = e => setNewTestimony(e.target.value)
    const handleNewName = e => setNewName(e.target.value)
    const handleNewTushy = e => setTushyUse(e.target.value)

    function handleTestimonySubmission(e) {
        e.preventDefault()

        const OPTIONS = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: newName,
                testimonial: newTestimony,
                tushy: tushyUse
            })
        }
        fetch("http://localhost:3000/testimonials", OPTIONS)
        .then(res => res.json())
        .then(() => navigate('/curiosities') )
        //NAVIGATE FUNCTION IS BUILT IN REACT ROUTER FUNCTIONALITY, AUTOMATICALLY UPDATES AND NAVIGATES TO CURIOSITIES PAGE.


    }

    return (
        <div className="conspire">
        <h1>I AM THE CONSPIRE PAGE, GIVE IT YOUR BEST SHOT!</h1>
        <blockquote>I've spent the last two decades exploring the creative edges of New York City.Through this, I've met the most incredible people, and I've done a few interesting things.</blockquote>


        {/* INSERT PLACEHOLDER HORIZONTALLY SCROLLING PROECT THUMBNAILS FOR VISUAL SUBMISSION */}
        <div className="visual-submissions">
            PLACEHOLDER FOR MEMBER PROJECT SUBMISSIONS
        </div>

        <br />
        <br />
        <br />


        {/* TESTIMONIAL FORM, WITH STATE AND POST CONFIGURATION ABOVE. */}

        <div className="submitTestimonials">
            <form>
               <label>Who are you? <input type="text" name="newName" onChange={handleNewName} value={newName} placeholder="what's in a name?" /> </label>

               <br />
               <br />

                <textarea onChange={handleNewTestimony} rows="5" cols="60" name="text" placeholder="let us know..."></textarea>
                <br />
                <label>
                <input onChange={handleNewTushy} type="checkbox" name="checkbox" value="false" />
                Is tushy a part of your life?
                </label>
                <br/>
                <input onClick={handleTestimonySubmission} type="submit" placeholder="submit" />
            </form>
        </div>

        </div>

        
    )
}

export default Conspire


//figure out post request for a new testimonial