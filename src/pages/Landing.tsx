import '../assets/styles/landing.css'
// import img1 from '../assets/images/landing-img.png'
// import img2 from '../assets/images/landing-img-2.jpg'
// import img3 from '../assets/images/landing-img3.jpg'
import Navbar from '../components/Navbar'

// TODO:
// Styling of landing-right

function Landing() {
  return (
    <>
        <Navbar />
        
        <div className="landing-container">
            <div className="landing-left-container" id='landing'>
                <div className="title-container">
                    <h1 className="title">
                        Epicure Catering
                    </h1>
                    <h3 className="sub-title">
                        Crafting Culinary Experiences Beyond Compare
                    </h3>
                </div>
                    <button className="btn-to-booking">
                        <a href="#book" className='link-to-book'>Elevate your Next Event</a>
                    </button>
            </div>
            <div className="landing-right-container">
        
            </div>
        </div>


    
    </>
  )
}

export default Landing