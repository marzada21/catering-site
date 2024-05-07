import BookingForm from "../components/BookingForm"

// TODO:
// Add "funcitonality" to form and confirmation message
// Styling

function Booking() {
  return (
    <>
        <div className="booking-container" id="#book">
            <p className="booking-info">
                Welcome to Epicure Catering! 
                Let us elevate your event with exquisite cuisine and exceptional service. 
                Please fill out the form on your right to book our catering services. 
                We're excited to work with you!
            </p>
            <p className="booking-info">
                After submitting the form, expect a personalized touch 
                from one of our dedicated managers. 
                They'll be in touch to tailor your experience with us, 
                ensuring every detail, including your menu, is crafted to perfection.
            </p>

            <BookingForm />

        </div>
    
    
    </>
  )
}

export default Booking