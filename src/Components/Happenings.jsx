import { useLoaderData } from "react-router-dom"
import HapCard from "./HapCard"


function Happenings() {

    //GET PHOTO OBJECTS FROM PHOTOS ARRAY
    const { photos } = useLoaderData()

    //MAP HAPPENING THUMBNAILS AND NAMES FOR NAV BAR
    const mappedHappenings = photos.map(photo => ( 
    <HapCard key={photo.id} photo={photo} /> ))


    return (
        <>

        <div className="happenings">
            <h1 className="section-title">happenings</h1>
            <nav className="photo-list" >
            {mappedHappenings}
            </nav>
            {/* <br /> */}
            <nav className="photo-list" >
            {mappedHappenings}
            </nav>
            <nav className="photo-list" >
            {mappedHappenings}
            </nav>
        </div>


        

        </>
    )
}

export default Happenings