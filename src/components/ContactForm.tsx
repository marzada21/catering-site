function ContactForm() {
  return (
    <>
    
      <div className="contactform-container">

        <div className="form-container">
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name"/>

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email"/>

            <label htmlFor="phone">Phone Number</label>
            <input type="text" id="phone" name="phone"/>

            <label htmlFor="notes">Notes:</label>
            <textarea name="notes" id="notes"></textarea>

            <label htmlFor="checkbox">Contact Preference</label>
            <input type="checkbox" id="checkbox"/>Email
            <input type="checkbox" id="checkbox"/>Call
            <input type="checkbox" id="checkbox"/>Text

            <input type="submit" value={"Contact"}/>
          </form>
        </div>

      </div>
    
    
    </>
  )
}

export default ContactForm