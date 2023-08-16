

function TestimCard({testimonialObj}) {
    return (
        <div className="testim-card">
        <h4>{testimonialObj.name}</h4>
        <p>{testimonialObj.testimonial}</p>
        </div>
    )
}

export default TestimCard