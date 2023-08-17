// import { useEffect } from "react"
import { useLoaderData } from "react-router-dom"
import  TestimCard  from "./TestimCard"

function Curiosities() {

    //GET TESTIMONIALS FROM LOADER
    const { testimonials } = useLoaderData()

    //MAP TESTIMONIALS FOR DISPLAYING IN TestimCard

    const mappedTestimonials = testimonials.map(testimonialObj => (
        <TestimCard key={testimonialObj.id} testimonialObj={testimonialObj} />
    ))


    return (
        <>
        <div className="curiosities">
            <h1 className="section-title">curiosities</h1>
            <br />
            <br />
            <div className="curiousPeople">A collection of noteworthy collaborators</div>
            <hr />
            <br />
            <br />
            <br />


               <div> A collection of things experienced at XXXXXXXXXX --- URL and IRL</div>
               <hr/>
            <div className="testimonial-container">
                 {mappedTestimonials}
            </div>


        </div>
        </>
    )
}

export default Curiosities