
import placeholder from "../assets/bw-egypt-bust-1.png"

function HapCard({happening}) {
    return (

        <>
        <img src={placeholder || happening.image} alt="Its an image" height="150px" width="150px" />
        <br />
        <h4>{happening.name}</h4>
        </>
    )
   }

   export default HapCard