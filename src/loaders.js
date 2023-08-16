export async function getTestimonials() {
    const response = await fetch("http://localhost:4000/testimonials")
    const testimonials = await response.json()
    return { testimonials }

}

export async function getHappenings() {
    const response = await fetch("http://localhost:5000/photos")
    const photos = await response.json()
    return { photos }
}

