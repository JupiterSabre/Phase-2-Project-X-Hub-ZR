import { useLoaderData } from "react-router-dom"
import HapCard from "./HapCard"


function Happenings() {

    //GET PHOTO OBJECTS FROM PHOTOS
    const { photoObjects } = useLoaderData()


    return (
        <div className="happenings">
        <h1>I AM THE HAPPENINGS PAGE WOO</h1>
         <nav className="photo-list" >
            {photoObjects.map(happening => (
                <HapCard key={happening.id} happening={happening} /> ))}
         </nav>
        </div>
    )
}

export default Happenings