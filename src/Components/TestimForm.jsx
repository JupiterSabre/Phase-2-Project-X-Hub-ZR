import { useState } from "react"
import { useNavigate } from "react-router-dom"

function TestimForm() {

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

        {/* TESTIMONIAL FORM, WITH STATE AND POST CONFIGURATION ABOVE. */}

    return (


        <div className="testimonial-form">
            <form>
               <label>Who are you? <input type="text" name="newName" onChange={handleNewName} value={newName} placeholder="what's in a name?" /> </label>

               <br />
               <br />

                <textarea onChange={handleNewTestimony} rows="5" cols="60" name="text" placeholder="This one time, at XXXXXXXXXX club..." maxLength="600" ></textarea>
                <br />
                <label>
                <input onChange={handleNewTushy} type="checkbox" name="checkbox" value="false" />
                Is tushy a part of your life?
                </label>
                <br/>
                <input onClick={handleTestimonySubmission} type="submit" placeholder="submit" />
            </form>
        </div>
                    )
}

export default TestimForm