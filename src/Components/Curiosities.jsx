// import { useEffect } from "react"
import { useLoaderData } from "react-router-dom"

function Curiosities() {

    //GET TESTIMONIALS FROM LOADER
    const { testimonials } = useLoaderData()

    const mappedTestimonials = testimonials.map(testimonialObj => (
        <>
        <h2>{testimonialObj.name}</h2>
        <p>{testimonialObj.testimonial}</p>
        </>

    ))


    return (
        <div className="curiosities">
        <h1>I AM THE CURIOSITIES PAGE HOW INTERESTING!</h1>
        <br />
        <br />
        <div className="curiousPeople">A collection of noteworthy collaborators</div>
        <hr />
        <br />
        <br />
        <br />


        <div className="testimonial-container">
            A collection of things experienced at XXXXXXXXXX club, URL and IRL
            {mappedTestimonials}
        </div>


        </div>
    )
}

export default Curiosities