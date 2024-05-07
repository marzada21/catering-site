import { Events } from "../components/Events"
import { weddingSlides } from "../data/eventData.json";

// TODO:
// Add auto slide function to Events slider
// Create Reviews Component
// Finish Data Files for Events and Reviews
// Styling


function EventsReviews() {
  return (
    <>
    
        <div className="events-container" id="events">
            <Events data={weddingSlides}/>
            {/* 
            <Events data={fundraiserSlides}/>
            <Events data={partySlides}/>
             */}
        </div>

        <div className="reviews-container" id="reviews">
            {/* Reviews Component */}
        </div>
    
    </>
  )
}

export default EventsReviews