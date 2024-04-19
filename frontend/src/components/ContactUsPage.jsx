import React from 'react';
import '../styles/ContactUsPage.scss'; 

function ContactUsPage() {
    return (
        <div className="container">
            <div className="help">
                <h2>Help</h2>
                <p>If you need assistance, please contact the following:</p>
            </div>
            <div className="boxes-container">
                <div className="box">
                    <h2>Join Us!</h2>
                    <p>For organizations interested in joining our platform, please contact us at <span className="email">join@wildlink.com</span></p>
                </div>
                <div className="box">
                    <h2>Need Help?</h2>
                    <p>If you need any assistance or have general inquiries, feel free to reach out to us at <span className="email">help@wildlink.com</span></p>
                </div>
            </div>
        </div>
    );
}

export default ContactUsPage;
