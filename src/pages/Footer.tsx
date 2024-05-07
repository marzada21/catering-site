import map from '../assets/images/chicagomap.jpg';

// TODO:
// Styling

function Footer() {
  return (
    <>
    
      <div className="footer-container">

        <div className="contact-info-container">
          <h4>
            Contact Us
          </h4>
          <ul className="contact-info">
            <li>+1 (714) 247-6578</li>
            <li>epicurecatering@gmail.com</li>
            <li>
              <i className="fa-brands fa-instagram" style={{color: '#000000'}}></i>
              @epicurecatering
            </li>
            <li>
              <i className="fa-brands fa-facebook" style={{color: '#000000'}}></i>
              @epicurecatering
            </li>
          </ul>
        </div>

        <div className="locations-container">
          <h4>
            Locations
          </h4>
          <ul className="locations">
            <li>Los Angeles, CA</li>
            <li>Indianapolis, IN</li>
            <li>New York City, NY</li>
            <li>Chicago, IL</li>
          </ul>
        </div>

        <div className="original-location-container">
          <h4>
            Started In: 
          </h4>
          <p>Chicago, IL</p>
            <img src={map} alt="Fine Dining Dish" className="landing-img" />
        </div>

      </div>
    
    </>
  )
}

export default Footer