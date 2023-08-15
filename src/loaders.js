export async function getTestimonials() {
    const response = await fetch("http://localhost:3000/testimonials")
    const testimonials = await response.json()
    return { testimonials }

}
