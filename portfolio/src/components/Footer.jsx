import React from 'react';
import '../styling/Footer.css'; // Import your CSS file for Footer component

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-body-tertiary text-center text-lg-start">
            <div className="text-center p-3 edit">
                © {currentYear} Copyright: Amey Sati
            </div>
        </footer>
    );
}

export default Footer;
