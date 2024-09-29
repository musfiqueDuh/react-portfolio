// src/App.jsx

import { motion } from 'framer-motion'; // Import Framer Motion
import './App.css';

const Navbar = () => {
    return (
        <div className="navbar-wrapper">
            <div className="logo">M-QUE</div>
            <nav className="navbar">
                <ul className="nav-links">
                    <li>Resume</li>
                    <li>Designs</li>
                    <li>Interests</li>
                    <li>Explore</li>
                </ul>
                {/* Using Framer Motion for the CTA button */}
                <motion.a
                    href="#contact"
                    className="cta-btn"
                    whileHover={{
                        scale: 1.1,       // Slight scale up on hover
                        backgroundColor: "#4036d9", // Change background color on hover
                        transition: { duration: 0.3 }, // Smooth transition
                    }}
                    whileTap={{ scale: 0.95 }} // Slight scale down on tap/click
                >
                    GET IN TOUCH
                </motion.a>
            </nav>
        </div>
    );
};

const App = () => {
    return (
        <div>
            <Navbar />
            <div className="hero"></div>
        </div>
    );
};

export default App;
