import ContactForm from "../components/ContactForm"

// TODO:
// Add submit "functionality" with conformation 
// Styling

function Contact() {
  return (
    <>
        <div className="contact-container">
            <h4>
            Have questions or need assistance? Our dedicated team is here to help.
            Reach out to us for personalized guidance and expert advice before 
            finalizing your booking.
            </h4>

            <ContactForm />
        </div>
    
    </>
  )
}

export default Contact