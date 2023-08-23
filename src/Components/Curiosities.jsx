// import { useEffect } from "react"
import { useLoaderData } from "react-router-dom"
import  TestimCard  from "./TestimCard"
// import { useNavigate } from "react-router-dom"
import HubMap from "./HubMap"
import { useState } from "react"
import ImgModal from "./ImgModal"

function Curiosities() {

    // const navigate = useNavigate()
    //GET TESTIMONIALS FROM LOADER
    const { testimonials } = useLoaderData()

    //MAP TESTIMONIALS FOR DISPLAYING IN TestimCard
    const mappedTestimonials = testimonials.map(testimonialObj => (
        <TestimCard key={testimonialObj.id} testimonialObj={testimonialObj} />
    ))

  // STATE FOR MODAL
    const [isMapModalOpen, setIsMapModalOpen] = useState(false)

  // HELPER FUNCTIONS FOR SETTING MODAL STATE
  const openMapModal = () => {
    console.log('here here')
    setIsMapModalOpen(true);
  }

  const closeMapModal = () => {
    setIsMapModalOpen(false);
  }


    


    return (
        
        <div className="curiosities">
            <h1 className="section-title">curiosities</h1>
               <p><em> A collection of things experienced at XXXXXXXXXX --- URL and IRL</em></p>
            {/* <br /> */}
            <button className="button" onClick={openMapModal}>Scavenger Hunt</button>
            {isMapModalOpen ? 
                <ImgModal open={isMapModalOpen} onClose={closeMapModal} >
                    <HubMap />
                </ImgModal> : null
            }

            <div className="testimonial-container">
                 {mappedTestimonials}
            </div>


        </div>
        
    )
}

export default Curiosities