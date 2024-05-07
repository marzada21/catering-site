import '../assets/styles/navbar.css';

// TODO:
// Ensure functionality
// Finalize Styling

function Navbar() {
  return (
    <>
    
        <div className="nav-container">

            <nav>
                <a href="#landing" className="nav-link">Home</a>
                <a href="#about" className="nav-link">About</a>
                <a href="#events" className="nav-link">Events</a>
                <a href="#reviews" className="nav-link">Reviews</a>
                <a href="#book" className="nav-link">Book</a>
                <a href="#contact" className="nav-link">Contact</a>
            </nav>

        </div>
    
    </>
  )
}

export default Navbar