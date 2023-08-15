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
        <div>
            {mappedTestimonials}
        </div>


        </div>
    )
}

export default Curiosities