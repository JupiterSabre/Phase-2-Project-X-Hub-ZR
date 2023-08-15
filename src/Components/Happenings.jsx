import { useLoaderData } from "react-router-dom"


function Happenings() {

    //GET PHOTO OBJECTS FROM PHOTOS
    const { photoObject } = useLoaderData()

    const mappedPhotoNav = photoObject.map(happening => (
        <>
        <h3>{happening.name}</h3>
        <img src={happening.image} alt="It happened!" />
        </>
    ))




    return (
        <div className="happenings">
        <h1>I AM THE HAPPENINGS PAGE WOO</h1>
        <nav>
            {mappedPhotoNav}

        </nav>
        </div>
    )
}

export default Happenings