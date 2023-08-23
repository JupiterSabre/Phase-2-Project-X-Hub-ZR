import { useNavigate } from "react-router-dom"


function Home () {
    const navigate= useNavigate();

return (
    <>

    <h2 className="section-title">welcome back friend,</h2>
    <div className="welcome-msg">
    <p>It's been [X] weeks since our first iteration of XXXXXXXXXX club. If you're seeing this, it's because you took the leap with us on this journey. We are excited to share our new form with you.</p>
    <p>We thank you, and hope you'll continue to conspure and collaborate with us in this ode to NYC nightlife, this living art project</p>
    <p>In the continued tradition of making a space a place, our new physical iteration will be located at [XXXXXXXXXX].</p>
    <p>See you in the flesh, collective humanity.</p>
    <p>XO</p>
    <br></br>
    <button  className="button" onClick={() => navigate(`/signUp`)}>Sign up for Fall '24</button>
    </div>

    </>
    )

}

export default Home