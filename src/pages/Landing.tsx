import '../assets/styles/landing.css'
import img1 from '../assets/images/landing-img.png';
import Navbar from '../components/Navbar';

// TODO:
// Button Links to Correct Spot
// Styling

function Landing() {
  return (
    <>
        <Navbar />
        
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
                Elevate your Next Event
            </button>
        </div>

        <div className="landing-right-container">
            
            <div className="landing-img-container">
                <img src={img1} alt="Fine Dining Dish" className="landing-img" />
            </div>

        </div>


    
    </>
  )
}

export default Landing