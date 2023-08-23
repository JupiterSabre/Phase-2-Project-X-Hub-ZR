import { useLoaderData } from "react-router-dom"
import HapCard from "./HapCard"
import RCalendar from "./RCalendar"


function Happenings({isOpen}) {

    //GET PHOTO OBJECTS FROM PHOTOS ARRAY
    const { photos } = useLoaderData()


    //FILTER PHOTOS BASED ON PHOTO.ID RANGES
    const filteredPhotosOne = photos.filter(photo => photo.id >= 0 && photo.id <= 15)
    const filteredPhotosTwo = photos.filter(photo => photo.id >= 10 && photo.id <= 22)
    const filteredPhotosThree = photos.filter(photo => photo.id >= 15 && photo.id <= 27)

    //MAP CARD COMPONENTS FOR EACH FILTERED PHOTO SET

    const mappedHappeningsOne =filteredPhotosOne.map(photo => ( 
    <HapCard key={photo.id} photo={photo} /> ))

    const mappedHappeningsTwo =filteredPhotosTwo.map(photo => ( 
    <HapCard key={photo.id} photo={photo} /> ))

    const mappedHappeningsThree =filteredPhotosThree.map(photo => ( 
    <HapCard key={photo.id} photo={photo} /> ))
        

    return (
        <>

        <div className="happenings">
            <h1 className="section-title">happenings</h1>
            <RCalendar />

            <nav className="photo-list" >
            {mappedHappeningsOne}
            </nav>
            <nav className="photo-list" >
            {mappedHappeningsTwo}
            </nav>
            <nav className="photo-list" >
            {mappedHappeningsThree}
            </nav>
        </div>

      


        

        </>
    )
}

export default Happenings