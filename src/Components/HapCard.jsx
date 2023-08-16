
import placeholder from "../assets/bw-egypt-bust-1.png"

function HapCard({ photo }) {
    
    function handleImageClick() {
        console.log("YOU WISH YOU WERE THERE")
    }

    // CLICK EVENT DOES NOT WORK YET, PLACEHOLDER IMAGE KEEPS RENDERING, FORMAT THE NAME TEXT OF EACH HAPPENING CARD.
console.log(photo)

    return (

        <section className="hap-card"> 
        <header>{photo.name}</header>
        <img src={photo.image || placeholder} alt="Its egyptian!" height="250px" width="250px" onClick={handleImageClick} />

        </section>
    )
   }

   export default HapCard