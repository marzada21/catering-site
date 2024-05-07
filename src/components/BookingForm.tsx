function BookingForm() {
  return (
    <>
    
      <div className="booking-container">

        <div className="booking-form-container">

          <form action="">

            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />

            <label htmlFor="phone">Phone Number</label>
            <input type="text" id="phone" name="phone"/>

            <label htmlFor="checkbox">Contact Preference</label>
            <input type="checkbox" id="checkbox" />Email
            <input type="checkbox" id="checkbox" />Call
            <input type="checkbox" id="checkbox"/>Text

            <label htmlFor="date">Date of Event</label>
            <input type="date" id="date" name="date"/>

            <label htmlFor="event">Event Type</label>
            <select name="event" id="event">
              <option>--</option>
              <option value="wedding">Wedding</option>
              <option value="party">Party</option>
              <option value="business">Business</option>
              <option value="fundraiser">Fundraiser</option>
              <option value="other">Other</option>
            </select>

            <label htmlFor="courses">Courses (up to 7)</label>
            <input type="number" id="courses" name="courses" min={2} max={7} />

            <label htmlFor="notes">Notes:</label>
            <textarea name="notes" id="notes"></textarea>

            <input type="submit" value={"Schedule"}/>

          </form>

        </div>


      </div>
    
    </>
  )
}

export default BookingForm