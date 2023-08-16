export async function getTestimonials() {
    const response = await fetch("http://localhost:4000/testimonials")
    const testimonials = await response.json()
    return { testimonials }

}

export async function getHappenings() {
    const response = await fetch("http://localhost:3000/photos")
    const photoObjects = await response.json()
    console.log(photoObjects)
    return { photoObjects }
}

// getHappenings()
