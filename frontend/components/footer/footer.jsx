import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer-container dark-green-fill">
                   <h4 className="white">Talkspace</h4>
                   <div class="icons row">
                        <img className="social-icon" src={window.githubURL} />
                        <img className="social-icon" src={window.contactURL} />
                        <img className="social-icon" src={window.linkedInURL} />
                        <img className="social-icon" src={window.instagramURL} />
                   </div>
                   <div className="disclaimer row white">
                        This is a clone of Talkspace, built by Cindy Tong at App Academy
        
            </div>
        </div>
    )
}

export default Footer; 