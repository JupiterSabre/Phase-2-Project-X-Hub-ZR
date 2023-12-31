import { useState } from "react"
import placeholder from "../assets/bw-egypt-bust-1.png"
import ImgModal from "./ImgModal"




function HapCard({ photo }) {
    
   //STATE FOR IMG MODAL
   const [isOpen, setIsOpen] = useState(false)

    
    return (
<>

        <section className="hap-card"> 
        <header className="hap-name" >{photo.name}</header>
        <img className="hap-img" src={photo.image || placeholder} alt="Its egyptian!" height="250px" width="250px" onDoubleClick={() => setIsOpen(true)} onClick={() => setIsOpen(true)} />

        </section>

        <ImgModal open={isOpen} onClose={() => setIsOpen(false)} >
        
        <img src={photo.image} alt={`A visual of ${photo.name}`} />
        </ImgModal>

        </>
    )
   }
   export default HapCard